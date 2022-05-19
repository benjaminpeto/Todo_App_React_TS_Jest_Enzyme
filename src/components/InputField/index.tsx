import { nanoid } from "nanoid";
import { useState } from "react";
import { TodoType } from "../../types/todos";

type InputFieldProps = {
  todos: TodoType[],
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export const InputField = ({todos, setTodos}: InputFieldProps) => {
  const [ newTodo, setNewTodo ] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const value = e.target.value;
    setNewTodo(value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (newTodo.length > 0) {
      setTodos([
        ...todos,
        {
          id: nanoid(),
          name: newTodo,
          isComplete: false,
        },
      ]);
      setNewTodo("");
    }
  };

  return (
    <>
      <input
          type='text'
          placeholder='Write your task here..'
          value={newTodo}
          onChange={handleChange}
        />
        <button
          type='submit'
          onClick={handleSubmit}
        >
          Add
        </button>
    </>
  );
}