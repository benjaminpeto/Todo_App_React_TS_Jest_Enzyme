import React, { useState } from 'react';
import { nanoid } from 'nanoid';

type TodoType = {
  id: string,
  name: string,
  isComplete: boolean,
}

const App = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [todos, setTodos] = useState<TodoType[]>([]);
  //const [isEdit, setIsEdit] = useState<boolean>(false);

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

  const deleteTodo = (id: string) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  const markCompletedTodo = (id: string) => {
    setTodos((todos) => {
      return todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
    });
  };

  /* const handleEditTodo = (id: string, name: string) => {
    setTodos((todos) => {
      return todos.map((todo) => (
        todo.id === id ? { ...todo, name} : todo)
      );
    });
    setIsEdit(false)
  }; */

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
          todos.map(todo => (
            <li
              key={todo.id}
              className={todo.isComplete ? "completed-todo" : ""}
            >
              {todo.name}
              <div className='btn-wrapper'>
                <button disabled onClick={() => {}}>Edit</button>
                <button onClick={() => markCompletedTodo(todo.id)}>Done</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
