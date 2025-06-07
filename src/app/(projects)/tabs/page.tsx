'use client';

import React, { useState } from 'react';

const Tabs = [
  {
    id: 'profile',
    label: 'Profile',
    component: React.lazy(() => import('./components/Profile')),
  },
  {
    id: 'skills',
    label: 'Skills',
    component: React.lazy(() => import('./components/Skills')),
  },
  {
    id: 'settings',
    label: 'Settings',
    component: React.lazy(() => import('./components/Settings')),
  },
];

const TabForm = () => {
  const [tabs] = useState(Tabs);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const ActiveComponent = tabs[activeTab].component;

  return (
    <>
      <div className="flex m-2">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className="px-4 py-2 mr-3 rounded-full cursor-pointer transition-colors duration-300 border-2 flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-2"
            onClick={() => handleTabClick(index)}
          >
            <h2 className="text-lg font-bold">{tab.label}</h2>
          </div>
        ))}
      </div>
      <div className="flex pt-1">
        <React.Suspense fallback={<div>Loading...</div>}>
          <div className="w-full h-full p-4 bg-gray-100 rounded-lg shadow-md mx-4">
            <ActiveComponent />
          </div>
        </React.Suspense>
      </div>
    </>
  );
};

export default TabForm;
