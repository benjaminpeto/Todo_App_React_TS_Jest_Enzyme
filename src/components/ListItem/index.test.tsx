import { shallow, ShallowWrapper } from "enzyme";
import { cleanup } from "@testing-library/react";

import { ListItem } from "./index";

const listItem = {
	id: "1234",
	name: "Task 1",
	isComplete: false,
};
const editListItem = jest.fn();
const toggleListItem = jest.fn();
const deleteListItem = jest.fn();

afterEach(cleanup);

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

	it("with a <li> element with the text `Task 1`", () => {
		expect(wrapper.containsMatchingElement(<li>Task 1</li>)).toBe(true);
	});

	it("and a <div> element with 3 <button> inside", () => {
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

	describe("when Edit <button> is clicked", () => {
		beforeEach(() => {
			wrapper.find("[data-testid='edit-btn']").simulate("click");
		});

		it("toggles the <button> text from `Edit` to `Save`", () => {
			expect(wrapper.find("[data-testid='edit-btn']").text()).toBe("Save");
		});

		it("then renders an <input>", () => {
			expect(wrapper.containsMatchingElement(<input />)).toBe(true);
		});

		it("then the user changes the task and click the <button> again", () => {
			wrapper
				.find('input[type="text"]')
				.simulate("change", { target: { value: "newer task" } });
			expect(wrapper.find('input[type="text"]').prop("value")).toBe(
				"newer task"
			);
			wrapper.find("[data-testid='edit-btn']").simulate("click");
			expect(wrapper.find("[data-testid='edit-btn']").text()).toBe("Edit");
		});
	});

	describe("when Done <button> is clicked", () => {
		it("<li> classname will change to `completed-listItem`", () => {
			wrapper.find("[data-testid='done-btn']").simulate("click");
			expect(toggleListItem).toHaveBeenCalledTimes(1);
		});
	});

	describe("when Delete <button> is clicked", () => {
		it("listItem will be deleted`", () => {
			wrapper.find("[data-testid='delete-btn']").simulate("click");
			expect(deleteListItem).toHaveBeenCalledTimes(1);
		});
	});
});
