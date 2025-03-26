
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
      className={`relative flex flex-col items-center justify-center p-4 h-28 rounded-lg transition-all duration-300 cursor-pointer ${selected ? 'border-2 border-mloflo-blue bg-blue-50' : 'border border-gray-200'}`}
      onClick={onClick}
    >
      <div className="mb-2 flex items-center justify-center h-12">
        {icon}
      </div>
      <h3 className="text-sm font-medium text-center">
        {title}
      </h3>
    </div>
  );
};

export default SelectionCard;
