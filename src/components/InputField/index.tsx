import { useState } from "react";

type InputFieldProps = {
  addTodo: (name: string) => void;
};

export const InputField = ({ addTodo }: InputFieldProps) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewTodo(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newTodo) {
      addTodo(newTodo);
    }
    setNewTodo("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Write your task here.."
        value={newTodo}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
};
