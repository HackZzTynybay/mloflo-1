
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const RacePage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === 'asian') {
      navigate('/asian-details');
    } else {
      navigate('/property-declarations');
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
          What is your race?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <Card 
            className={`flex flex-col items-center justify-center p-6 h-36 cursor-pointer border ${
              selectedOption === 'american-indian' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleSelect('american-indian')}
          >
            <p className="text-center">American Indian or Alaska Native</p>
          </Card>
          
          <Card 
            className={`flex flex-col items-center justify-center p-6 h-36 cursor-pointer border ${
              selectedOption === 'asian' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleSelect('asian')}
          >
            <p className="text-center">Asian</p>
          </Card>
          
          <Card 
            className={`flex flex-col items-center justify-center p-6 h-36 cursor-pointer border ${
              selectedOption === 'black' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleSelect('black')}
          >
            <p className="text-center">Black or African American</p>
          </Card>
          
          <Card 
            className={`flex flex-col items-center justify-center p-6 h-36 cursor-pointer border ${
              selectedOption === 'native-hawaiian' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleSelect('native-hawaiian')}
          >
            <p className="text-center">Native Hawaiian or Other Pacific Islander</p>
          </Card>
          
          <Card 
            className={`flex flex-col items-center justify-center p-6 h-36 cursor-pointer border ${
              selectedOption === 'white' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleSelect('white')}
          >
            <p className="text-center">White</p>
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
            onClick={() => navigate('/sex')}
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

export default RacePage;
