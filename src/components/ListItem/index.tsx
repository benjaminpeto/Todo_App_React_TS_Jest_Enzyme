import { useState } from "react";
import { useTodo } from "../../context/todo";

type ListItemProps = {
  todo: {
    id: string;
    name: string;
    isComplete: boolean;
  }
};

export const ListItem = ({ todo }: ListItemProps) => {
  const { markCompletedTodo, deleteTodo, editTodo } = useTodo();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const toggleEdit = () => {
    editTodo('changed value', todo.id);
    setIsEdit(!isEdit);
  };

	return (
		<li
      key={todo.id}
      className={todo.isComplete ? "completed-todo" : ""}
    >
      {/* {isEdit && (
        <input
          type="text"
          placeholder={todo.name}
          />
      )} */}
			{todo.name}
			<div className="btn-wrapper">
        <button onClick={toggleEdit}>
          {!isEdit ? "Edit": "Save"}
        </button>
				<button onClick={() => markCompletedTodo(todo.id)}>Done</button>
				<button onClick={() => deleteTodo(todo.id)}>Delete</button>
			</div>
		</li>
	);
};
