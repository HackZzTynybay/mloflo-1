
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const EthnicityPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === 'hispanic') {
      navigate('/hispanic-details');
    } else {
      navigate('/sex');
    }
  };

  return (
    <Layout 
      currentStep={7} 
      totalSteps={10} 
      title="Demographic"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          What is your ethnicity?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <Card 
            className={`flex flex-col items-center justify-center p-6 h-36 cursor-pointer border ${
              selectedOption === 'hispanic' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleSelect('hispanic')}
          >
            <p className="text-center">Hispanic or Latino</p>
          </Card>
          
          <Card 
            className={`flex flex-col items-center justify-center p-6 h-36 cursor-pointer border ${
              selectedOption === 'not-hispanic' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleSelect('not-hispanic')}
          >
            <p className="text-center">Not Hispanic or Latino</p>
          </Card>
          
          <Card 
            className={`flex flex-col items-center justify-center p-6 h-36 cursor-pointer border ${
              selectedOption === 'not-disclose' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleSelect('not-disclose')}
          >
            <p className="text-center">I do not wish to provide this information</p>
          </Card>
        </div>

        <div className="flex justify-center mt-auto pt-10">
          <Button 
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/property-details')}
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

export default EthnicityPage;
