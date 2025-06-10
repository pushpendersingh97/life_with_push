import React from 'react';
import { User } from 'lucide-react';

const LeftMenu = () => {
  return (
    <div className="w-1/4">
      <div className="flex flex-col">
        <span>
          <User />
        </span>
        <span className="font-bold">Pushpenbder</span>
        <span>pushpendersingh311@gmail.com</span>
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
};

export default LeftMenu;
