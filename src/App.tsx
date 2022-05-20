import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./context/todo";

const App = () => {
  const { addTodo, todos, toggleTodo, deleteTodo, editTodo } = useTodo();

  return (
    <div className="App">
      <h1>Todo App</h1>
      <InputField onSubmit={addTodo} />
      <TodoList
        todos={todos}
        editTodo={editTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
