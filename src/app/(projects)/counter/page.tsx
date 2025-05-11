// Problem Statement: Create a simple counter component that increases or decreases the count when clicking buttons.
'use client';
import Button from '@/components/Button';
import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    // setCounter((prev) => prev + 1); // use this in case of multiple updates or queques cases example loops, setTimeout
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div className="flex items-center justify-center h-full flex-col">
      <div>Counter: {counter}</div>
      <div>
        <Button type="button" disabled={false} buttonText="+" onClick={increment} className="mr-2" />
        <Button type="button" disabled={false} buttonText="-" onClick={decrement} className="bg-red-400" />
      </div>
    </div>
  );
};
export default Counter;
