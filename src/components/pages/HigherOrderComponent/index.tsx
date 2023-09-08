import TodoList from './TodoList';

export interface ItemType {
  id: string;
  task: string;
  completed: boolean;
}

const TODOS: ItemType[] = [
  { id: '1', task: 'Do this', completed: true },
  { id: '2', task: 'Do that', completed: false },
];

const fetchData = () => ({ data: TODOS, isLoading: true });

function HigherOrderComponent() {
  const { data, isLoading } = fetchData();

  // if (isLoading) return <div>Loading data.</div>;
  // if (!data) return <div>No data loaded yet.</div>;
  // if (!data.length) return <div>Data is empty.</div>;
  return <TodoList data={data} isLoading={isLoading} />;
}

export default HigherOrderComponent;
