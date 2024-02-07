import React, { useEffect } from "react";
interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter = ({ count, setCount }: CounterProps) => {
  function multiplyBy2(value: number): number {
    return value * 2;
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h1>{multiplyBy2(count)}</h1>
    </>
  );
};

export default Counter;
