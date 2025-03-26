
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import SelectionCard from '../components/SelectionCard';
import YesIcon from '../components/icons/YesIcon';
import NoIcon from '../components/icons/NoIcon';
import { Button } from '@/components/ui/button';

const AdditionalPropertySubjectPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === 'yes') {
      navigate('/property-details');
    } else {
      // If user selects "No", navigate to the next logical page
      navigate('/personal-info'); // Adjust as needed for your flow
    }
  };

  return (
    <Layout 
      currentStep={6} 
      totalSteps={10} 
      title="Real Estate"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Do you have any additional real estate properties other than the subject property?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-12">
          <SelectionCard
            title="Yes"
            icon={<YesIcon selected={selectedOption === 'yes'} />}
            selected={selectedOption === 'yes'}
            onClick={() => handleSelect('yes')}
          />
          <SelectionCard
            title="No"
            icon={<NoIcon selected={selectedOption === 'no'} />}
            selected={selectedOption === 'no'}
            onClick={() => handleSelect('no')}
          />
        </div>

        <div className="flex justify-center mt-auto">
          <Button 
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/additional-property-primary')}
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

export default AdditionalPropertySubjectPage;
