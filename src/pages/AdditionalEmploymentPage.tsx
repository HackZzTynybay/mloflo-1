
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import ThumbUpIcon from '@/components/icons/ThumbUpIcon';
import ThumbDownIcon from '@/components/icons/ThumbDownIcon';
import SelectionCard from '@/components/SelectionCard';

const AdditionalEmploymentPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === 'yes') {
      navigate('/additional-employment-details');
    } else {
      navigate('/additional-income');
    }
  };

  return (
    <Layout 
      currentStep={4} 
      totalSteps={10} 
      title="Employment"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Would you like to add any additional employment?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl mb-10">
          <SelectionCard
            title="Yes"
            icon={<ThumbUpIcon selected={selectedOption === 'yes'} />}
            selected={selectedOption === 'yes'}
            onClick={() => handleOptionSelect('yes')}
          />
          <SelectionCard
            title="No"
            icon={<ThumbDownIcon selected={selectedOption === 'no'} />}
            selected={selectedOption === 'no'}
            onClick={() => handleOptionSelect('no')}
          />
        </div>

        <div className="flex justify-center mt-10">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/employment-details')}
          >
            Back
          </Button>
          
          <Button 
            type="button"
            className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AdditionalEmploymentPage;
