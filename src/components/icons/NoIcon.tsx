
import React from 'react';
import { ThumbsDown } from 'lucide-react';

interface NoIconProps {
  selected?: boolean;
  className?: string;
}

const NoIcon: React.FC<NoIconProps> = ({ selected = false, className = "" }) => {
  return (
    <ThumbsDown 
      size={64} 
      strokeWidth={2} 
      className={`${selected ? 'text-mloflo-blue' : 'text-gray-500'} ${className}`}
    />
  );
};

export default NoIcon;
