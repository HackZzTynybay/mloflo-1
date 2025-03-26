
import React from 'react';
import IconWrapper from './IconWrapper';

interface RentFreeIconProps {
  selected?: boolean;
  className?: string;
}

const RentFreeIcon: React.FC<RentFreeIconProps> = ({ selected = false, className = "" }) => {
  return (
    <IconWrapper selected={selected} className={className}>
      <svg width="128" height="120" viewBox="0 0 128 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 64.5H5.37793C2.2027 64.5 0.293303 60.9781 2.02594 58.3173L26 21.5M12.5 64.5L32.4186 33M12.5 64.5V105C12.5 107.209 14.2909 109 16.5 109H24M26 21.5L32.4186 33M26 21.5H86H101.675C103.113 21.5 104.439 22.2711 105.151 23.5198L125.777 59.7212C126.991 61.8521 125.452 64.5 123 64.5V64.5M32.4186 33L48.8555 62.4495C49.5621 63.7155 50.8985 64.5 52.3483 64.5H55M123 64.5V105C123 107.209 121.209 109 119 109H55M123 64.5H55M55 64.5V109M55 109H43M24 109V87.5C24 85.2909 25.7909 83.5 28 83.5H39C41.2091 83.5 43 85.2909 43 87.5V109M24 109H43M89.25 77H75C72.7909 77 71 78.7909 71 81V96.5C71 98.7091 72.7909 100.5 75 100.5H89.25M89.25 77H103.5C105.709 77 107.5 78.7909 107.5 81V96.5C107.5 98.7091 105.709 100.5 103.5 100.5H89.25M89.25 77V100.5" stroke="#344AD5" strokeWidth="2"/>
        <circle cx="32" cy="66" r="7" fill="#344AD5"/>
        <path d="M53.6853 40.0604L56.0099 40.0396C56.4962 40.0352 56.9143 40.1047 57.2642 40.2481C57.6142 40.3914 57.8842 40.6058 58.0742 40.8912C58.2643 41.1767 58.3612 41.5288 58.365 41.9478C58.3679 42.2788 58.3119 42.5664 58.1969 42.8106C58.0819 43.0548 57.9182 43.2599 57.7058 43.4259C57.4963 43.5918 57.2485 43.723 56.9622 43.8193L56.586 44.016L54.5339 44.0344L54.5165 43.0809L56.0502 43.0672C56.2992 43.0649 56.5053 43.0191 56.6686 42.9298C56.8319 42.8404 56.9538 42.7177 57.0345 42.5617C57.118 42.4057 57.1589 42.2281 57.1571 42.0289C57.1552 41.815 57.1126 41.6308 57.0291 41.4763C56.9457 41.3188 56.8201 41.1984 56.6524 41.1149C56.4846 41.0314 56.2733 40.9909 56.0184 40.9931L54.9023 41.0031L54.951 46.4477L53.7426 46.4586L53.6853 40.0604ZM57.3547 46.4262L55.8482 43.5744L57.1269 43.5585L58.6505 46.3531L58.651 46.4146L57.3547 46.4262ZM64.146 45.4162L64.1545 46.3653L60.7533 46.3958L60.7448 45.4466L64.146 45.4162ZM61.0652 39.9943L61.1224 46.3925L59.914 46.4033L59.8567 40.0051L61.0652 39.9943ZM63.6771 42.6121L63.6854 43.5394L60.728 43.5658L60.7197 42.6386L63.6771 42.6121ZM64.0841 39.9673L64.0926 40.9209L60.7046 40.9512L60.696 39.9976L64.0841 39.9673ZM70.528 39.9096L70.5852 46.3078L69.3724 46.3186L66.6126 41.9047L66.6523 46.343L65.4438 46.3538L65.3866 39.9556L66.595 39.9448L69.3637 44.3631L69.3239 39.9204L70.528 39.9096ZM74.823 39.8712L74.8803 46.2693L73.6762 46.2801L73.6189 39.8819L74.823 39.8712ZM76.8093 39.8534L76.8178 40.8069L71.6632 40.8531L71.6547 39.8995L76.8093 39.8534ZM79.2082 43.0312L79.2164 43.9497L76.8127 43.9712L76.8045 43.0528L79.2082 43.0312ZM84.6101 39.7835L84.6674 46.1817L83.4589 46.1925L83.4017 39.7944L84.6101 39.7835ZM87.2143 42.5245L87.2229 43.4781L84.327 43.504L84.3185 42.5504L87.2143 42.5245ZM87.528 39.7574L87.5365 40.711L84.3023 40.7399L84.2937 39.7864L87.528 39.7574ZM88.7997 39.746L91.1243 39.7252C91.6106 39.7209 92.0287 39.7904 92.3787 39.9337C92.7286 40.0771 92.9986 40.2915 93.1886 40.5769C93.3787 40.8623 93.4756 41.2145 93.4794 41.6334C93.4823 41.9645 93.4263 42.2521 93.3113 42.4963C93.1963 42.7405 93.0326 42.9456 92.8202 43.1115C92.6107 43.2775 92.3629 43.4086 92.0766 43.5049L91.7004 43.7017L89.6483 43.72L89.631 42.7665L91.1646 42.7528C91.4136 42.7506 91.6197 42.7048 91.783 42.6154C91.9463 42.5261 92.0682 42.4034 92.1489 42.2474C92.2324 42.0914 92.2733 41.9138 92.2715 41.7145C92.2696 41.5007 92.227 41.3165 92.1436 41.162C92.0601 41.0045 91.9345 40.884 91.7668 40.8006C91.599 40.7171 91.3877 40.6765 91.1328 40.6788L90.0167 40.6888L90.0654 46.1334L88.857 46.1442L88.7997 39.746ZM92.4691 46.1119L90.9626 43.26L92.2413 43.2442L93.7649 46.0387L93.7655 46.1003L92.4691 46.1119ZM99.2604 45.1018L99.2689 46.051L95.8677 46.0815L95.8592 45.1323L99.2604 45.1018ZM96.1796 39.68L96.2368 46.0781L95.0284 46.089L94.9711 39.6908L96.1796 39.68ZM98.7915 42.2978L98.7998 43.225L95.8424 43.2515L95.8341 42.3243L98.7915 42.2978ZM99.1985 39.6529L99.207 40.6065L95.819 40.6368L95.8104 39.6833L99.1985 39.6529ZM104.79 45.0523L104.799 46.0015L101.398 46.0319L101.389 45.0828L104.79 45.0523ZM101.709 39.6305L101.767 46.0286L100.558 46.0395L100.501 39.6413L101.709 39.6305ZM104.321 42.2483L104.33 43.1755L101.372 43.202L101.364 42.2748L104.321 42.2483ZM104.728 39.6034L104.737 40.557L101.349 40.5873L101.34 39.6338L104.728 39.6034Z" fill="#344AD5"/>
      </svg>
    </IconWrapper>
  );
};

export default RentFreeIcon;
