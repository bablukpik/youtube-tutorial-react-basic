import { ItemType } from ".";
import TodoItem from "./TodoItem";
import withConditionalFeedback from "./withConditionalFeedback";

interface TodoListProps {
  data: ItemType[];
}

function TodoList({ data }: TodoListProps) {
  return (
    <ul>
      {data.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

// export default TodoList;
export default withConditionalFeedback(TodoList);
