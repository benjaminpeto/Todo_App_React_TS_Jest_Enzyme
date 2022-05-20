import { useState } from "react";

type InputFieldProps = {
  handleSubmit: (name: string) => void;
}

export const InputField = ({handleSubmit}: InputFieldProps) => {
  const [ newTodo, setNewTodo ] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const value = e.target.value;
    setNewTodo(value);
  }

  const addTodo = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit(newTodo);
    setNewTodo("");
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
          onClick={addTodo}
        >
          Add
        </button>
    </>
  );
}