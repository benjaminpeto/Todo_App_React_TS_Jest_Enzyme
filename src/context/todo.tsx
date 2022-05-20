import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";
import { TodoContextType, TodoProviderType, TodoType } from "../types/todos";

const TodoContext = createContext({} as TodoContextType);

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }: TodoProviderType) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (name: string) => {
    setTodos([
      ...todos,
      {
        id: nanoid(),
        name,
        isComplete: false,
      },
    ]);
  };

  const editTodo = (name: string, id: string) => {
    setTodos((todos) => {
      return todos.map((todo) => (todo.id === id ? { ...todo, name } : todo));
    });
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

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        editTodo,
        addTodo,
        markCompletedTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};