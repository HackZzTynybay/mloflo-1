
import React from 'react';
import IconWrapper from './IconWrapper';

interface MaintenanceIconProps {
  selected?: boolean;
  className?: string;
}

const MaintenanceIcon: React.FC<MaintenanceIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.2539 24.207V27.7109H42.4492V24.207H44.2539ZM44.0312 43.3438V46.4844H42.2383V43.3438H44.0312ZM45.8008 39.5586C45.8008 39.1055 45.707 38.7109 45.5195 38.375C45.3398 38.0312 45.043 37.7227 44.6289 37.4492C44.2148 37.168 43.6602 36.9062 42.9648 36.6641C41.9648 36.3125 41.0898 35.918 40.3398 35.4805C39.5977 35.0352 39.0195 34.4883 38.6055 33.8398C38.1992 33.1836 37.9961 32.3672 37.9961 31.3906C37.9961 30.4297 38.2148 29.5977 38.6523 28.8945C39.0977 28.1914 39.7148 27.6484 40.5039 27.2656C41.293 26.8828 42.2148 26.6914 43.2695 26.6914C44.082 26.6914 44.8125 26.8125 45.4609 27.0547C46.1172 27.2969 46.6758 27.6523 47.1367 28.1211C47.5977 28.5898 47.9492 29.168 48.1914 29.8555C48.4414 30.5352 48.5664 31.3164 48.5664 32.1992H45.7539C45.7539 31.6992 45.6953 31.2539 45.5781 30.8633C45.4688 30.4648 45.3047 30.1289 45.0859 29.8555C44.8672 29.5742 44.6016 29.3594 44.2891 29.2109C43.9844 29.0625 43.6367 28.9883 43.2461 28.9883C42.6914 28.9883 42.2344 29.0938 41.875 29.3047C41.5156 29.5078 41.25 29.7891 41.0781 30.1484C40.9141 30.5078 40.832 30.918 40.832 31.3789C40.832 31.8242 40.918 32.2148 41.0898 32.5508C41.2617 32.8867 41.5547 33.1914 41.9688 33.4648C42.3906 33.7305 42.9688 34 43.7031 34.2734C44.7109 34.6328 45.582 35.0352 46.3164 35.4805C47.0586 35.918 47.6289 36.4609 48.0273 37.1094C48.4336 37.75 48.6367 38.5586 48.6367 39.5352C48.6367 40.543 48.4023 41.3984 47.9336 42.1016C47.4727 42.8047 46.8242 43.3398 45.9883 43.707C45.1602 44.0664 44.1953 44.2461 43.0938 44.2461C42.3984 44.2461 41.707 44.1562 41.0195 43.9766C40.3398 43.7891 39.7227 43.4844 39.168 43.0625C38.6133 42.6406 38.1719 42.082 37.8438 41.3867C37.5156 40.6836 37.3516 39.8242 37.3516 38.8086H40.1875C40.1875 39.418 40.2695 39.9258 40.4336 40.332C40.5977 40.7383 40.8203 41.0586 41.1016 41.293C41.3828 41.5273 41.6953 41.6953 42.0391 41.7969C42.3906 41.8984 42.7422 41.9492 43.0938 41.9492C43.6797 41.9492 44.1719 41.8516 44.5703 41.6562C44.9766 41.4531 45.2812 41.1719 45.4844 40.8125C45.6953 40.4453 45.8008 40.0273 45.8008 39.5586Z" fill="#344AD5"/>
        <path d="M98.2443 49.5V105.5M98.2443 49.5C99.2443 47.8333 98.5443 43.6 87.7443 40M98.2443 49.5L88.2443 56.7727M98.2443 105.5H21.2443M98.2443 105.5L31.2443 56.7727M21.2443 105.5V49.5M21.2443 105.5L88.2443 56.7727M21.2443 49.5C20.4109 47.5 21.2443 42.8 31.2443 40M21.2443 49.5L31.2443 56.7727M31.2443 56.7727V14H87.7443L88.2443 56.7727M76.7444 53H42.2444M76.7444 44.5H57.7444M76.7444 37H57.7444M76.7444 28.5H57.7444" stroke="#344AD5" strokeWidth="2"/>
      </svg>
    </IconWrapper>
  );
};

export default MaintenanceIcon;
