
import React from 'react';
import IconWrapper from './IconWrapper';

interface MarriedIconProps {
  selected?: boolean;
  className?: string;
}

const MarriedIcon: React.FC<MarriedIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M58 43.5387C57.3501 43.0958 56.683 42.6761 56 42.281C51.2932 39.5583 45.8286 38 40 38C22.3269 38 8 52.3269 8 70C8 87.6731 22.3269 102 40 102C46.2463 102 53.5745 99.0945 58.5 96M64.5724 49.5C69.2095 55.0523 72 62.2003 72 70C72 77.3392 69.155 84.6013 65 90" stroke="#344AD5" strokeWidth="2"/>
        <circle cx="80" cy="70" r="31" stroke="#344AD5" strokeWidth="2"/>
        <path d="M49 24.7989C49 30.4485 53.623 33.4587 57.0063 36.154C58.2 37.1043 59.35 38 60.5 38C61.65 38 62.8 37.1054 63.9937 36.1528C67.3781 33.4598 72 30.4485 72 24.8001C72 19.1516 65.675 15.1423 60.5 20.5747C55.325 15.1423 49 19.1492 49 24.7989Z" fill="#344AD5"/>
      </svg>
    </IconWrapper>
  );
};

export default MarriedIcon;
