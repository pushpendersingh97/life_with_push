import React from 'react';

interface Step {
  label: string;
  completed: boolean;
}

interface ProgressStepperProps {
  steps: Step[];
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({ steps = [] }) => {
  return (
    <ol className="flex items-center w-full text-sm font-medium text-center p-3 space-x-2 text-gray-500 dark:text-gray-400 sm:text-base">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        const isCompleted = step.completed;

        const liClasses = [
          'flex items-center md:w-full',
          !isLast &&
            `after:content-[''] after:flex-1 after:h-[4px] ${
              isCompleted ? 'after:bg-green-600 dark:after:bg-green-500' : 'after:bg-gray-200 dark:after:bg-gray-700'
            } after:rounded-md after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 after:my-1`,
        ]
          .filter(Boolean)
          .join(' ');

        const spanClasses = [
          'flex items-center',
          !isLast && "after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500",
          isCompleted ? 'text-green-600 dark:text-green-500' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <li key={step.label} className={liClasses}>
            <span className={spanClasses}>
              {isCompleted ? (
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
              ) : (
                <span className="me-2">{index + 1}</span>
              )}
              {step.label.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? '' : 'hidden sm:inline-flex sm:ms-2'}>
                  {word}
                </span>
              ))}
            </span>
          </li>
        );
      })}
    </ol>
  );
};

export default ProgressStepper;
