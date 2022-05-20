import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";
import { TodoContextType, TodoProviderType, TodoType } from "../types/todos";

const TodoContext = createContext({} as TodoContextType);

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }: TodoProviderType) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleSubmit = (name: string) => {
    if (setTodos.length > 0) {
      setTodos([
        ...todos,
        {
          id: nanoid(),
          name,
          isComplete: false,
        },
      ]);
    };
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
        handleSubmit,
        markCompletedTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};