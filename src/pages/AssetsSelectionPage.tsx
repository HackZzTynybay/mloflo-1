
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import SelectionCard from '../components/SelectionCard';

const AssetsSelectionPage = () => {
  const navigate = useNavigate();
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);

  const assetOptions = [
    {
      id: 'proceeds-real-estate',
      title: 'Proceeds from Real Estate Property to be sold on or before closing',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60.8359 44.8047V47.1406H59.6328V44.8047H60.8359ZM60.6875 57.5625V59.6562H59.4922V57.5625H60.6875ZM61.8672 55.0391C61.8672 54.737 61.8047 54.474 61.6797 54.25C61.5599 54.0208 61.362 53.8151 61.0859 53.6328C60.8099 53.4453 60.4401 53.2708 59.9766 53.1094C59.3099 52.875 58.7266 52.612 58.2266 52.3203C57.7318 52.0234 57.3464 51.6589 57.0703 51.2266C56.7995 50.7891 56.6641 50.2448 56.6641 49.5938C56.6641 48.9531 56.8099 48.3984 57.1016 47.9297C57.3984 47.4609 57.8099 47.099 58.3359 46.8438C58.862 46.5885 59.4766 46.4609 60.1797 46.4609C60.7214 46.4609 61.2083 46.5417 61.6406 46.7031C62.0781 46.8646 62.4505 47.1016 62.7578 47.4141C63.0651 47.7266 63.2995 48.112 63.4609 48.5703C63.6276 49.0234 63.7109 49.5443 63.7109 50.1328H61.8359C61.8359 49.7995 61.7969 49.5026 61.7188 49.2422C61.6458 48.9766 61.5365 48.7526 61.3906 48.5703C61.2448 48.3828 61.0677 48.2396 60.8594 48.1406C60.6562 48.0417 60.4245 47.9922 60.1641 47.9922C59.7943 47.9922 59.4896 48.0625 59.25 48.2031C59.0104 48.3385 58.8333 48.526 58.7188 48.7656C58.6094 49.0052 58.5547 49.2786 58.5547 49.5859C58.5547 49.8828 58.612 50.1432 58.7266 50.3672C58.8411 50.5911 59.0365 50.7943 59.3125 50.9766C59.5938 51.1536 59.9792 51.3333 60.4688 51.5156C61.1406 51.7552 61.7214 52.0234 62.2109 52.3203C62.7057 52.612 63.0859 52.974 63.3516 53.4062C63.6224 53.8333 63.7578 54.3724 63.7578 55.0234C63.7578 55.6953 63.6016 56.2656 63.2891 56.7344C62.9818 57.2031 62.5495 57.5599 61.9922 57.8047C61.4401 58.0443 60.7969 58.1641 60.0625 58.1641C59.599 58.1641 59.138 58.1042 58.6797 57.9844C58.2266 57.8594 57.8151 57.6562 57.4453 57.375C57.0755 57.0938 56.7812 56.7214 56.5625 56.2578C56.3438 55.7891 56.2344 55.2161 56.2344 54.5391H58.125C58.125 54.9453 58.1797 55.2839 58.2891 55.5547C58.3984 55.8255 58.5469 56.0391 58.7344 56.1953C58.9219 56.3516 59.1302 56.4635 59.3594 56.5312C59.5938 56.599 59.8281 56.6328 60.0625 56.6328C60.4531 56.6328 60.7812 56.5677 61.0469 56.4375C61.3177 56.3021 61.5208 56.1146 61.6562 55.875C61.7969 55.6302 61.8672 55.3516 61.8672 55.0391Z" fill="#344AD5"/>
          <path d="M30.4811 92.0342V92.0342C29.1974 92.0342 28.1568 90.9936 28.1568 89.7099V84.5774M28.1568 57.0804V50.0896M81.1513 92.0342H88.773C90.9821 92.0342 92.773 90.2434 92.773 88.0342V80.849M92.773 54.7501V50.0896M79.2919 30.9303L63.0571 18.7679C61.6539 17.7167 59.7297 17.7018 58.3104 18.7311L20.458 46.1836C18.5907 47.5378 18.2674 50.1932 19.7552 51.9559V51.9559C21.0877 53.5347 23.4087 53.8271 25.0912 52.6281L58.3617 28.9176C59.7579 27.9226 61.6329 27.928 63.0233 28.931L95.7422 52.5327C97.4296 53.7499 99.7877 53.3433 100.97 51.6312V51.6312C102.104 49.9896 101.737 47.7456 100.141 46.5495L89.0541 38.2437M79.2919 30.9303V23.3303C79.2919 21.1211 81.0828 19.3303 83.2919 19.3303H85.0541C87.2632 19.3303 89.0541 21.1211 89.0541 23.3303V38.2437M79.2919 30.9303L89.0541 38.2437M51.4 64.0712V48.7864C51.4 47.8234 51.7473 46.8929 52.3783 46.1654L57.513 40.2455C59.1627 38.3434 62.1384 38.4203 63.6878 40.4051L68.2179 46.2084C68.7668 46.9114 69.0649 47.7778 69.0649 48.6697V64.0712M82.5459 62.5798V62.5798C81.7752 61.3435 82.1506 59.7166 83.3852 58.943L85.2305 57.7868C87.0904 56.6214 89.542 57.1724 90.7244 59.0216L98.1293 70.6028C99.2904 72.4187 98.8039 74.8279 97.0294 76.0511L96.2216 76.6078C94.3432 77.9025 91.7641 77.3665 90.5572 75.4305L90.2163 74.8838M82.5459 62.5798L73.3651 67.684C72.6826 68.0634 71.904 68.2348 71.1252 68.177L61.0088 67.4257C60.2004 67.3657 59.3929 67.5526 58.6932 67.9618L51.5178 72.1582C49.8378 73.1406 49.0487 75.3972 50.7049 76.4191C52.365 77.4434 54.96 77.6524 58.6423 75.3338C59.9495 74.5107 61.5831 74.2879 62.9728 74.9621L75.1081 80.849C76.6577 81.4704 80.6865 81.9675 84.4054 78.9848L90.2163 74.8838M82.5459 62.5798L90.2163 74.8838M52.3297 68.2656L36.9892 65.9354M33.7351 83.1793L30.4811 78.9848M44.427 84.5774C45.1485 83.3719 44.0944 82.3612 42.7985 81.6715C41.565 81.015 40.0886 81.4356 39.0739 82.3964L33.4227 87.7473C32.7247 88.4082 32.201 89.3166 32.406 90.2557C32.9329 92.6702 35.5419 93.0983 36.9892 92.9663M44.427 84.5774L36.9892 92.9663M44.427 84.5774C46.556 83.7236 50.4792 83.2609 50.5518 87.4871C50.5662 88.3226 50.1627 89.0995 49.5909 89.7087L49.1577 90.17M36.9892 92.9663C37.733 97.0676 41.3279 97.1608 43.0324 96.6948M43.0324 96.6948L49.1577 90.17M43.0324 96.6948C42.4805 99.4613 44.1127 100.517 45.688 100.814C46.659 100.998 47.5878 100.488 48.2592 99.7631L48.6108 99.3835M49.1577 90.17C50.8349 90.3254 54.0032 91.3818 53.2595 94.3645M53.2595 94.3645C55.5838 95.918 58.8378 99.6775 53.2595 102.287C51.7099 102.992 48.6108 103.399 48.6108 99.3835M53.2595 94.3645L48.6108 99.3835M78.3622 84.5774C79.2919 86.7523 79.9427 90.9157 75.1081 90.17M75.1081 90.17L65.3459 83.6453M75.1081 90.17C75.418 92.3449 75.0151 96.4151 70.9243 95.2966M70.9243 95.2966L61.627 90.17M70.9243 95.2966C71.0793 97.3998 70.3665 101.162 66.2757 99.3835C65.5783 99.0804 64.9611 98.807 64.4162 98.5612M60.6973 96.6948C60.8258 96.8236 61.7647 97.3653 64.4162 98.5612M64.4162 98.5612C64.7261 101.154 63.9513 105.342 58.373 101.355M28.7633 62.4709L22.3008 75.7375C21.4243 77.5369 22.1588 79.7066 23.9481 80.6035V80.6035C25.7569 81.5102 27.9582 80.7742 28.8578 78.9618L35.4188 65.7436C36.2982 63.9719 35.6323 61.8219 33.9055 60.8574V60.8574C32.0461 59.8188 29.696 60.5562 28.7633 62.4709Z" stroke="#344AD5" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'proceeds-non-real-estate',
      title: 'Proceeds from Sale of Non-Real Estate Asset',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 54V46.9489C50 45.7188 50.566 44.557 51.5348 43.7989L70.6206 28.8621C72.0286 27.7602 73.9969 27.7265 75.4418 28.7796L97.6977 45M97.6977 45V45C99.695 46.4556 102.5 45.029 102.5 42.5576V41.3296C102.5 40.1783 101.956 39.0945 101.033 38.4062L75.4771 19.3473C74.018 18.2592 72.0083 18.2933 70.587 19.4304L45.5 39.5M97.6977 45V54M102.5 96V63.5C102.5 61.2909 100.709 59.5 98.5 59.5H81M102.5 96H37.5M102.5 96C103.5 98.3333 103.4 103 95 103C92.1932 103 87.075 103 81 103M37.5 96V63.5C37.5 61.2909 39.2909 59.5 41.5 59.5H59.5M37.5 96C37.5 101.2 41.8333 102.833 44 103C48.0771 103 53.5771 103 59.5 103M59.5 59.5H81M59.5 59.5V65M59.5 103C66.6356 103 74.3851 103 81 103M59.5 103V91.5M81 59.5V65M81 103V91.5M59.5 65H54.3801C52.028 65 50.2037 67.2957 48.614 69.0294C48.3097 69.3613 47.9459 69.6711 47.5137 69.9431C45.7447 71.0564 44 72.614 44 74.7041V81.6617C44 83.5948 45.4605 85.2089 47.0333 86.3328C47.6711 86.7885 48.2858 87.3699 48.791 88.0963C49.9722 89.7948 51.584 91.5 53.6529 91.5H59.5M59.5 65V91.5M81 65H85.6528C87.993 65 89.7395 67.258 91.2262 69.0652C91.4957 69.3928 91.8175 69.697 92.1995 69.9627C94.0131 71.2241 96 72.7909 96 75V81.4979C96 83.5027 94.4507 85.1157 92.6761 86.0484C92.2591 86.2676 91.8583 86.523 91.4954 86.8178C89.4481 88.4806 87.4005 91.5 84.763 91.5H81M81 65V91.5M34.5 103C29.7147 103.16 19.9832 102.373 17.7537 98.0968C17.5549 97.7156 17.5 97.2808 17.5 96.8509V89M44 45C36.3732 35.1941 25.1467 38.6607 19.1525 42.3759C18.0824 43.0392 17.5 44.241 17.5 45.5V46.5M44 45C40.8333 48.5 31.1 53.7 17.5 46.5M44 45V55M17.5 46.5V55M34.5 59.5C30.6667 60.1667 21.9 60.2 17.5 55M17.5 55V65M33.5 68.5C29.5 69.1667 20.7 69.4 17.5 65M17.5 65V72M33.5 77C29.8333 77.6667 21.5 77.6 17.5 72M17.5 72V80.5M33.5 85C29.8333 85.8333 21.5 86.1 17.5 80.5M17.5 80.5V89M33.5 93.5C29.8333 94.1667 21.5 94.2 17.5 89" stroke="#344AD5" strokeWidth="2"/>
          <path d="M70.8359 71.8047V74.1406H69.6328V71.8047H70.8359ZM70.6875 84.5625V86.6562H69.4922V84.5625H70.6875ZM71.8672 82.0391C71.8672 81.737 71.8047 81.474 71.6797 81.25C71.5599 81.0208 71.362 80.8151 71.0859 80.6328C70.8099 80.4453 70.4401 80.2708 69.9766 80.1094C69.3099 79.875 68.7266 79.612 68.2266 79.3203C67.7318 79.0234 67.3464 78.6589 67.0703 78.2266C66.7995 77.7891 66.6641 77.2448 66.6641 76.5938C66.6641 75.9531 66.8099 75.3984 67.1016 74.9297C67.3984 74.4609 67.8099 74.099 68.3359 73.8438C68.862 73.5885 69.4766 73.4609 70.1797 73.4609C70.7214 73.4609 71.2083 73.5417 71.6406 73.7031C72.0781 73.8646 72.4505 74.1016 72.7578 74.4141C73.0651 74.7266 73.2995 75.112 73.4609 75.5703C73.6276 76.0234 73.7109 76.5443 73.7109 77.1328H71.8359C71.8359 76.7995 71.7969 76.5026 71.7188 76.2422C71.6458 75.9766 71.5365 75.7526 71.3906 75.5703C71.2448 75.3828 71.0677 75.2396 70.8594 75.1406C70.6562 75.0417 70.4245 74.9922 70.1641 74.9922C69.7943 74.9922 69.4896 75.0625 69.25 75.2031C69.0104 75.3385 68.8333 75.526 68.7188 75.7656C68.6094 76.0052 68.5547 76.2786 68.5547 76.5859C68.5547 76.8828 68.612 77.1432 68.7266 77.3672C68.8411 77.5911 69.0365 77.7943 69.3125 77.9766C69.5938 78.1536 69.9792 78.3333 70.4688 78.5156C71.1406 78.7552 71.7214 79.0234 72.2109 79.3203C72.7057 79.612 73.0859 79.974 73.3516 80.4062C73.6224 80.8333 73.7578 81.3724 73.7578 82.0234C73.7578 82.6953 73.6016 83.2656 73.2891 83.7344C72.9818 84.2031 72.5495 84.5599 71.9922 84.8047C71.4401 85.0443 70.7969 85.1641 70.0625 85.1641C69.599 85.1641 69.138 85.1042 68.6797 84.9844C68.2266 84.8594 67.8151 84.6562 67.4453 84.375C67.0755 84.0938 66.7812 83.7214 66.5625 83.2578C66.3438 82.7891 66.2344 82.2161 66.2344 81.5391H68.125C68.125 81.9453 68.1797 82.2839 68.2891 82.5547C68.3984 82.8255 68.5469 83.0391 68.7344 83.1953C68.9219 83.3516 69.1302 83.4635 69.3594 83.5312C69.5938 83.599 69.8281 83.6328 70.0625 83.6328C70.4531 83.6328 70.7812 83.5677 71.0469 83.4375C71.3177 83.3021 71.5208 83.1146 71.6562 82.875C71.7969 82.6302 71.8672 82.3516 71.8672 82.0391Z" fill="#344AD5"/>
        </svg>
      )
    },
    {
      id: 'secured-borrowed-funds',
      title: 'Secured Borrowed Funds',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60.8359 70.8047V73.1406H59.6328V70.8047H60.8359ZM60.6875 83.5625V85.6562H59.4922V83.5625H60.6875ZM61.8672 81.0391C61.8672 80.737 61.8047 80.474 61.6797 80.25C61.5599 80.0208 61.362 79.8151 61.0859 79.6328C60.8099 79.4453 60.4401 79.2708 59.9766 79.1094C59.3099 78.875 58.7266 78.612 58.2266 78.3203C57.7318 78.0234 57.3464 77.6589 57.0703 77.2266C56.7995 76.7891 56.6641 76.2448 56.6641 75.5938C56.6641 74.9531 56.8099 74.3984 57.1016 73.9297C57.3984 73.4609 57.8099 73.099 58.3359 72.8438C58.862 72.5885 59.4766 72.4609 60.1797 72.4609C60.7214 72.4609 61.2083 72.5417 61.6406 72.7031C62.0781 72.8646 62.4505 73.1016 62.7578 73.4141C63.0651 73.7266 63.2995 74.112 63.4609 74.5703C63.6276 75.0234 63.7109 75.5443 63.7109 76.1328H61.8359C61.8359 75.7995 61.7969 75.5026 61.7188 75.2422C61.6458 74.9766 61.5365 74.7526 61.3906 74.5703C61.2448 74.3828 61.0677 74.2396 60.8594 74.1406C60.6562 74.0417 60.4245 73.9922 60.1641 73.9922C59.7943 73.9922 59.4896 74.0625 59.25 74.2031C59.0104 74.3385 58.8333 74.526 58.7188 74.7656C58.6094 75.0052 58.5547 75.2786 58.5547 75.5859C58.5547 75.8828 58.612 76.1432 58.7266 76.3672C58.8411 76.5911 59.0365 76.7943 59.3125 76.9766C59.5938 77.1536 59.9792 77.3333 60.4688 77.5156C61.1406 77.7552 61.7214 78.0234 62.2109 78.3203C62.7057 78.612 63.0859 78.974 63.3516 79.4062C63.6224 79.8333 63.7578 80.3724 63.7578 81.0234C63.7578 81.6953 63.6016 82.2656 63.2891 82.7344C62.9818 83.2031 62.5495 83.5599 61.9922 83.8047C61.4401 84.0443 60.7969 84.1641 60.0625 84.1641C59.599 84.1641 59.138 84.1042 58.6797 83.9844C58.2266 83.8594 57.8151 83.6562 57.4453 83.375C57.0755 83.0938 56.7812 82.7214 56.5625 82.2578C56.3438 81.7891 56.2344 81.2161 56.2344 80.5391H58.125C58.125 80.9453 58.1797 81.2839 58.2891 81.5547C58.3984 81.8255 58.5469 82.0391 58.7344 82.1953C58.9219 82.3516 59.1302 82.4635 59.3594 82.5312C59.5938 82.599 59.8281 82.6328 60.0625 82.6328C60.4531 82.6328 60.7812 82.5677 61.0469 82.4375C61.3177 82.3021 61.5208 82.1146 61.6562 81.875C61.7969 81.6302 61.8672 81.3516 61.8672 81.0391Z" fill="#344AD5"/>
          <path d="M36.3478 53.1196H33.1677H32C29.7909 53.1196 28 54.9104 28 57.1196V61.0402M36.3478 53.1196V49.5656C36.3478 48.0289 37.5936 46.783 39.1304 46.783V46.783M36.3478 53.1196H84.4472M84.4472 53.1196H88C90.2091 53.1196 92 54.9104 92 57.1196V61.0402M84.4472 53.1196V49.9632C84.4472 48.2068 83.0234 46.783 81.2671 46.783V46.783M28 61.0402H35.1304C37.3396 61.0402 39.1304 62.8311 39.1304 65.0402V90.7031C39.1304 92.9123 37.3396 94.7031 35.1304 94.7031H28M28 61.0402V94.7031M28 94.7031V101C28 103.209 29.7909 105 32 105H88C90.2091 105 92 103.209 92 101V94.7031M92 61.0402H85.2671C83.0579 61.0402 81.2671 62.8311 81.2671 65.0402V90.7031C81.2671 92.9123 83.0579 94.7031 85.2671 94.7031H92M92 61.0402V94.7031M46.6832 46.783V35.6941C46.6832 31.7338 48.8298 23.6547 57.4161 23.021C62.1863 22.361 71.9652 23.9715 72.9193 35.6941V46.783M46.6832 46.783H72.9193M46.6832 46.783H39.1304M72.9193 46.783H81.2671M81.2671 46.783C82.0621 39.7862 81.2671 26.5 74.5093 20.2481C69.7391 16.2878 57.4957 10.7433 46.6832 20.2481C44.1656 22.4924 40.5 24.5 39.1304 35.6941V46.783" stroke="#344AD5" strokeWidth="2"/>
          <ellipse cx="60" cy="78.5" rx="11" ry="11.5" stroke="#344AD5" strokeWidth="2"/>
          <ellipse cx="60" cy="78.5" rx="16" ry="15.5" stroke="#344AD5" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'unsecured-borrowed-funds',
      title: 'Unsecured Borrowed Funds',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60.8359 70.8047V73.1406H59.6328V70.8047H60.8359ZM60.6875 83.5625V85.6562H59.4922V83.5625H60.6875ZM61.8672 81.0391C61.8672 80.737 61.8047 80.474 61.6797 80.25C61.5599 80.0208 61.362 79.8151 61.0859 79.6328C60.8099 79.4453 60.4401 79.2708 59.9766 79.1094C59.3099 78.875 58.7266 78.612 58.2266 78.3203C57.7318 78.0234 57.3464 77.6589 57.0703 77.2266C56.7995 76.7891 56.6641 76.2448 56.6641 75.5938C56.6641 74.9531 56.8099 74.3984 57.1016 73.9297C57.3984 73.4609 57.8099 73.099 58.3359 72.8438C58.862 72.5885 59.4766 72.4609 60.1797 72.4609C60.7214 72.4609 61.2083 72.5417 61.6406 72.7031C62.0781 72.8646 62.4505 73.1016 62.7578 73.4141C63.0651 73.7266 63.2995 74.112 63.4609 74.5703C63.6276 75.0234 63.7109 75.5443 63.7109 76.1328H61.8359C61.8359 75.7995 61.7969 75.5026 61.7188 75.2422C61.6458 74.9766 61.5365 74.7526 61.3906 74.5703C61.2448 74.3828 61.0677 74.2396 60.8594 74.1406C60.6562 74.0417 60.4245 73.9922 60.1641 73.9922C59.7943 73.9922 59.4896 74.0625 59.25 74.2031C59.0104 74.3385 58.8333 74.526 58.7188 74.7656C58.6094 75.0052 58.5547 75.2786 58.5547 75.5859C58.5547 75.8828 58.612 76.1432 58.7266 76.3672C58.8411 76.5911 59.0365 76.7943 59.3125 76.9766C59.5938 77.1536 59.9792 77.3333 60.4688 77.5156C61.1406 77.7552 61.7214 78.0234 62.2109 78.3203C62.7057 78.612 63.0859 78.974 63.3516 79.4062C63.6224 79.8333 63.7578 80.3724 63.7578 81.0234C63.7578 81.6953 63.6016 82.2656 63.2891 82.7344C62.9818 83.2031 62.5495 83.5599 61.9922 83.8047C61.4401 84.0443 60.7969 84.1641 60.0625 84.1641C59.599 84.1641 59.138 84.1042 58.6797 83.9844C58.2266 83.8594 57.8151 83.6562 57.4453 83.375C57.0755 83.0938 56.7812 82.7214 56.5625 82.2578C56.3438 81.7891 56.2344 81.2161 56.2344 80.5391H58.125C58.125 80.9453 58.1797 81.2839 58.2891 81.5547C58.3984 81.8255 58.5469 82.0391 58.7344 82.1953C58.9219 82.3516 59.1302 82.4635 59.3594 82.5312C59.5938 82.599 59.8281 82.6328 60.0625 82.6328C60.4531 82.6328 60.7812 82.5677 61.0469 82.4375C61.3177 82.3021 61.5208 82.1146 61.6562 81.875C61.7969 81.6302 61.8672 81.3516 61.8672 81.0391Z" fill="#344AD5"/>
          <path d="M36.3478 53.1196H33.1677H32C29.7909 53.1196 28 54.9104 28 57.1196V61.0402M36.3478 53.1196V49.5656C36.3478 48.0289 37.5936 46.783 39.1304 46.783V46.783M36.3478 53.1196H84.4472M84.4472 53.1196H88C90.2091 53.1196 92 54.9104 92 57.1196V61.0402M84.4472 53.1196V50.783C84.4472 48.5739 82.6563 46.783 80.4472 46.783H46.6832M28 61.0402H35.1304C37.3396 61.0402 39.1304 62.8311 39.1304 65.0402V90.7031C39.1304 92.9123 37.3396 94.7031 35.1304 94.7031H28M28 61.0402V94.7031M28 94.7031V101C28 103.209 29.7909 105 32 105H88C90.2091 105 92 103.209 92 101V94.7031M92 61.0402H85.2671C83.0579 61.0402 81.2671 62.8311 81.2671 65.0402V90.7031C81.2671 92.9123 83.0579 94.7031 85.2671 94.7031H92M92 61.0402V94.7031M46.6832 46.783V35.6941C46.6832 31.7338 48.8298 23.6547 57.4161 23.021C60.8817 22.5415 66.9908 23.2604 70.4391 28.1844C72.1288 30.5973 76.1817 31.8343 78.0832 29.5846V29.5846C78.6685 28.8922 78.9684 27.9819 78.7317 27.1067C77.9047 24.0499 75.6662 21.3357 74.5093 20.2481C69.7391 16.2878 57.4957 10.7433 46.6832 20.2481C44.1656 22.4924 40.5 24.5 39.1304 35.6941V46.783M46.6832 46.783H39.1304" stroke="#344AD5" strokeWidth="2"/>
          <ellipse cx="60" cy="78.5" rx="11" ry="11.5" stroke="#344AD5" strokeWidth="2"/>
          <ellipse cx="60" cy="78.5" rx="16" ry="15.5" stroke="#344AD5" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'other',
      title: 'Other',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M68 35.6509C60.0326 31.6673 52.4326 35.6735 48.1726 39.438C46.8541 40.6031 46.9526 42.6036 48.1968 43.8477C49.4847 45.1356 51.5455 45.1571 52.995 44.0541C60.3632 38.4475 64.5941 40.6461 66.1597 43.0427C66.4123 43.4293 66.6847 43.8055 66.9319 44.1956C68.0048 45.8878 68.3279 49.5328 63 54.1504C58.5926 57.9702 57.3328 62.0238 57.2388 64.7653C57.1897 66.1978 58.4781 67.1504 59.9114 67.1504C61.6442 67.1504 63.032 65.7731 63.5366 64.1153C65.1552 58.7969 69.8764 55.5702 72 52.6504C74.6667 48.9839 77.6 40.4509 68 35.6509Z" stroke="#344AD5" strokeWidth="2"/>
          <path d="M102 59.5C102 82.4198 83.4198 101 60.5 101C37.5802 101 19 82.4198 19 59.5C19 36.5802 37.5802 18 60.5 18C83.4198 18 102 36.5802 102 59.5ZM22.0354 59.5C22.0354 80.7434 39.2566 97.9646 60.5 97.9646C81.7434 97.9646 98.9646 80.7434 98.9646 59.5C98.9646 38.2566 81.7434 21.0354 60.5 21.0354C39.2566 21.0354 22.0354 38.2566 22.0354 59.5Z" fill="#344AD5"/>
          <circle cx="60" cy="79" r="6" stroke="#344AD5" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  const handleSelection = (id: string) => {
    setSelectedAsset(id);
  };

  const handleNext = () => {
    if (selectedAsset) {
      navigate('/asset-cash-value');
    }
  };

  const handleBack = () => {
    navigate('/add-additional-assets');
  };

  return (
    <Layout 
      currentStep={5} 
      totalSteps={10}
      title="Assets" 
    >
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Which of the following assets will be used in this transaction?
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mb-10">
          {assetOptions.map((option) => (
            <SelectionCard
              key={option.id}
              title={option.title}
              icon={option.icon}
              selected={selectedAsset === option.id}
              onClick={() => handleSelection(option.id)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-4">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={handleBack}
          >
            Back
          </Button>
          
          <Button 
            type="button"
            className="bg-mloflo-blue hover:bg-blue-700 rounded-full px-10 py-2"
            onClick={handleNext}
            disabled={!selectedAsset}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AssetsSelectionPage;
