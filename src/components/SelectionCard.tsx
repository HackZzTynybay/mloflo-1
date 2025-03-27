
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
      className={`relative flex flex-col items-center justify-between p-4 sm:p-6 h-auto sm:h-64 rounded-lg transition-all duration-300 cursor-pointer border-2 ${selected ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
      onClick={onClick}
    >
      <div className={`flex items-center justify-center h-28 sm:h-40 w-full ${selected ? 'text-mloflo-blue' : 'text-mloflo-blue'}`}>
        {icon}
      </div>
      <h3 className="text-lg font-medium text-center text-gray-800 mt-2 sm:mt-4 w-full px-2 break-words line-clamp-2 overflow-hidden">
        {title}
      </h3>
    </div>
  );
};

export default SelectionCard;
