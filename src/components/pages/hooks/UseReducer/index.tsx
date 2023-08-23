import React, { useReducer } from "react";

interface State {
  count: number;
}

interface Action {
  type: "increment" | "decrement";
}

const initialState: State = { count: 0 };

function reducer(state: State = initialState, action: Action) {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  if (action.type === "decrement") {
    return { count: state.count - 1 };
  }
  return state;
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Use Reducer</h1>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
}
