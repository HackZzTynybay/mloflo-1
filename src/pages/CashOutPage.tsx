
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import SelectionCard from '../components/SelectionCard';
import YesIcon from '../components/icons/YesIcon';
import NoIcon from '../components/icons/NoIcon';
import { Button } from '@/components/ui/button';

const CashOutPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      if (selectedOption === 'yes') {
        navigate('/cash-out-amount');
      } else {
        navigate('/refinance-property-address');
      }
    }
  };

  return (
    <Layout 
      currentStep={11} 
      totalSteps={15} 
      title="Loan & Property"
    >
      <div className="flex flex-col items-center justify-between flex-grow w-full max-w-3xl mx-auto py-10">
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-12 text-center">
            Are you looking to take cash out?
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-2xl mx-auto mb-12">
            <SelectionCard 
              title="Yes" 
              icon={<YesIcon />}
              selected={selectedOption === 'yes'}
              onClick={() => handleSelect('yes')}
            />

            <SelectionCard 
              title="No" 
              icon={<NoIcon />}
              selected={selectedOption === 'no'}
              onClick={() => handleSelect('no')}
            />
          </div>
        </div>

        <div className="flex justify-center mt-14 mb-4 w-full">
          <Button 
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/down-payment')}
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

export default CashOutPage;
