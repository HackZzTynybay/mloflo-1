
import React from 'react';
import IconWrapper from './IconWrapper';

interface AutomobileAllowanceIconProps {
  selected?: boolean;
  className?: string;
}

const AutomobileAllowanceIcon: React.FC<AutomobileAllowanceIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 60H90M30 60C27.2386 60 25 62.2386 25 65V75M30 60L40 40H80L90 60M90 60C92.7614 60 95 62.2386 95 65V75M35 75C35 77.7614 32.7614 80 30 80C27.2386 80 25 77.7614 25 75M35 75C35 72.2386 32.7614 70 30 70C27.2386 70 25 72.2386 25 75M85 75C85 77.7614 87.2386 80 90 80C92.7614 80 95 77.7614 95 75M85 75C85 72.2386 87.2386 70 90 70C92.7614 70 95 72.2386 95 75" stroke="#344AD5" strokeWidth="2"/>
        <path d="M60 60V80M40 60V80M80 60V80" stroke="#344AD5" strokeWidth="2"/>
      </svg>
    </IconWrapper>
  );
};

export default AutomobileAllowanceIcon;
