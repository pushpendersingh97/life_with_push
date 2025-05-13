'use client';
import { useState } from 'react';
import TodoCards from './_components/TodoCards';
import Button from '@/components/Button';

const ToDoList = () => {
  const [inputTxt, setInputTxt] = useState<string>('');
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputTxt === '') {
      return;
    }

    setToDoList((prev) => [...prev, inputTxt]);
    setInputTxt('');
  };

  const removeItem = (index: number) => {
    const updatedArr = [...toDoList];
    updatedArr.splice(index, 1);
    setToDoList(updatedArr);
  };

  return (
    <div className="flex items-center flex-col min-h-screen bg-[#F6DED850] text-[#B82132]">
      <div className="px-8 py-12 bg-[#F2B28C50] my-4 rounded-2xl w-1/2">
        <div className="text-3xl font-bold text-center mb-12 underline">To Do List</div>
        <form onSubmit={addItem}>
          <div className="flex w-full">
            <input
              type="text"
              name="inputTxt"
              id="inputTxt"
              value={inputTxt}
              onChange={(e) => setInputTxt(e.target.value)}
              className="border-2 border-r-0 px-4 py-2 rounded-l-full grow-2 focus:outline-none"
              placeholder="Type Something..."
            />
            <Button buttonText="Add Item" type="submit" className="rounded-l-2xl !bg-[#B82132]" />
          </div>
        </form>
        <div className="flex flex-col mt-4">
          <span className="font-semibold text-lg">List of Tasks</span>
          {toDoList.length === 0 && <span>No Records Found...</span>}
          {toDoList.length > 0 &&
            toDoList.map((item, index) => <TodoCards key={index} item={item} index={index} removeItem={removeItem} />)}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
