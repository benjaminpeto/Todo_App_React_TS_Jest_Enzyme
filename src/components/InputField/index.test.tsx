import { shallow, ShallowWrapper } from "enzyme";

import { InputField } from "./";

const onSubmit = jest.fn();

describe("<InputField /> renders correctly", () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<InputField onSubmit={onSubmit} />);
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
});
