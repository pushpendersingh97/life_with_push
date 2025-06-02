import React from 'react';
import CustomStepper from '@/components/Stepper';

const steps = [
  { key: 'pan', label: 'Pan Card/Form 60 Details', isActive: true },
  { key: 'additionalDetails', label: 'Additional Details', isActive: false },
];

const Stepper = () => {
  return <CustomStepper steps={steps} />;
};

export default Stepper;
