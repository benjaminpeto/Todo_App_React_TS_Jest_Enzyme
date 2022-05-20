import { useTodo } from "../../context/todo";
import { ListItem } from "../ListItem";

export const TodoList = () => {
  const { todos } = useTodo();

  return (
    <ul>
        {
          todos.map(todo => (
            <ListItem todo={todo} key={todo.id} />
          ))
        }
    </ul>
  );
};