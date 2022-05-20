import { useState } from "react";

import "./styles.css";

type ListItemProps = {
	listItem: {
		id: string;
		name: string;
		isComplete: boolean;
	};
	editListItem: (name: string, id: string) => void;
	toggleListItem: (id: string) => void;
	deleteListItem: (todoId: string) => void;
};

export const ListItem = ({
	listItem,
	editListItem,
	toggleListItem,
	deleteListItem,
}: ListItemProps) => {
	const [isEdit, setIsEdit] = useState(false);
	const [todoName, setTodoName] = useState("");

	const toggleEdit = () => {
		if (!listItem.isComplete) {
			editListItem(listItem.name, listItem.id);
			setIsEdit(!isEdit);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoName(e.target.value);
		return (listItem.name = todoName);
	};

	return (
		<div className="list-wrapper">
			{isEdit ? (
				<input
					className="edit-input"
					type="text"
					placeholder={listItem.name}
					value={todoName}
					onChange={handleChange}
				/>
			) : (
				<li
					key={listItem.id}
					className={listItem.isComplete ? "completed-listItem" : ""}
				>
					{listItem.name}
				</li>
			)}
			<div className="btn-wrapper">
				<button onClick={toggleEdit}>{!isEdit ? "Edit" : "Save"}</button>
				<button onClick={() => toggleListItem(listItem.id)}>Done</button>
				<button onClick={() => deleteListItem(listItem.id)}>Delete</button>
			</div>
		</div>
	);
};
