import { shallow, ShallowWrapper } from "enzyme";

import { ListItem } from "./";

const listItem = {
	id: "fafjk3-rk32",
	name: "Task 1",
	isComplete: false,
};
const editListItem = jest.fn();
const toggleListItem = jest.fn();
const deleteListItem = jest.fn();

describe("<ListItem /> renders correctly", () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(
			<ListItem
				listItem={listItem}
				editListItem={editListItem}
				toggleListItem={toggleListItem}
				deleteListItem={deleteListItem}
			/>
		);
	});

	it("and renders a <li> element with the text `Task 1`", () => {
		expect(wrapper.containsMatchingElement(<li>Task 1</li>)).toBe(true);
	});

	it("and renders a <div> element with 3 <button> inside", () => {
		expect(
			wrapper.containsMatchingElement(
				<div>
					<button>Edit</button>
					<button>Done</button>
					<button>Delete</button>
				</div>
			)
		).toBe(true);
	});
});
