// Problem Statement: Create a toggle switch component between "On" and "Off" states.
'use client';

import { useState } from 'react';

const ToggleSwitch = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-center px-2 py-1 bg-black w-full min-h-screen">
      <div
        className={`w-20 h-10 rounded-full cursor-pointer relative flex items-center px-2 transition-colors duration-300 ease-in-out ${
          toggle ? 'bg-green-400' : 'bg-red-400'
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <div
          className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${
            toggle ? 'translate-x-10' : 'translate-x-0'
          }`}
        />
        <span className={`w-full text-white font-semibold z-10 select-none ${toggle ? 'text-left pl-2' : 'text-end'}`}>
          {toggle ? 'ON' : 'OFF'}
        </span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
