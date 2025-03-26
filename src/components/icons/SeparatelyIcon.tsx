
import React from 'react';
import IconWrapper from './IconWrapper';

interface SeparatelyIconProps {
  selected?: boolean;
  className?: string;
}

const SeparatelyIcon: React.FC<SeparatelyIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M75 75.5V100M75 100H89V82.7134C89 77.9278 88.6697 72.9358 85.9475 69V69C81.5368 62.6231 74.6219 60.0174 71 59.5C70 59.5 64.6 59.5 51 59.5C37.4 59.5 32.6667 70.1667 32 75.5V100H45M75 100H45M45 75.5V100" stroke="#344AD5" strokeWidth="2"/>
        <circle cx="60" cy="39.5" r="19.5" stroke="#344AD5" strokeWidth="2"/>
      </svg>
    </IconWrapper>
  );
};

export default SeparatelyIcon;
