import './expenseTracker.css';

const ExpanseTrackerLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col min-h-screen bg-black text-white">{children}</div>;
};
export default ExpanseTrackerLayout;
