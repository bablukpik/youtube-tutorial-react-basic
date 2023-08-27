import { useState, useDebugValue } from "react";

function useCounter(initialValue: number) {
  // const [count, setCount] = useState(0);
  // return [count, setCount] as const;
  const [count, setCount] = useState(initialValue);

  useDebugValue(count);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return [count, increment, decrement] as const;
}

export default useCounter;
