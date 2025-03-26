
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const AsianDetailsPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    navigate('/property-declarations');
  };

  return (
    <Layout 
      currentStep={7} 
      totalSteps={10} 
      title="Demographic"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Asian
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <Card 
            className={`flex flex-col items-center justify-center p-6 h-36 cursor-pointer border ${
              selectedOption === 'asian-indian' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleSelect('asian-indian')}
          >
            <p className="text-center">Asian Indian</p>
          </Card>
          
          <Card 
            className={`flex flex-col items-center justify-center p-6 h-36 cursor-pointer border ${
              selectedOption === 'chinese' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleSelect('chinese')}
          >
            <p className="text-center">Chinese</p>
          </Card>
          
          <Card 
            className={`flex flex-col items-center justify-center p-6 h-36 cursor-pointer border ${
              selectedOption === 'filipino' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleSelect('filipino')}
          >
            <p className="text-center">Filipino</p>
          </Card>
          
          <Card 
            className={`flex flex-col items-center justify-center p-6 h-36 cursor-pointer border ${
              selectedOption === 'korean' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleSelect('korean')}
          >
            <p className="text-center">Korean</p>
          </Card>
          
          <Card 
            className={`flex flex-col items-center justify-center p-6 h-36 cursor-pointer border ${
              selectedOption === 'vietnamese' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleSelect('vietnamese')}
          >
            <p className="text-center">Vietnamese</p>
          </Card>
          
          <Card 
            className={`flex flex-col items-center justify-center p-6 h-36 cursor-pointer border ${
              selectedOption === 'other-asian' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleSelect('other-asian')}
          >
            <p className="text-center">Other Asian</p>
          </Card>
          
          <Card 
            className={`flex flex-col items-center justify-center p-6 h-36 cursor-pointer border ${
              selectedOption === 'japanese' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleSelect('japanese')}
          >
            <p className="text-center">Japanese</p>
          </Card>
        </div>

        <div className="flex justify-center mt-auto pt-10">
          <Button 
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/race')}
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

export default AsianDetailsPage;
