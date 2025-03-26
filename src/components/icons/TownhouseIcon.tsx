
import React from 'react';
import IconWrapper from './IconWrapper';

interface TownhouseIconProps {
  selected?: boolean;
  className?: string;
}

const TownhouseIcon: React.FC<TownhouseIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 94.5V31.829C13 30.6675 13.5049 29.5634 14.3834 28.8036L29.0137 16.1503C30.4586 14.9007 32.5854 14.8472 34.0914 16.0225L52 30M52 30V101.5M52 30H60.5M60.5 30V101.5M60.5 30L76.9567 16.1418C78.4308 14.9004 80.5806 14.8866 82.0705 16.1091L97.5373 28.7998C98.4632 29.5596 99 30.6943 99 31.8921V97.5C99 99.7091 97.2091 101.5 95 101.5H22C20.3431 101.5 19 102.843 19 104.5V104.5C19 106.157 20.3431 107.5 22 107.5H107.5M22.5 94.5V83.5C22.5 82.9477 22.9477 82.5 23.5 82.5H43C43.5523 82.5 44 82.9477 44 83.5V94.5M69 94.5V83.5C69 82.9477 69.4477 82.5 70 82.5H89.5C90.0523 82.5 90.5 82.9477 90.5 83.5V94.5M39.5 41.25V33C39.5 32.4477 39.0523 32 38.5 32H25.5C24.9477 32 24.5 32.4477 24.5 33V41.25M39.5 41.25V49.5C39.5 50.0523 39.0523 50.5 38.5 50.5H25.5C24.9477 50.5 24.5 50.0523 24.5 49.5V41.25M39.5 41.25H24.5M86.5 41.25V33C86.5 32.4477 86.0523 32 85.5 32H73.5C72.9477 32 72.5 32.4477 72.5 33V41.25M86.5 41.25V49.5C86.5 50.0523 86.0523 50.5 85.5 50.5H73.5C72.9477 50.5 72.5 50.0523 72.5 49.5V41.25M86.5 41.25H72.5" 
          stroke={selected ? "#FFFFFF" : "#344AD5"} 
          strokeWidth="2"
          className={selected ? "stroke-white" : "stroke-mloflo-blue"}
        />
        <rect x="29.5" y="60" width="9" height="9" fill={selected ? "#FFFFFF" : "#344AD5"} className={selected ? "fill-white" : "fill-mloflo-blue"} />
        <rect x="75.5" y="60" width="9" height="9" fill={selected ? "#FFFFFF" : "#344AD5"} className={selected ? "fill-white" : "fill-mloflo-blue"} />
      </svg>
    </IconWrapper>
  );
};

export default TownhouseIcon;
