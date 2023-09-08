import { ItemType } from ".";
import TodoItem from "./TodoItem";
import withConditionalFeedback from "./withConditionalFeedback";

interface TodoListProps {
  data: ItemType[];
}

function TodoList({ data }: TodoListProps) {
  return (
    <div>
      <h1>Higher Order Component</h1>
      <ul>
        {data.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

// export default TodoList;
export default withConditionalFeedback(TodoList);
