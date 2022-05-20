import { InputField } from "./components/InputField/index";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./context/todo";

const App = () => {
  const { handleSubmit } = useTodo();
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <InputField handleSubmit={handleSubmit} />
      <TodoList />
    </div>
  );
}

export default App;