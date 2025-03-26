
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import YesIcon from '../components/icons/YesIcon';
import NoIcon from '../components/icons/NoIcon';

const DependentsQuestionPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      if (selectedOption === 'yes') {
        navigate('/dependents-count');
      } else {
        navigate('/military-service');
      }
    }
  };

  return (
    <Layout 
      currentStep={3} 
      totalSteps={10} 
      title="Personal Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Do you have any dependents?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl mx-auto mb-10">
          <div 
            className={`border rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition-all cursor-pointer ${selectedOption === 'yes' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200'}`}
            onClick={() => handleOptionClick('yes')}
          >
            <YesIcon />
            <h3 className="text-lg font-medium mt-4">Yes</h3>
          </div>

          <div 
            className={`border rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition-all cursor-pointer ${selectedOption === 'no' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200'}`}
            onClick={() => handleOptionClick('no')}
          >
            <NoIcon />
            <h3 className="text-lg font-medium mt-4">No</h3>
          </div>
        </div>

        <div className="flex justify-center mt-auto">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/tax-filing-status')}
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

export default DependentsQuestionPage;
