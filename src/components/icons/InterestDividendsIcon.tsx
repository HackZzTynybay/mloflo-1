
import React from 'react';
import IconWrapper from './IconWrapper';

interface InterestDividendsIconProps {
  selected?: boolean;
  className?: string;
}

const InterestDividendsIcon: React.FC<InterestDividendsIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 40H90V90H30V40Z" stroke="#344AD5" strokeWidth="2"/>
        <path d="M40 60H80M40 70H80M40 80H60" stroke="#344AD5" strokeWidth="2"/>
        <path d="M40 50L55 30H65L80 50" stroke="#344AD5" strokeWidth="2"/>
      </svg>
    </IconWrapper>
  );
};

export default InterestDividendsIcon;
