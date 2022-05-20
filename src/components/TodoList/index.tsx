import { TodoType } from "../../types/todos";
import { ListItem } from "../ListItem";

type TodoListProps = {
  todos: TodoType[];
};

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
