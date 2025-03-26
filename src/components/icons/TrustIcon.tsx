
import React from 'react';
import IconWrapper from './IconWrapper';

interface TrustIconProps {
  selected?: boolean;
  className?: string;
}

const TrustIcon: React.FC<TrustIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M67.7595 81.8373C66.8189 80.2697 63.8092 77.5108 59.2946 79.0156C54.78 80.5205 44.873 76.821 40.4838 74.7832L26.3757 80.5924M67.7595 81.8373C67.4459 83.8751 65.3141 88.0448 59.2946 88.421L49.4189 86.54M67.7595 81.8373L82.8606 75.3653C83.7372 74.9897 84.7331 74.9113 85.5894 75.3309C87.8873 76.4571 90.1624 78.7154 87.0405 81.8373C83.2784 85.5994 69.1703 95.6319 62.5865 100.178L40.4838 93.594L33.5003 97.8264M26.3757 80.5924L16.5 84.6589L24.9649 102.999L33.5003 97.8264M26.3757 80.5924L33.5003 97.8264" stroke="#344AD5" strokeWidth="2"/>
        <path d="M92.2135 51.2703H103.03M92.2135 24.4649L85.1594 31.9892M62.1162 16V27.2865M32.9594 24.4649L40.4837 31.9892M23.0837 51.2703H32.9594M83.7486 42.3361C78.4522 32.9895 70.2104 34.393 64.9519 37.1991C63.2264 38.1199 61.081 38.0212 59.4114 37.0027C52.5916 32.8425 46.6033 36.4095 44.2459 39.0442C38.6027 45.3512 40.1702 51.7414 42.3648 55.5035C44.8315 59.7319 53.7644 66.4972 60.0989 70.3251C61.3329 71.0708 62.8733 71.0299 64.0843 70.2473C69.8633 66.5126 79.1901 59.8543 81.8675 55.5035C84.8772 50.6127 85.1594 44.8257 83.7486 42.3361Z" stroke="#344AD5" strokeWidth="2"/>
      </svg>
    </IconWrapper>
  );
};

export default TrustIcon;
