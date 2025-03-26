
import React from 'react';
import IconWrapper from './IconWrapper';

interface ThumbDownIconProps {
  selected?: boolean;
  className?: string;
}

const ThumbDownIcon: React.FC<ThumbDownIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 100C60 100 68 92 80 90C92 88 100 70 100 70C100 70 94.8333 64.5 89.5 61.5C84.1667 58.5 67 50 67 50L74 20H60H46L53 50C53 50 35.8333 58.5 30.5 61.5C25.1667 64.5 20 70 20 70C20 70 28 88 40 90C52 92 60 100 60 100Z" stroke="#344AD5" stroke-width="2"/>
      </svg>
    </IconWrapper>
  );
};

export default ThumbDownIcon;
