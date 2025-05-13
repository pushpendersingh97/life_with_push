'use client';
import { useState } from 'react';
import Cards from './_components/Cards';
import Button from '@/components/Button';

const ToDoList = () => {
  const [inputTxt, setInputTxt] = useState<string>('');
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addItem = () => {
    setToDoList((prev) => [...prev, inputTxt]);
    setInputTxt('');
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-black text-white">
      <div className="flex">To Do List</div>
      <div className="flex flex-col">
        <input
          type="text"
          name="inputTxt"
          id="inputTxt"
          value={inputTxt}
          onChange={(e) => setInputTxt(e.target.value)}
          className="border-2 border-amber-50 px-4 py-2 rounded-full"
          placeholder="Type Something..."
        />
        <Button buttonText="Add Item" onClick={addItem} type="submit" className="mt-4" />
      </div>
      <div className="flex">
        {toDoList.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
