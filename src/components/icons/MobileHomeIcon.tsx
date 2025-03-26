
import React from 'react';
import IconWrapper from './IconWrapper';

interface MobileHomeIconProps {
  selected?: boolean;
  className?: string;
}

const MobileHomeIcon: React.FC<MobileHomeIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="131" height="120" viewBox="0 0 131 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 31.5H5.23984C2.32365 31.5 0.387625 28.4799 1.60514 25.83L6.42946 15.33C7.08188 13.91 8.50148 13 10.0642 13H112.998C114.528 13 115.925 13.8736 116.595 15.2501L121.703 25.7501C122.995 28.407 121.06 31.5 118.106 31.5H115.5M7.5 31.5V91M7.5 31.5H115.5M7.5 91H6C3.79086 91 2 92.7909 2 95V97C2 99.2091 3.79086 101 6 101H22M7.5 91H10.1108C11.5824 91 12.9351 90.192 13.6327 88.8964L14.8673 86.6036C15.5649 85.308 16.9176 84.5 18.3892 84.5H29.9407C31.5009 84.5 32.9187 85.4072 33.5725 86.8238L34.4275 88.6762C35.0813 90.0928 36.4991 91 38.0593 91H44M115.25 91H118C120.209 91 122 92.7909 122 95V97C122 99.2091 120.209 101 118 101H35.75C33.9551 101 32.5 102.455 32.5 104.25V104.25C32.5 106.045 33.9551 107.5 35.75 107.5H131M115.25 91H110.596C109.283 91 108.054 90.356 107.307 89.2768L105.193 86.2232C104.446 85.144 103.217 84.5 101.904 84.5H83.4543C81.6983 84.5 80.1476 85.6453 79.6312 87.3237L79.3688 88.1763C78.8524 89.8547 77.3017 91 75.5457 91H68M115.25 91L115.5 31.5M44 91H68M44 91V58.5M68 91V58.5M68 58.5V47.5C68 45.2909 66.2091 43.5 64 43.5H48C45.7909 43.5 44 45.2909 44 47.5V58.5M68 58.5H44M95 49H82.5C80.2909 49 78.5 50.7909 78.5 53V66.5C78.5 68.7091 80.2909 70.5 82.5 70.5H95M95 49H102.5C104.709 49 106.5 50.7909 106.5 53V66.5C106.5 68.7091 104.709 70.5 102.5 70.5H95M95 49V70.5M20.25 70.5H28.5C30.7091 70.5 32.5 68.7091 32.5 66.5V53C32.5 50.7909 30.7091 49 28.5 49H20.25C18.0409 49 16.25 50.7909 16.25 53V66.5C16.25 68.7091 18.0409 70.5 20.25 70.5Z" 
          stroke={selected ? "#FFFFFF" : "#344AD5"} 
          strokeWidth="2"
          className={selected ? "stroke-white" : "stroke-mloflo-blue"}
        />
        <rect x="51" y="69" width="11" height="12" fill={selected ? "#FFFFFF" : "#344AD5"} className={selected ? "fill-white" : "fill-mloflo-blue"} />
        <circle cx="27" cy="102" r="7" fill="#F5F8FF" stroke={selected ? "#FFFFFF" : "#344AD5"} strokeWidth="2" className={selected ? "stroke-white" : "stroke-mloflo-blue"} />
        <circle cx="105" cy="101" r="7" fill="#F5F8FF" stroke={selected ? "#FFFFFF" : "#344AD5"} strokeWidth="2" className={selected ? "stroke-white" : "stroke-mloflo-blue"} />
      </svg>
    </IconWrapper>
  );
};

export default MobileHomeIcon;
