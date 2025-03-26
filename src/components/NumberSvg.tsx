
import React from 'react';

type NumberSvgProps = {
  number: 1 | 2 | 3 | 4;
  selected?: boolean;
};

const NumberSvg: React.FC<NumberSvgProps> = ({ number, selected = false }) => {
  const renderSvg = () => {
    switch (number) {
      case 1:
        return (
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
            <path d="M37.2538 31.1468C40.4923 36.9761 47.4453 37.0807 52.275 36.0248C53.6968 35.7139 55.1541 36.7974 55.0664 38.2501L50.8674 107.768C50.7955 108.959 51.2363 110.158 52.2516 110.784C57.9871 114.322 68.2027 113.007 74.6251 111.389C76.2232 110.986 77.325 109.573 77.434 107.929C79.1626 81.8419 82.4816 31.9583 83.2538 21.1484C84.0538 9.94978 76.2538 6.81455 72.2538 6.64676C59.0538 3.84676 47.7538 10.8134 43.7538 14.6468C39.7539 18.4801 33.2538 23.9468 37.2538 31.1468Z" 
            stroke="#344AD5" strokeWidth="2" />
          </svg>
        );
      case 2:
        return (
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
            <path d="M40.6704 50.3741C47.7168 50.3741 50.3454 45.705 51.0475 41.5074C51.4991 38.808 51.4543 35.951 52.7138 33.5212C58.8326 21.7171 72.0394 26.4233 70.6704 37.3741C69.6589 45.4658 61.7075 55.0746 56.0404 60.6887C54.1958 62.5161 52.5729 64.596 50.7997 66.4929C45.8272 71.8121 35.261 79.557 29.6704 83.375C27.3371 84.875 22.2704 90.575 20.6704 101.375C19.2663 110.853 25.461 115.119 29.9275 116.473C31.0679 116.818 32.2599 116.86 33.4511 116.828C46.9392 116.465 72.9931 115.64 82.1704 114.875C88.9974 114.306 92.8574 111.343 94.7576 108.72C95.9997 107.006 96.8204 104.995 97.7094 103.074C101.712 94.4218 95.6054 91.329 91.6704 90.875H62.4539C61.5162 90.875 61.0942 89.7004 61.8176 89.1036L79.6704 74.375C85.6704 68.5417 98.0704 52.1748 99.6704 33.3741C101.27 14.5734 85.6704 6.20716 77.6704 4.37412C70.3371 3.70745 52.6704 3.97412 40.6704 10.3741C29.9075 16.1143 26.3846 26.0376 25.7727 31.6302C25.6459 32.7885 25.7551 33.9552 26.0383 35.0855C27.5323 41.0476 31.9618 50.3741 40.6704 50.3741Z" 
            stroke="#344AD5" strokeWidth="2" />
          </svg>
        );
      case 3:
        return (
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
            <path d="M34.0496 30.624C39.6496 39.824 48.2847 34.2479 50.0496 33.624C51.8145 33 65.8145 29.5 68.5497 30.624C71.285 31.7479 73.4496 37.825 71.0496 44.625C68.6496 51.425 50.0496 51.5 46.0496 51.625C42.0495 51.75 36.0496 54.825 36.0496 61.625C36.0496 70.125 41.0496 67.625 54.5496 68.125C65.3496 68.525 68.383 73.625 68.5497 76.125C68.5497 78.9583 66.8497 86.025 60.0496 91.625C53.2494 97.225 41.785 86.25 38.0497 84.625C34.3145 83 22.6497 86.725 21.0497 99.125C19.4497 111.525 31.7164 115.625 38.0497 116.125C50.8831 116.625 79.7497 113.225 92.5497 95.625C104.227 79.5683 95.7074 65.3426 88.555 58.795C87.5833 57.9054 87.5803 56.3228 88.5651 55.4478C102.67 42.9162 99.5582 27.5039 96.0497 21.125C94.3831 16.7913 86.5497 7.42395 68.5497 4.62395C50.5497 1.82395 39.383 9.12395 36.0496 13.124C33.0496 15.124 28.4496 21.424 34.0496 30.624Z" 
            stroke="#344AD5" strokeWidth="2" />
          </svg>
        );
      case 4:
        return (
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
            <path d="M41.8834 4.875C32.6834 4.875 33.1184 7.5 32.3834 12.875C31.6483 18.25 28.1185 38 27.3834 45.375C26.6483 52.75 19.0834 71.175 19.8834 78.375C20.6834 85.575 30.2167 86.7083 34.8834 86.375C34.8834 86.375 64.6183 82 66.3834 86.375C68.1484 90.75 66.1834 104.975 69.3834 111.375C72.5834 117.775 90.6484 118.25 94.3834 114.375C98.061 110.559 100.41 37.5665 100.864 23.4896L100.883 22.875C101.283 10.475 89.6484 8.25 87.8834 7.375C86.1183 6.5 75.6183 5.5 73.8834 7.375C72.1484 9.25 73.6183 67 69.3834 65.875C65.1484 64.75 54.3834 65.875 51.8834 65.875C49.3834 65.875 49.1834 58.475 54.3834 48.875C59.5834 39.275 58.6484 22.875 58.8834 14.875C59.1183 6.875 51.0834 4.875 41.8834 4.875Z" 
            stroke="#344AD5" strokeWidth="2" />
            <path d="M132.648 2.3688C131.336 0.382402 123.462 0.71251 122.806 2.3688C122.15 4.0251 123.462 14.9566 122.806 15.9504C122.15 16.9442 110.996 14.2941 109.356 15.9504C107.716 17.6067 107.388 28.5382 109.356 28.5382C111.324 28.5382 121.166 27.5445 122.806 28.5382C124.446 29.532 121.494 39.801 122.806 41.1261C124.118 42.4511 131.663 42.1198 132.648 41.1261C133.632 40.1323 131.335 29.2007 132.648 28.5382C133.96 27.8757 141.833 29.2007 144.786 28.5382C147.738 27.8757 147.738 15.9504 144.786 15.9504C141.833 15.9504 133.304 16.9442 132.648 15.9504C131.992 14.9566 133.96 4.3552 132.648 2.3688Z" 
            stroke="#344AD5" strokeWidth="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return renderSvg();
};

export default NumberSvg;
