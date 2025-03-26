
import React from 'react';
import IconWrapper from './IconWrapper';

interface MortgageCreditIconProps {
  selected?: boolean;
  className?: string;
}

const MortgageCreditIcon: React.FC<MortgageCreditIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.5 17.1094H25C22.7909 17.1094 21 18.9003 21 21.1094V112.609C21 114.819 22.7909 116.609 25 116.609H95.5C97.7091 116.609 99.5 114.819 99.5 112.609V21.1094C99.5 18.9003 97.7091 17.1094 95.5 17.1094H78M63.5 96.1094L66 94.1266M91 96.1094L87.5 93.0132M87.5 93.0132L79.0646 86.9102C77.5617 85.8228 75.5084 85.9114 74.1048 87.1241L66 94.1266M87.5 93.0132V104.609C87.5 106.819 85.7091 108.609 83.5 108.609H81M66 94.1266V104.609C66 106.819 67.7909 108.609 70 108.609H73M73 108.609V102.609C73 100.4 74.7909 98.6094 77 98.6094V98.6094C79.2091 98.6094 81 100.4 81 102.609V108.609M73 108.609H81M56.5 105.109H33M56.5 96.1094H33M56.5 88.1094H33M91 76.6094H33M84.5 66.1094H39M91 55.6094H33M59.2148 4.11801C56.8357 4.26286 55.3212 6.21207 54.4422 8.2474C53.6474 10.0879 52.0027 11.6094 49.9979 11.6094H45.5C43.2909 11.6094 41.5 13.4003 41.5 15.6094V23.6094C41.5 25.8185 43.2909 27.6094 45.5 27.6094H74C76.2091 27.6094 78 25.8185 78 23.6094V15.6094C78 13.4003 76.2091 11.6094 74 11.6094H70.2422C67.9407 11.6094 66.3132 9.56834 65.4471 7.43603C64.2663 4.52894 61.5393 3.92165 59.7814 4.07701C59.5929 4.09367 59.4037 4.1065 59.2148 4.11801Z" stroke="#344AD5" stroke-width="2"/>
        <path d="M44.3465 37.1427H47.1045L49.6805 44.1847H49.7225L52.2705 37.1427H55.0425V47.0547H53.2925V39.0887H53.2645L50.2545 47.0547H49.0225L46.0545 39.0887H46.0265V47.0547H44.3465V37.1427ZM64.5194 39.4667C64.2581 39.112 63.9174 38.8554 63.4974 38.6967C63.0774 38.5287 62.6668 38.4447 62.2654 38.4447C61.7521 38.4447 61.2854 38.538 60.8654 38.7247C60.4454 38.9114 60.0814 39.168 59.7734 39.4947C59.4748 39.8214 59.2414 40.204 59.0734 40.6427C58.9148 41.0814 58.8354 41.5574 58.8354 42.0707C58.8354 42.612 58.9148 43.1067 59.0734 43.5547C59.2321 44.0027 59.4561 44.39 59.7454 44.7167C60.0441 45.034 60.3988 45.2814 60.8094 45.4587C61.2201 45.636 61.6821 45.7247 62.1954 45.7247C62.7274 45.7247 63.1988 45.622 63.6094 45.4167C64.0201 45.202 64.3514 44.922 64.6034 44.5767L66.0174 45.5707C65.5788 46.1214 65.0421 46.5507 64.4074 46.8587C63.7728 47.1574 63.0308 47.3067 62.1814 47.3067C61.4068 47.3067 60.6928 47.1807 60.0394 46.9287C59.3954 46.6674 58.8401 46.308 58.3734 45.8507C57.9068 45.384 57.5428 44.8334 57.2814 44.1987C57.0201 43.5547 56.8894 42.8454 56.8894 42.0707C56.8894 41.2774 57.0248 40.5634 57.2954 39.9287C57.5754 39.2847 57.9534 38.7387 58.4294 38.2907C58.9148 37.8427 59.4841 37.4974 60.1374 37.2547C60.7908 37.012 61.5001 36.8907 62.2654 36.8907C62.5828 36.8907 62.9141 36.9234 63.2594 36.9887C63.6048 37.0447 63.9361 37.138 64.2534 37.2687C64.5708 37.39 64.8694 37.544 65.1494 37.7307C65.4294 37.9174 65.6674 38.1414 65.8634 38.4027L64.5194 39.4667ZM74.2434 39.4667C73.9821 39.112 73.6414 38.8554 73.2214 38.6967C72.8014 38.5287 72.3908 38.4447 71.9894 38.4447C71.4761 38.4447 71.0094 38.538 70.5894 38.7247C70.1694 38.9114 69.8054 39.168 69.4974 39.4947C69.1988 39.8214 68.9654 40.204 68.7974 40.6427C68.6388 41.0814 68.5594 41.5574 68.5594 42.0707C68.5594 42.612 68.6388 43.1067 68.7974 43.5547C68.9561 44.0027 69.1801 44.39 69.4694 44.7167C69.7681 45.034 70.1228 45.2814 70.5334 45.4587C70.9441 45.636 71.4061 45.7247 71.9194 45.7247C72.4514 45.7247 72.9228 45.622 73.3334 45.4167C73.7441 45.202 74.0754 44.922 74.3274 44.5767L75.7414 45.5707C75.3028 46.1214 74.7661 46.5507 74.1314 46.8587C73.4968 47.1574 72.7548 47.3067 71.9054 47.3067C71.1308 47.3067 70.4168 47.1807 69.7634 46.9287C69.1194 46.6674 68.5641 46.308 68.0974 45.8507C67.6308 45.384 67.2668 44.8334 67.0054 44.1987C66.7441 43.5547 66.6134 42.8454 66.6134 42.0707C66.6134 41.2774 66.7488 40.5634 67.0194 39.9287C67.2994 39.2847 67.6774 38.7387 68.1534 38.2907C68.6388 37.8427 69.2081 37.4974 69.8614 37.2547C70.5148 37.012 71.2241 36.8907 71.9894 36.8907C72.3068 36.8907 72.6381 36.9234 72.9834 36.9887C73.3288 37.0447 73.6601 37.138 73.9774 37.2687C74.2948 37.39 74.5934 37.544 74.8734 37.7307C75.1534 37.9174 75.3914 38.1414 75.5874 38.4027L74.2434 39.4667Z" fill="#344AD5"/>
      </svg>
    </IconWrapper>
  );
};

export default MortgageCreditIcon;
