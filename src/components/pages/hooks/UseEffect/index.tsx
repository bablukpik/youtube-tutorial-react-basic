import React, { useEffect, useState, memo, useContext } from "react";
import { UserContext } from "../UseContext";

interface Props {
  countClick?: number;
  onClick?: (countDataFromChild: number) => void;
}

function UseEffect({ countClick, onClick }: Props) {
  const [count, setCount] = useState(0);
  const user = useContext(UserContext);
  useEffect(() => {
    console.log({ CountRan: count });
  }, [count]);

  const handleClick = () => {
    // count = count + 1
    // react baching
    // setCount(count + 1); // 0+1 = 1
    // setCount(count + 1); // 1+1 = 2
    // setCount(count + 1); // 2+1 = 3
    setCount((prevCount) => (prevCount + 3));
    if (onClick) {
      onClick(count);
    }
  };

  console.log("child re-rendered");

  return (
    <div>
      <p>Child from Parent: {countClick}</p>
      <p>Child: {count}</p>
      <button onClick={handleClick}>Increase from Child</button>
      <p>User Context Data: {user.name}</p>
    </div>
  );
}

export default memo(UseEffect);
