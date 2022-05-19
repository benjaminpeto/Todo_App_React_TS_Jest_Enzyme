import { useTodo } from "../../context/todo";

type ListItemProps = {
  todo: {
    id: string;
    name: string;
    isComplete: boolean;
  };
};

export const ListItem = ({ todo }: ListItemProps) => {
  const { markCompletedTodo, deleteTodo } = useTodo();

	return (
		<li key={todo.id} className={todo.isComplete ? "completed-todo" : ""}>
			{todo.name}
			<div className="btn-wrapper">
				<button disabled onClick={() => {}}>
					Edit
				</button>
				<button onClick={() => markCompletedTodo(todo.id)}>Done</button>
				<button onClick={() => deleteTodo(todo.id)}>Delete</button>
			</div>
		</li>
	);
};
