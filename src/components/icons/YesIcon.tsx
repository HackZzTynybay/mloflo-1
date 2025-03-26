
import React from 'react';
import IconWrapper from './IconWrapper';

interface YesIconProps {
  selected?: boolean;
  className?: string;
}

const YesIcon: React.FC<YesIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 87.5942L33 73.6851M38 70.5942L33 73.6851M33 73.6851C30.6667 77.3215 27.4 86.5942 33 94.5942C40 104.594 47 109.317 57 104.317C53.3333 104.317 43.2 102.794 40 95.5942C36.8 88.3942 40 77.9882 42 73.6851C43.6667 70.6548 47.4 63.7942 49 60.5942C50.5729 57.4484 57.1069 44.3803 60.3362 37.9217C60.4468 37.7005 60.5299 37.4733 60.6205 37.2432C61.1317 35.9449 62.7239 33.5503 66 32.0942C69.6 30.4942 70.1667 24.0942 70 21.0942C70 19.9275 70.5 17.0942 72.5 15.0942C74.5 13.0942 73.3333 7.92754 72.5 5.59421C72.1667 4.42754 72.5 2.19421 76.5 2.59421C79.7078 2.91499 82.2724 6.68693 83.6782 9.62965C84.2851 10.8999 84.4734 12.3165 84.386 13.7216C84.1196 18.0045 83.5108 24.561 82.5 27.5938C81.572 30.3779 84.7703 30.7498 87.6553 30.467C89.2165 30.314 90.7971 30.2163 92.3266 30.5645C96.4079 31.4935 102.009 33.2824 103 35.5938C104.152 38.2816 106.189 41.8541 104.128 43.5938M79.5 43.5938C84.5 44.0938 95.8 44.9938 101 44.5938C102.508 44.4777 103.505 44.1194 104.128 43.5938M104.128 43.5938C107.085 45.9271 111.8 51.8938 107 57.0938C106.24 57.9169 105.261 58.5588 104.128 59.0496M82.5 58.5938C87.6905 59.9966 98.0999 61.6592 104.128 59.0496M104.128 59.0496C106.418 60.898 110.2 65.7946 107 70.5942C106.432 71.4463 105.509 72.1009 104.336 72.5938M82.5 72.5938C88.1202 73.6904 98.9041 74.8773 104.336 72.5938M104.336 72.5938C105.891 75.2603 107.1 81.2934 99.5 84.0938C94.3521 85.9906 91.2077 86.9238 89.5073 87.3285C88.5461 87.5573 87.5936 87.96 86.8591 88.621L78.9464 95.7421C78.318 96.3076 77.6253 96.7965 76.8587 97.153C72.4194 99.2173 64.9574 101.594 62.5 101.594C58.5 101.594 47.8333 112.094 42 118.094" stroke="#344AD5" strokeWidth="2"/>
      </svg>
    </IconWrapper>
  );
};

export default YesIcon;
