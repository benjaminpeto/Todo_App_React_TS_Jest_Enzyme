import { InputField } from "./components/InputField/index";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./context/todo";

const App = () => {
  const {todos, setTodos } = useTodo();
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <InputField todos={todos} setTodos={setTodos} />
      <TodoList />
    </div>
  );
}

export default App;