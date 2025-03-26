
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
      className={`relative flex flex-col items-center justify-center p-4 h-36 rounded-lg transition-all duration-300 cursor-pointer hover:shadow-md ${selected ? 'border-2 border-mloflo-blue bg-blue-50' : 'border border-gray-200 hover:border-gray-300'}`}
      onClick={onClick}
    >
      <div className={`mb-3 flex items-center justify-center h-16 p-1 ${selected ? 'text-mloflo-blue' : 'text-gray-500'}`}>
        <div className={`rounded-full ${selected ? 'border-mloflo-blue' : 'border-gray-300'} border p-1`}>
          {icon}
        </div>
      </div>
      <h3 className="text-sm font-medium text-center">
        {title}
      </h3>
    </div>
  );
};

export default SelectionCard;
