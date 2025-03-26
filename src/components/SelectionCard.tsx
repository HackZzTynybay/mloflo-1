
import React from 'react';

interface SelectionCardProps {
  title: string;
  icon: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

const SelectionCard: React.FC<SelectionCardProps> = ({ 
  title, 
  icon, 
  selected = false, 
  onClick 
}) => {
  return (
    <div 
      className={`relative flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-300 cursor-pointer border hover:shadow-md hover:border-mloflo-blue ${selected ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200'}`}
      onClick={onClick}
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-center">
        {title}
      </h3>
    </div>
  );
};

export default SelectionCard;
