import React, { useState } from 'react';
import { nanoid } from 'nanoid';

type TodoType = {
  id: string,
  name: string,
}

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const value = e.target.value;
    setNewTodo(value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: nanoid(),
        name: newTodo,
      },
    ]);
    setNewTodo("");
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
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
      <ul>
        {
          todos.map(todos => (
            <li key={todos.id}>{todos.name}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
