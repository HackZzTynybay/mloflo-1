
import React from 'react';
import IconWrapper from './IconWrapper';

interface RefinanceIconProps {
  selected?: boolean;
  className?: string;
}

const RefinanceIcon: React.FC<RefinanceIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M97.3948 50.1081L102.194 53.7354C103.972 55.0789 106.504 54.711 107.826 52.9171L110.503 49.2836C111.83 47.483 111.423 44.9442 109.599 43.6493L93.6477 32.324M97.3948 50.1081L61.8146 23.2161C60.3809 22.1325 58.4006 22.138 56.973 23.2297L19.7766 51.674M97.3948 50.1081V95.536C97.3948 97.7451 95.6039 99.536 93.3948 99.536H75.4476M19.7766 51.674L17.5011 53.4141C15.5851 54.8793 12.818 54.3282 11.6095 52.2408L9.79137 49.1004C8.77119 47.3382 9.2375 45.0909 10.8746 43.8802L57.058 9.72367C58.4484 8.69537 60.3422 8.67701 61.7522 9.67815L82.4065 24.3427M19.7766 51.674V99.536M8 104.889C16.1944 105.067 35.664 98.2738 48.0858 69.7013C48.1145 69.6353 48.0671 69.5593 47.9951 69.5593H38.2028C38.1159 69.5593 38.0704 69.4563 38.1288 69.392L58.6088 46.864C59.0196 46.4121 59.736 46.4307 60.1227 46.9034L78.5257 69.396C78.5792 69.4613 78.5327 69.5593 78.4483 69.5593H70.1741C70.1275 69.5593 70.0878 69.5888 70.0772 69.6342C66.6459 84.2914 49.4684 113.773 8 112.918M82.4065 24.3427V12.2118C82.4065 11.6595 82.8542 11.2118 83.4065 11.2118H92.6477C93.2 11.2118 93.6477 11.6595 93.6477 12.2118V32.324M82.4065 24.3427L93.6477 32.324" 
        stroke="#344AD5" 
        strokeWidth="2"/>
        <circle cx="59.9242" cy="96.8597" r="16.0589" fill="#344AD5"/>
        <path d="M61.0428 86.6992V89.8253H59.4327V86.6992H61.0428ZM60.8441 103.772V106.574H59.2445V103.772H60.8441ZM62.4229 100.395C62.4229 99.9911 62.3392 99.6391 62.1719 99.3394C62.0116 99.0327 61.7468 98.7574 61.3773 98.5134C61.0079 98.2625 60.5131 98.029 59.8927 97.8129C59.0006 97.4993 58.2199 97.1473 57.5508 96.757C56.8886 96.3597 56.3729 95.8718 56.0035 95.2933C55.641 94.7078 55.4598 93.9794 55.4598 93.1082C55.4598 92.2508 55.655 91.5085 56.0453 90.8812C56.4426 90.2539 56.9932 89.7695 57.6972 89.428C58.4011 89.0865 59.2236 88.9157 60.1646 88.9157C60.8894 88.9157 61.5411 89.0237 62.1197 89.2398C62.7051 89.4559 63.2035 89.773 63.6147 90.1912C64.026 90.6094 64.3396 91.1252 64.5557 91.7385C64.7787 92.3449 64.8902 93.0419 64.8902 93.8296H62.381C62.381 93.3835 62.3288 92.9862 62.2242 92.6377C62.1266 92.2822 61.9803 91.9825 61.7851 91.7385C61.5899 91.4876 61.353 91.296 61.0742 91.1635C60.8023 91.0311 60.4922 90.9649 60.1437 90.9649C59.6488 90.9649 59.241 91.059 58.9204 91.2472C58.5998 91.4284 58.3628 91.6793 58.2095 91.9999C58.0631 92.3205 57.9899 92.6865 57.9899 93.0977C57.9899 93.495 58.0666 93.8435 58.2199 94.1432C58.3733 94.4429 58.6346 94.7148 59.0041 94.9587C59.3804 95.1957 59.8962 95.4362 60.5514 95.6801C61.4505 96.0007 62.2277 96.3597 62.8829 96.757C63.545 97.1473 64.0538 97.6317 64.4093 98.2102C64.7718 98.7818 64.953 99.5032 64.953 100.374C64.953 101.274 64.7439 102.037 64.3257 102.664C63.9144 103.291 63.3359 103.769 62.5901 104.096C61.8513 104.417 60.9905 104.577 60.0077 104.577C59.3874 104.577 58.7706 104.497 58.1572 104.337C57.5508 104.17 57.0002 103.898 56.5053 103.521C56.0104 103.145 55.6166 102.647 55.3239 102.026C55.0311 101.399 54.8848 100.632 54.8848 99.7262H57.4149C57.4149 100.27 57.4881 100.723 57.6344 101.085C57.7808 101.448 57.9795 101.734 58.2304 101.943C58.4813 102.152 58.7601 102.302 59.0668 102.392C59.3804 102.483 59.6941 102.528 60.0077 102.528C60.5305 102.528 60.9696 102.441 61.3251 102.267C61.6875 102.086 61.9593 101.835 62.1406 101.514C62.3288 101.186 62.4229 100.814 62.4229 100.395Z" 
        fill="white"/>
      </svg>
    </IconWrapper>
  );
};

export default RefinanceIcon;
