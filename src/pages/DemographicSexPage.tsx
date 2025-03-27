
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import SelectionCard from '@/components/SelectionCard';

const DemographicSexPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    navigate('/demographic-race');
  };

  const handleBack = () => {
    navigate('/demographic-ethnicity');
  };

  return (
    <Layout 
      currentStep={7} 
      totalSteps={10}
      title="Demographic" 
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Sex
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-12">
          <SelectionCard
            title="Male"
            selected={selectedOption === 'male'}
            onClick={() => handleOptionSelect('male')}
          />
          <SelectionCard
            title="Female"
            selected={selectedOption === 'female'}
            onClick={() => handleOptionSelect('female')}
          />
          <SelectionCard
            title="I do not wish to provide this information"
            selected={selectedOption === 'no-info'}
            onClick={() => handleOptionSelect('no-info')}
          />
        </div>

        <div className="flex justify-center mt-14">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={handleBack}
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

export default DemographicSexPage;
