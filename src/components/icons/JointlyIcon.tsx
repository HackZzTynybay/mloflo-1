
import React from 'react';
import IconWrapper from './IconWrapper';

interface JointlyIconProps {
  selected?: boolean;
  className?: string;
}

const JointlyIcon: React.FC<JointlyIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M62.5 100V82.7134C62.5 77.9278 62.1697 72.9358 59.4475 69V69M62.5 100H70.5M62.5 100H48.5M59.4475 69C55.0368 62.6231 48.1219 60.0174 44.5 59.5C43.5 59.5 38.1 59.5 24.5 59.5C10.9 59.5 6.16667 70.1667 5.5 75.5V100H18.5M59.4475 69C64.2055 61.8 72.465 59.6667 76 59.5H97C102.722 60.2893 106.814 63.0578 109.612 66.221C114.278 71.4967 114.5 79.0511 114.5 86.094V100H101M70.5 75.5V100M70.5 100H101M101 75.5V100M48.5 75.5V100M48.5 100H18.5M18.5 75.5V100" stroke="#344AD5" strokeWidth="2"/>
        <circle cx="33.5" cy="39.5" r="19.5" stroke="#344AD5" strokeWidth="2"/>
        <circle cx="86.5" cy="39.5" r="19.5" stroke="#344AD5" strokeWidth="2"/>
      </svg>
    </IconWrapper>
  );
};

export default JointlyIcon;
