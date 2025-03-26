
import React from 'react';

interface IconWrapperProps {
  children: React.ReactNode;
  selected?: boolean;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ 
  children, 
  selected = false,
  className = ""
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
};

export default IconWrapper;
