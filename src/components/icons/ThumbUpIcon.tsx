
import React from 'react';
import IconWrapper from './IconWrapper';

interface ThumbUpIconProps {
  selected?: boolean;
  className?: string;
}

const ThumbUpIcon: React.FC<ThumbUpIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 20C60 20 52 28 40 30C28 32 20 50 20 50C20 50 25.1667 55.5 30.5 58.5C35.8333 61.5 53 70 53 70L46 100H60H74L67 70C67 70 84.1667 61.5 89.5 58.5C94.8333 55.5 100 50 100 50C100 50 92 32 80 30C68 28 60 20 60 20Z" stroke="#344AD5" stroke-width="2"/>
      </svg>
    </IconWrapper>
  );
};

export default ThumbUpIcon;
