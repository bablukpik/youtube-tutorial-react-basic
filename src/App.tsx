import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import { useState, useMemo, useCallback } from "react";
import UseEffect from "./components/pages/hooks/UseEffect";

function App() {
  let [count, setCount] = useState(0);

  const memoizedCount = useMemo(() => {
    return count;
  }, [count]);

  const memoizedHandleCount = useCallback((countDataFromChild: number) => {
    setCount(countDataFromChild);
  }, []);

  const handleClick = () => {
    // count = count + 1
    // react batching
    // setCount(count + 1); // 0+1 = 1
    // setCount(count + 1); // 1+1 = 2
    // setCount(count + 1); // 2+1 = 3
    setCount((prevCount) => (prevCount + 3));
  };

  // const handleCount = (countDataFromChild: number) => {
  //   setCount(countDataFromChild);
  // };

  return (
    <>
      <p> Parent: {count}</p>
      <button onClick={handleClick}>Increase from App</button>
      <UseEffect countClick={memoizedCount} onClick={memoizedHandleCount} />
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
