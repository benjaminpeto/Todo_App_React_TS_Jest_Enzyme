import { createContext, useContext, useState } from "react";

import { TodoContextType, TodoProviderType, TodoType } from "../types/todos";

const TodoContext = createContext({} as TodoContextType);

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }: TodoProviderType) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

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
        markCompletedTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};