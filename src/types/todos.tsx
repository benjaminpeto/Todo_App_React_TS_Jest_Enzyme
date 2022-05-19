export type TodoType = {
  id: string,
  name: string,
  isComplete: boolean,
};

export type TodoContextType = {
  todos: TodoType[] | [];
  markCompletedTodo: (id: string) => void;
  deleteTodo: (todoId: string) => void;
  setTodos: (value: React.SetStateAction<TodoType[]>) => void
};

export type TodoProviderType = {
  children: React.ReactNode;
};