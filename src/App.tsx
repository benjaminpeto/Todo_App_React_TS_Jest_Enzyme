import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./context/todo";

const App = () => {
  const { addTodo, todos } = useTodo();

  return (
    <div className="App">
      <h1>Todo App</h1>
      <InputField onSubmit={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
