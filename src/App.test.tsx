import { shallow, ShallowWrapper } from "enzyme";

import App from "./App";

describe("<App> renders correctly", () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it("should have 3 children", () => {
		expect(wrapper.children()).toHaveLength(3);
	});

	it("renders an <h1> with the text of `Todo App`", () => {
		expect(wrapper.find("h1").text()).toBe("Todo App");
	});
});
