
import React from 'react';
import IconWrapper from './IconWrapper';

interface HousingParsonageIconProps {
  selected?: boolean;
  className?: string;
}

const HousingParsonageIcon: React.FC<HousingParsonageIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 20L20 50V100H45V70H75V100H100V50L60 20Z" stroke="#344AD5" strokeWidth="2"/>
        <path d="M60 40L40 55V85H50V65H70V85H80V55L60 40Z" stroke="#344AD5" strokeWidth="2"/>
      </svg>
    </IconWrapper>
  );
};

export default HousingParsonageIcon;
