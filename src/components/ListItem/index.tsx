import { useState } from "react";

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

export const ListItem = ({ listItem, editListItem, toggleListItem, deleteListItem }: ListItemProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    editListItem("changed value", listItem.id);
    setIsEdit(!isEdit);
  };

  return (
    <li
      key={listItem.id}
      className={listItem.isComplete ? "completed-listItem" : ""}
    >
      {listItem.name}
      <div className="btn-wrapper">
        <button onClick={toggleEdit}>{!isEdit ? "Edit" : "Save"}</button>
        <button onClick={() => toggleListItem(listItem.id)}>Done</button>
        <button onClick={() => deleteListItem(listItem.id)}>Delete</button>
      </div>
    </li>
  );
};
