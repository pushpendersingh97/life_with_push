import React from 'react';
import LeftMenu from './_components/LeftMenu';
import ContentSection from './_components/ContentSection';

const ExpenseTracker = () => {
  return (
    <div className="flex m-4 w-full">
      {/** Left Menu */}
      <LeftMenu />

      {/** Content Section */}
      <ContentSection />
    </div>
  );
};

export default ExpenseTracker;
