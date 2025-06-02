import React from 'react';

interface Step {
  key: string;
  label: string;
  subLabel?: string;
  isActive: boolean;
}

interface StepperProps {
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  return (
    <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <li key={step.key} className={`flex items-center ${step.isActive ? 'text-blue-600 dark:text-blue-500' : ''}`}>
            <span
              className={`flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 
              ${step.isActive ? 'border-blue-600 dark:border-blue-500' : 'border-gray-500 dark:border-gray-400'}`}
            >
              {index + 1}
            </span>
            {step.label}
            {step.subLabel && <span className="hidden sm:inline-flex sm:ms-2">{step.subLabel}</span>}

            {!isLast && (
              <svg
                className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default Stepper;
