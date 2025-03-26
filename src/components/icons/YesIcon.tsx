
import React from 'react';
import { ThumbsUp } from 'lucide-react';

interface YesIconProps {
  selected?: boolean;
  className?: string;
}

const YesIcon: React.FC<YesIconProps> = ({ selected = false, className = "" }) => {
  return (
    <ThumbsUp 
      size={64} 
      strokeWidth={2}
      className={`${selected ? 'text-mloflo-blue' : 'text-mloflo-blue'} ${className}`}
    />
  );
};

export default YesIcon;
