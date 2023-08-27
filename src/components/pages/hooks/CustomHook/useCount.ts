import { useState, useEffect, useDebugValue } from "react";

function useCount(initialValue: number) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useDebugValue(count);
  return count;
}

export default useCount;
