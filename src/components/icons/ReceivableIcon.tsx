
import React from 'react';
import IconWrapper from './IconWrapper';

interface ReceivableIconProps {
  selected?: boolean;
  className?: string;
}

const ReceivableIcon: React.FC<ReceivableIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M84.3109 89.2289V103C84.3109 105.209 82.52 107 80.3109 107H19C16.7909 107 15 105.209 15 103V17C15 14.7909 16.7909 13 19 13H66.8653M84.3109 89.2289C85.5682 89.2289 89.2145 89.2289 93.7409 89.2289C98.2674 89.2289 100.028 85.7993 100.342 84.0846M84.3109 89.2289H74.3307C74.0694 89.2289 73.8086 89.2074 73.5567 89.1381C71.9091 88.6848 69.2228 87.1973 69.2228 84.0846M66.8653 13L82.3725 27.9652M66.8653 13V23.9652C66.8653 26.1743 68.6561 27.9652 70.8653 27.9652H82.3725M84.3109 40.592V31.5345C84.3109 30.449 83.8697 29.41 83.0886 28.6562L82.3725 27.9652M84.3109 40.592C75.8105 40.592 76.876 50.1699 78.5487 55.249C78.617 55.4565 78.7059 55.6523 78.8056 55.8467C81.3066 60.7237 81.636 68.2483 81.4819 71.4577M84.3109 40.592C86.5112 40.592 89.9689 42.0412 89.9689 48.0746C89.9689 51.1309 88.9679 55.4349 88.6406 56.6591C88.5862 56.8623 88.5369 57.0629 88.5029 57.2706C87.8697 61.1341 86.8772 68.9091 87.6114 71.4577M71.1088 37.7861H22.0725M50.8342 46.6716H22.0725M58.8497 56.9602H22.0725M38.1036 65.8458H22.0725M100.342 84.0846H102C104.209 84.0846 106 82.2937 106 80.0846V75.4577C106 73.2486 104.209 71.4577 102 71.4577H87.6114M100.342 84.0846H69.2228M69.2228 84.0846H67.5648C65.3556 84.0846 63.5648 82.2937 63.5648 80.0846V75.4577C63.5648 73.2486 65.3556 71.4577 67.5648 71.4577H81.4819M81.4819 71.4577H87.6114" stroke="#344AD5" strokeWidth="2"/>
        <circle cx="35" cy="87" r="13" stroke="#344AD5" strokeWidth="2"/>
      </svg>
    </IconWrapper>
  );
};

export default ReceivableIcon;
