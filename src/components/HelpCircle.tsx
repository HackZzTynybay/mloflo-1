
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface HelpCircleProps {
  onClick?: () => void;
}

const HelpCircle: React.FC<HelpCircleProps> = ({ onClick }) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className="cursor-pointer flex items-center justify-center"
      onClick={onClick}
    >
      <svg 
        width={isMobile ? "50" : "75"} 
        height={isMobile ? "48" : "72"} 
        viewBox="0 0 75 72" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300"
      >
        <rect width="75" height="72" rx="36" fill="#344AD5"/>
        <text
          x="37.5"
          y="46"
          textAnchor="middle"
          fill="white"
          fontSize="36"
          fontWeight="bold"
          fontFamily="Inter, sans-serif"
        >
          ?
        </text>
      </svg>
    </div>
  );
};

export default HelpCircle;
