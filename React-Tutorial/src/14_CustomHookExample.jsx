import { useState } from "react";

export default function CustomHookExample() {
  const {count, increment, decrement} = useCounter(0);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);

  return {count, increment, decrement}
}