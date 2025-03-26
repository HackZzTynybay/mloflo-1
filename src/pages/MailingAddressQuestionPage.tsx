
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import ThumbUpIcon from '@/components/icons/ThumbUpIcon';
import ThumbDownIcon from '@/components/icons/ThumbDownIcon';
import SelectionCard from '@/components/SelectionCard';

const MailingAddressQuestionPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      navigate('/marital-status');
    }
  };

  return (
    <Layout 
      currentStep={3} 
      totalSteps={10} 
      title="Personal Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-10">
        <h1 className="text-2xl font-bold mb-12 text-center">
          Is your mailing address same as current?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-2xl mb-12">
          <SelectionCard
            title="Yes"
            icon={<ThumbUpIcon selected={selectedOption === 'yes'} />}
            selected={selectedOption === 'yes'}
            onClick={() => handleOptionClick('yes')}
          />
          <SelectionCard
            title="No"
            icon={<ThumbDownIcon selected={selectedOption === 'no'} />}
            selected={selectedOption === 'no'}
            onClick={() => handleOptionClick('no')}
          />
        </div>

        <div className="flex justify-center mt-14">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/previous-address')}
          >
            Back
          </Button>
          
          {selectedOption && (
            <Button 
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

export default MailingAddressQuestionPage;
