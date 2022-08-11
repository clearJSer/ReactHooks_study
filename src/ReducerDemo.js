import React, { useReducer } from "react";

export default function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'add':
        return state + 1;
      case 'sub':
        return state - 1;
      default:
        return state;
    }
  }, 0)
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatch('add')}>+</button>
      <button onClick={() => dispatch('sub')}>-</button>
    </>

  )
}