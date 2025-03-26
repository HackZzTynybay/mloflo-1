
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
      className={`relative flex flex-col items-center justify-center p-6 h-48 rounded-lg transition-all duration-300 cursor-pointer hover:shadow-md ${selected ? 'border-2 border-mloflo-blue bg-blue-50' : 'border border-gray-200 hover:border-gray-300'}`}
      onClick={onClick}
    >
      <div className={`mb-6 flex items-center justify-center h-24 ${selected ? 'text-mloflo-blue' : 'text-gray-500'}`}>
        {icon}
      </div>
      <h3 className="text-lg font-medium text-center">
        {title}
      </h3>
    </div>
  );
};

export default SelectionCard;
