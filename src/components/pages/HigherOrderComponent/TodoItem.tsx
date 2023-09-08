import { ItemType } from ".";

export interface TodoItemProps {
  item: ItemType;
}

function TodoItem({ item }: TodoItemProps) {
  return (
    <li>
      {item.task} {item.completed.toString()}
    </li>
  );
}

export default TodoItem;
