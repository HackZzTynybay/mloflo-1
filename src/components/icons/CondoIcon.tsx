
import React from 'react';
import IconWrapper from './IconWrapper';

interface CondoIconProps {
  selected?: boolean;
  className?: string;
}

const CondoIcon: React.FC<CondoIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0898 105V36.6145C10.0898 34.4053 11.8807 32.6145 14.0898 32.6145H34.4659M101.833 82.6962H100.071C97.8618 82.6962 96.0709 80.9053 96.0709 78.6962V36.6145C96.0709 34.4053 94.28 32.6145 92.0709 32.6145H77.9108C75.7017 32.6145 73.9108 34.4053 73.9108 36.6145V105V18C73.9108 15.7909 72.12 14 69.9108 14H38.4659C36.2568 14 34.4659 15.7909 34.4659 18V105M101.833 82.6962C103.836 84.399 106.79 88.1121 107.379 92.6474C107.97 97.1886 103.5 101.307 99.4187 99.2306C97.7824 98.398 96.4703 97.0113 96.0709 95.1058C94.5435 87.8184 99.912 83.7303 101.833 82.6962ZM101.833 95.1058V101C101.833 103.209 103.623 105 105.833 105H114.5H34.4659M62.9998 105V96.1058C62.9998 95.5536 62.552 95.1058 61.9998 95.1058H45.6595C45.1073 95.1058 44.6595 95.5536 44.6595 96.1058V105M119.758 110.5H34.4659H27.4653C25.9465 110.5 24.7153 109.269 24.7153 107.75V107.75C24.7153 106.231 25.9465 105 27.4653 105H34.4659M62.9998 35V42.5C62.9998 43.0523 62.552 43.5 61.9998 43.5H45.6595C45.1073 43.5 44.6595 43.0523 44.6595 42.5V35M62.9998 35V27.5C62.9998 26.9477 62.552 26.5 61.9998 26.5H45.6595C45.1073 26.5 44.6595 26.9477 44.6595 27.5V35M62.9998 35H44.6595" 
          stroke={selected ? "#FFFFFF" : "#344AD5"} 
          strokeWidth="2"
          className={selected ? "stroke-white" : "stroke-mloflo-blue"}
        />
        <rect x="49" y="56" width="10" height="12" fill={selected ? "#FFFFFF" : "#344AD5"} className={selected ? "fill-white" : "fill-mloflo-blue"} />
        <rect x="80" y="70" width="10" height="12" fill={selected ? "#FFFFFF" : "#344AD5"} className={selected ? "fill-white" : "fill-mloflo-blue"} />
        <rect x="17" y="70" width="10" height="12" fill={selected ? "#FFFFFF" : "#344AD5"} className={selected ? "fill-white" : "fill-mloflo-blue"} />
      </svg>
    </IconWrapper>
  );
};

export default CondoIcon;
