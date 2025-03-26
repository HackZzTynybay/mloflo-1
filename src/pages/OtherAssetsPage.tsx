
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import SelectionCard from '@/components/SelectionCard';

const OtherAssetsPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === 'yes') {
      // If they have other assets, we'd navigate to a page to capture those details
      // For now, let's just go to declarations page
      navigate('/declarations-page');
    } else {
      navigate('/declarations-page');
    }
  };

  return (
    <Layout 
      currentStep={5} 
      totalSteps={10} 
      title="Assets"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Do you have any other assets/credits?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-2xl mb-12">
          <SelectionCard
            title="Yes"
            icon={
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 87.5942L33 73.6851M38 70.5942L33 73.6851M33 73.6851C30.6667 77.3215 27.4 86.5942 33 94.5942C40 104.594 47 109.317 57 104.317C53.3333 104.317 43.2 102.794 40 95.5942C36.8 88.3942 40 77.9882 42 73.6851C43.6667 70.6548 47.4 63.7942 49 60.5942C50.5729 57.4484 57.1069 44.3803 60.3362 37.9217C60.4468 37.7005 60.5299 37.4733 60.6205 37.2432C61.1317 35.9449 62.7239 33.5503 66 32.0942C69.6 30.4942 70.1667 24.0942 70 21.0942C70 19.9275 70.5 17.0942 72.5 15.0942C74.5 13.0942 73.3333 7.92754 72.5 5.59421C72.1667 4.42754 72.5 2.19421 76.5 2.59421C79.7078 2.91499 82.2724 6.68693 83.6782 9.62965C84.2851 10.8999 84.4734 12.3165 84.386 13.7216C84.1196 18.0045 83.5108 24.561 82.5 27.5938C81.572 30.3779 84.7703 30.7498 87.6553 30.467C89.2165 30.314 90.7971 30.2163 92.3266 30.5645C96.4079 31.4935 102.009 33.2824 103 35.5938C104.152 38.2816 106.189 41.8541 104.128 43.5938M79.5 43.5938C84.5 44.0938 95.8 44.9938 101 44.5938C102.508 44.4777 103.505 44.1194 104.128 43.5938M104.128 43.5938C107.085 45.9271 111.8 51.8938 107 57.0938C106.24 57.9169 105.261 58.5588 104.128 59.0496M82.5 58.5938C87.6905 59.9966 98.0999 61.6592 104.128 59.0496M104.128 59.0496C106.418 60.898 110.2 65.7946 107 70.5942C106.432 71.4463 105.509 72.1009 104.336 72.5938M82.5 72.5938C88.1202 73.6904 98.9041 74.8773 104.336 72.5938M104.336 72.5938C105.891 75.2603 107.1 81.2934 99.5 84.0938C94.3521 85.9906 91.2077 86.9238 89.5073 87.3285C88.5461 87.5573 87.5936 87.96 86.8591 88.621L78.9464 95.7421C78.318 96.3076 77.6253 96.7965 76.8587 97.153C72.4194 99.2173 64.9574 101.594 62.5 101.594C58.5 101.594 47.8333 112.094 42 118.094" stroke="#344AD5" stroke-width="2"/>
              </svg>
            }
            selected={selectedOption === 'yes'}
            onClick={() => handleOptionSelect('yes')}
          />
          <SelectionCard
            title="No"
            icon={
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M109.5 32.4058L87 46.3149M82 49.4058L87 46.3149M87 46.3149C89.3333 42.6785 92.6 33.4058 87 25.4058C80 15.4058 73 10.6828 63 15.6828C66.6667 15.6828 76.8 17.2058 80 24.4058C83.2 31.6058 80 42.0118 78 46.3149C76.3333 49.3452 72.6 56.2058 71 59.4058C69.4271 62.5516 62.8931 75.6197 59.6638 82.0783C59.5532 82.2995 59.4701 82.5267 59.3795 82.7568C58.8683 84.0551 57.2761 86.4497 54 87.9058C50.4 89.5058 49.8333 95.9058 50 98.9058C50 100.072 49.5 102.906 47.5 104.906C45.5 106.906 46.6667 112.072 47.5 114.406C47.8333 115.572 47.5 117.806 43.5 117.406C40.2922 117.085 37.7276 113.313 36.3218 110.37C35.7149 109.1 35.5266 107.683 35.614 106.278C35.8804 101.996 36.4892 95.439 37.5 92.4062C38.428 89.6221 35.2297 89.2502 32.3447 89.533C30.7835 89.686 29.2029 89.7837 27.6734 89.4355C23.5921 88.5065 17.9906 86.7176 17 84.4062C15.8481 81.7184 13.8115 78.1459 15.8723 76.4062M40.5 76.4062C35.5 75.9062 24.2 75.0062 19 75.4062C17.4917 75.5223 16.4949 75.8806 15.8723 76.4062M15.8723 76.4062C12.9148 74.0729 8.2 68.1062 13 62.9062C13.7599 62.0831 14.7386 61.4412 15.8723 60.9504M37.5 61.4062C32.3095 60.0034 21.9001 58.3408 15.8723 60.9504M15.8723 60.9504C13.5815 59.102 9.8 54.2054 13 49.4058C13.5681 48.5537 14.4913 47.8991 15.6638 47.4062M37.5 47.4062C31.8798 46.3096 21.0959 45.1227 15.6638 47.4062M15.6638 47.4062C14.1092 44.7397 12.9 38.7066 20.5 35.9062C25.6479 34.0094 28.7923 33.0762 30.4927 32.6715C31.4539 32.4427 32.4064 32.04 33.1409 31.379L41.0536 24.2579C41.682 23.6924 42.3747 23.2035 43.1413 22.847C47.5806 20.7827 55.0426 18.4062 57.5 18.4062C61.5 18.4062 72.1667 7.90625 78 1.90625" stroke="#344AD5" stroke-width="2"/>
              </svg>
            }
            selected={selectedOption === 'no'}
            onClick={() => handleOptionSelect('no')}
          />
        </div>

        <div className="flex justify-center mt-14">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/add-additional-assets')}
          >
            Back
          </Button>
          
          {selectedOption && (
            <Button 
              type="button"
              className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
              onClick={handleNext}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default OtherAssetsPage;
