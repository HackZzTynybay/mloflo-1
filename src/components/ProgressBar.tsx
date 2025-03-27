
import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full max-w-xl mx-auto my-4">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-gray-500">
          STEP {currentStep} OF {totalSteps}
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-mloflo-blue transition-all duration-700 ease-in-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
