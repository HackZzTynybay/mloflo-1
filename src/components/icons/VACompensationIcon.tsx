
import React from 'react';
import IconWrapper from './IconWrapper';

interface VACompensationIconProps {
  selected?: boolean;
  className?: string;
}

const VACompensationIcon: React.FC<VACompensationIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.5449 68.5059V71.4258H41.041V68.5059H42.5449ZM42.3594 84.4531V87.0703H40.8652V84.4531H42.3594ZM43.834 81.2988C43.834 80.9212 43.7559 80.5924 43.5996 80.3125C43.4499 80.026 43.2025 79.7689 42.8574 79.541C42.5124 79.3066 42.0501 79.0885 41.4707 78.8867C40.6374 78.5938 39.9082 78.265 39.2832 77.9004C38.6647 77.5293 38.1829 77.0736 37.8379 76.5332C37.4993 75.9863 37.3301 75.306 37.3301 74.4922C37.3301 73.6914 37.5124 72.998 37.877 72.4121C38.248 71.8262 38.7624 71.3737 39.4199 71.0547C40.0775 70.7357 40.8457 70.5762 41.7246 70.5762C42.4017 70.5762 43.0104 70.6771 43.5508 70.8789C44.0977 71.0807 44.5632 71.377 44.9473 71.7676C45.3314 72.1582 45.6243 72.64 45.8262 73.2129C46.0345 73.7793 46.1387 74.4303 46.1387 75.166H43.7949C43.7949 74.7493 43.7461 74.3783 43.6484 74.0527C43.5573 73.7207 43.4206 73.4408 43.2383 73.2129C43.056 72.9785 42.8346 72.7995 42.5742 72.6758C42.3203 72.5521 42.0306 72.4902 41.7051 72.4902C41.2428 72.4902 40.862 72.5781 40.5625 72.7539C40.263 72.9232 40.0417 73.1576 39.8984 73.457C39.7617 73.7565 39.6934 74.0983 39.6934 74.4824C39.6934 74.8535 39.765 75.179 39.9082 75.459C40.0514 75.7389 40.2956 75.9928 40.6406 76.2207C40.9922 76.4421 41.474 76.6667 42.0859 76.8945C42.9258 77.194 43.6517 77.5293 44.2637 77.9004C44.8822 78.265 45.3574 78.7174 45.6895 79.2578C46.028 79.7917 46.1973 80.4655 46.1973 81.2793C46.1973 82.1191 46.002 82.832 45.6113 83.418C45.2272 84.0039 44.6868 84.4499 43.9902 84.7559C43.3001 85.0553 42.4961 85.2051 41.5781 85.2051C40.9987 85.2051 40.4225 85.1302 39.8496 84.9805C39.2832 84.8242 38.7689 84.5703 38.3066 84.2188C37.8444 83.8672 37.4766 83.4017 37.2031 82.8223C36.9297 82.2363 36.793 81.5202 36.793 80.6738H39.1562C39.1562 81.1816 39.2246 81.6048 39.3613 81.9434C39.498 82.2819 39.6836 82.5488 39.918 82.7441C40.1523 82.9395 40.4128 83.0794 40.6992 83.1641C40.9922 83.2487 41.2852 83.291 41.5781 83.291C42.0664 83.291 42.4766 83.2096 42.8086 83.0469C43.1471 82.8776 43.401 82.6432 43.5703 82.3438C43.7461 82.0378 43.834 81.6895 43.834 81.2988Z" fill="#344AD5"/>
        <circle cx="80.5" cy="35.5" r="15.5" stroke="#344AD5" stroke-width="2"/>
        <path d="M107 97.2653V59.3333C107 57.1242 105.209 55.3333 103 55.3333H99.2427M79.165 88.1497C80.8225 87.8883 82.3401 87.7023 83.7282 87.5807M91.4854 55.3333C93.6149 60.4234 95.0447 73.999 83.7282 87.5807M91.4854 55.3333H99.2427M91.4854 55.3333H70.4951M83.7282 87.5807C86.9817 87.2956 89.5233 87.3637 91.4854 87.6408M99.2427 55.3333C99.699 62.8943 98.7864 79.9411 91.4854 87.6408M91.4854 87.6408C95.6921 88.2348 97.2348 89.7897 97.4175 90.8844C98.8777 98.1769 91.9417 100 88.2913 100H82.8155M70.4951 55.3333L82.8155 100M70.4951 55.3333H65.4757M70.4951 55.3333L47.3989 35.5017C45.771 34.1038 43.3301 34.2395 41.8671 35.809L32.165 46.2177M82.8155 100H57.1553C54.9462 100 53.1553 98.2091 53.1553 96V95.898M53.1553 81.7687L65.4757 55.3333M53.1553 81.7687V63.5374M53.1553 81.7687V90.8844M65.4757 55.3333H64.1068M56.3495 55.3333H55.89C54.3797 55.3333 53.1553 56.5577 53.1553 58.068V58.068M56.3495 55.3333L27.1576 44.399C25.1217 43.6365 22.8494 44.6396 22.0412 46.6578L17.1068 58.9796M56.3495 55.3333H64.1068M53.1553 58.9796H22.5825M53.1553 58.9796V58.068M53.1553 58.9796V63.5374M53.1553 95.898H17C14.7909 95.898 13 94.1071 13 91.898V62.9796C13 60.7705 14.7909 58.9796 17 58.9796H22.5825M53.1553 95.898V90.8844M22.5825 58.9796V58.9796C22.5825 57.3481 24.4342 56.2285 26.0637 56.3093C27.9409 56.4025 30.1 55.8402 31.9617 53.848C33.3861 52.3236 35.4938 51.3476 37.4437 52.0896L53.1553 58.068M38.5534 48.0408V48.0408C39.9383 46.427 42.6096 46.5849 44.5868 47.3679C46.1642 47.9925 48.1965 48.2041 50.6054 47.3972C52.205 46.8615 54.0198 46.9373 55.3164 48.0165L64.1068 55.3333M53.1553 63.5374H28.1425C26.2362 63.5374 24.6532 64.9166 23.8696 66.6545C23.8246 66.7543 23.7783 66.8535 23.7306 66.9519C22.3554 69.7918 18.0194 73.5893 18.0194 76.7447V80.5034C18.0194 82.7125 19.8812 84.4341 21.9139 85.2991C22.8893 85.7142 23.8193 86.3183 24.5224 87.1713C25.9274 88.8761 27.5676 90.8844 29.7767 90.8844H53.1553" stroke="#344AD5" stroke-width="2"/>
      </svg>
    </IconWrapper>
  );
};

export default VACompensationIcon;
