
import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  
  useEffect(() => {
    // Calculate the target progress percentage
    const targetProgress = (currentStep / totalSteps) * 100;
    
    // Start with current progress and animate to the target
    setAnimatedProgress(targetProgress);
  }, [currentStep, totalSteps]);
  
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
          style={{ width: `${animatedProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
