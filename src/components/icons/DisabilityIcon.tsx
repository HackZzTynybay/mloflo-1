
import React from 'react';
import IconWrapper from './IconWrapper';

interface DisabilityIconProps {
  selected?: boolean;
  className?: string;
}

const DisabilityIcon: React.FC<DisabilityIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.5 38.8604V52.9998V57C40.5 67 44.5 68 47.4999 68H62C67.6 68 67.8572 70 68.5 71.5C69.5 73.8334 72 79.7002 74 84.5C75.4013 87.8629 77.7025 87.8226 79.5279 86.9238C80.8734 86.2614 81.2115 84.6025 80.7525 83.1748L77.1037 71.8227C77.0347 71.608 76.9842 71.3836 76.949 71.1608C75.6654 63.0433 70.8016 61.0001 68.5 61.0002H57C54.7909 61.0002 53 59.2093 53 57.0002V53.0002C53 50.7911 54.7909 49.0002 57 49.0002H67.7573C68.2483 49.0002 68.7442 48.9181 69.1866 48.7053C72.7644 46.9844 71.2722 44.3966 69.478 42.7758C68.8742 42.2304 68.0641 42 67.2504 42H57C54.7909 42 53 40.2091 53 38C53 36.5 52.3 33.8998 47.4999 33.4998C42.9912 33.1241 41.0707 36.2481 40.5779 38.1481C40.5177 38.3803 40.5 38.6205 40.5 38.8604Z" stroke="#344AD5" stroke-width="2"/>
        <circle cx="47" cy="21" r="8" stroke="#344AD5" stroke-width="2"/>
        <path d="M59.9249 69.6225C60.9614 82.5598 51.314 93.8877 38.3767 94.9243C25.4395 95.9608 14.1115 86.3133 13.075 73.3761C12.0385 60.4389 21.6859 49.1109 34.6232 48.0744C35.6363 47.9932 36.6395 47.9776 37.6287 48.0239" stroke="#344AD5" stroke-width="2"/>
      </svg>
    </IconWrapper>
  );
};

export default DisabilityIcon;
