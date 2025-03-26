
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';

const MilitaryServiceDetailsPage = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleNext = () => {
    navigate('/service-expiration');
  };

  const options = [
    { id: 'active', label: 'Serving on Active Duty' },
    { id: 'retired', label: 'Retired/ Discharged/ Seperated' },
    { id: 'spouse', label: 'Surviving Spouse' },
    { id: 'reserve', label: 'Non-active member of the Reserve of National Guard' }
  ];

  return (
    <Layout 
      currentStep={3} 
      totalSteps={10} 
      title="Personal Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Thank you for your service! Please select all that apply.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
          {options.map(option => (
            <div 
              key={option.id}
              className={`border rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition-all cursor-pointer ${selectedOptions.includes(option.id) ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200'}`}
              onClick={() => handleOptionClick(option.id)}
            >
              <h3 className="text-lg font-medium text-center">{option.label}</h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-auto">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/military-service')}
          >
            Back
          </Button>
          
          <Button 
            className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default MilitaryServiceDetailsPage;
