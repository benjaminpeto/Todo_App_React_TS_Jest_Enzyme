import { shallow, ShallowWrapper } from "enzyme";
import { cleanup } from "@testing-library/react";

import { TodoList } from "./index";
import { ListItem } from "../ListItem";

const todos = [
	{
		id: "2332",
		name: "learn TypeScript",
		isComplete: false,
	},
];
const editTodo = jest.fn();
const toggleTodo = jest.fn();
const deleteTodo = jest.fn();

afterEach(cleanup);

describe("<TodoList /> renders correctly", () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(
			<TodoList
				todos={todos}
				editTodo={editTodo}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
			/>
		);
	});

	it("with a <ul> element and <ListItem> inside", () => {
		expect(
			wrapper.containsMatchingElement(
				<ul>
					<ListItem />
				</ul>
			)
		).toBe(true);
	});
});
