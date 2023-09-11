import { useState } from 'react';

export const useCounter = (initialCount: number) => {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return {
    increment,
    decrement,
    count,
  };
};
