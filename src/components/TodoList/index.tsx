import { TodoType } from "../../types/todos";
import { ListItem } from "../ListItem";

import "./styles.css";

type TodoListProps = {
	todos: TodoType[] | [];
	toggleTodo: (id: string) => void;
	deleteTodo: (todoId: string) => void;
	editTodo: (name: string, id: string) => void;
};

export const TodoList = ({
	todos,
	editTodo,
	toggleTodo,
	deleteTodo,
}: TodoListProps) => {
	return (
		<ul>
			{todos.map((todo) => (
				<ListItem
					listItem={todo}
					key={todo.id}
					editListItem={editTodo}
					toggleListItem={toggleTodo}
					deleteListItem={deleteTodo}
				/>
			))}
		</ul>
	);
};
