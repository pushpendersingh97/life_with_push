import React from 'react';
import CustomStepper from '@/components/Stepper';
import ProgressStepper from '@/components/ProgressStepper';

const steps = [
  { key: 'pan', label: 'Pan Card/Form 60 Details', isActive: true },
  { key: 'additionalDetails', label: 'Additional Details', isActive: false },
];

const progressSteps = [
  { label: 'Pan Card/Form 60 Details', completed: true },
  { label: 'Additional Details', completed: false },
];

const Stepper = () => {
  return (
    <>
      <CustomStepper steps={steps} />
      <div className="mt-4">
        <ProgressStepper steps={progressSteps} />
      </div>
    </>
  );
};

export default Stepper;
