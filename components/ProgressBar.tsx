
import React from 'react';
import { Step } from '../types';
import { COLORS } from '../constants';

interface ProgressBarProps {
  currentStep: Step;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const steps = [1, 2, 3, 4];
  const progress = ((currentStep - 1) / (steps.length)) * 100;

  return (
    <div className="w-full h-1 bg-gray-100">
      <div 
        className="h-full transition-all duration-500 ease-out"
        style={{ width: `${progress}%`, backgroundColor: COLORS.primary }}
      ></div>
    </div>
  );
};
