import useCount from "./useCount";
import useCounter from "./useCounter";

export default function CustomHook() {
  const [ count, increment, decrement ] = useCounter(0);
  const counter = useCount(0);
  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount((prevCount: number) => prevCount + 3);
  // };

  return (
    <>
      <h1>Custom Hook</h1>
      <p> {count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Increase</button>
      <h2>Use Count</h2>
      <p>{counter}</p>
    </>
  );
}
