import React, { useState } from 'react';
import { nanoid } from 'nanoid';

type TodoType = {
  id: string,
  name: string,
  isComplete: boolean,
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
        isComplete: false,
      },
    ]);
    setNewTodo("");
  };

  const deleteTodo = (id: string) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  const markCompleteTodo = (id: string) => {
    setTodos((todos) => {
      return todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
    });
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
            <li key={todos.id} className={todos.isComplete ? "completed-todo" : ""}>
              {todos.name}
              <button onClick={() => deleteTodo(todos.id)}>Delete</button>
              <button onClick={() => markCompleteTodo(todos.id)}>Done</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
