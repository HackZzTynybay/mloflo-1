
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import OwnIcon from '../components/icons/OwnIcon';
import RentIcon from '../components/icons/RentIcon';
import RentFreeIcon from '../components/icons/RentFreeIcon';

const PropertyRelationshipPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      navigate('/mortgage-question');
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
          What is your relationship with this property?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
          <div 
            className={`border rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition-all cursor-pointer ${selectedOption === 'own' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200'}`}
            onClick={() => handleOptionClick('own')}
          >
            <OwnIcon />
            <h3 className="text-lg font-medium mt-4">Own</h3>
          </div>

          <div 
            className={`border rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition-all cursor-pointer ${selectedOption === 'rent' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200'}`}
            onClick={() => handleOptionClick('rent')}
          >
            <RentIcon />
            <h3 className="text-lg font-medium mt-4">Rent</h3>
          </div>

          <div 
            className={`border rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition-all cursor-pointer ${selectedOption === 'rentfree' ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200'}`}
            onClick={() => handleOptionClick('rentfree')}
          >
            <RentFreeIcon />
            <h3 className="text-lg font-medium mt-4">Rent-free</h3>
          </div>
        </div>

        <div className="flex justify-center mt-auto">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/address-duration')}
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

export default PropertyRelationshipPage;
