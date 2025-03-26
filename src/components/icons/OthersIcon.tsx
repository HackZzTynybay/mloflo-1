
import React from 'react';
import IconWrapper from './IconWrapper';

interface OthersIconProps {
  selected?: boolean;
  className?: string;
}

const OthersIcon: React.FC<OthersIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M68 35.6509C60.0326 31.6673 52.4326 35.6735 48.1726 39.438C46.8541 40.6031 46.9526 42.6036 48.1968 43.8477C49.4847 45.1356 51.5455 45.1571 52.995 44.0541C60.3632 38.4475 64.5941 40.6461 66.1597 43.0427C66.4123 43.4293 66.6847 43.8055 66.9319 44.1956C68.0048 45.8878 68.3279 49.5328 63 54.1504C58.5926 57.9702 57.3328 62.0238 57.2388 64.7653C57.1897 66.1978 58.4781 67.1504 59.9114 67.1504C61.6442 67.1504 63.032 65.7731 63.5366 64.1153C65.1552 58.7969 69.8764 55.5702 72 52.6504C74.6667 48.9839 77.6 40.4509 68 35.6509Z" stroke="#344AD5" stroke-width="2"/>
        <path d="M102 59.5C102 82.4198 83.4198 101 60.5 101C37.5802 101 19 82.4198 19 59.5C19 36.5802 37.5802 18 60.5 18C83.4198 18 102 36.5802 102 59.5ZM22.0354 59.5C22.0354 80.7434 39.2566 97.9646 60.5 97.9646C81.7434 97.9646 98.9646 80.7434 98.9646 59.5C98.9646 38.2566 81.7434 21.0354 60.5 21.0354C39.2566 21.0354 22.0354 38.2566 22.0354 59.5Z" fill="#344AD5"/>
        <circle cx="60" cy="79" r="6" stroke="#344AD5" stroke-width="2"/>
      </svg>
    </IconWrapper>
  );
};

export default OthersIcon;
