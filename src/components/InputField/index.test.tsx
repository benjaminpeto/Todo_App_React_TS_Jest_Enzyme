import { mount, ReactWrapper } from "enzyme";

import { InputField } from "./index";

const onSubmit = jest.fn();

describe("<InputField /> renders correctly", () => {
	let wrapper: ReactWrapper;

	beforeEach(() => {
		wrapper = mount(<InputField onSubmit={onSubmit} />);
	});

	it("should have 2 children", () => {
		expect(wrapper.children()).toHaveLength(2);
	});

	it("should have an `input` element", () => {
		expect(wrapper.containsMatchingElement(<input />)).toBe(true);
	});

	it("should have a `button` element", () => {
		expect(wrapper.containsMatchingElement(<button>Add</button>)).toBe(true);
	});

	it("renders a <button> with the text of `Add`", () => {
		expect(wrapper.find("button").text()).toBe("Add");
	});

	describe("the user populates the input", () => {
		it("should update the state property input with `some task` and submit by clicking the button", () => {
			const input = wrapper.find('input[type="text"]');
			input.simulate("change", { target: { value: "some task" } });
			wrapper.find("button").simulate("click");
			expect(onSubmit).toHaveBeenCalledWith("some task");
		});
	});
});
