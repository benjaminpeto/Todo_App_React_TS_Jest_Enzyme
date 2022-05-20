export type TodoType = {
  id: string,
  name: string,
  isComplete: boolean,
};

export type TodoContextType = {
  todos: TodoType[] | [];
  setTodos: (value: React.SetStateAction<TodoType[]>) => void;
  handleSubmit: (name: string) => void;
  markCompletedTodo: (id: string) => void;
  deleteTodo: (todoId: string) => void;
};

export type TodoProviderType = {
  children: React.ReactNode;
};