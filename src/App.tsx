import { InputField } from "./components/InputField/index";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./context/todo";

const App = () => {
  const { addTodo } = useTodo();
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <InputField onSubmit={addTodo} />
      <TodoList />
    </div>
  );
}

export default App;