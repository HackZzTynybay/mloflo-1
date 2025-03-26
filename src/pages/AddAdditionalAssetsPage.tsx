
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import YesIcon from '@/components/icons/YesIcon';
import NoIcon from '@/components/icons/NoIcon';
import SelectionCard from '@/components/SelectionCard';

const AddAdditionalAssetsPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === 'yes') {
      navigate('/choose-other-assets');
    } else {
      navigate('/other-assets');
    }
  };

  return (
    <Layout 
      currentStep={5} 
      totalSteps={10} 
      title="Assets"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Would you like to add additional assets?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-2xl mb-12">
          <SelectionCard
            title="Yes"
            icon={<YesIcon selected={selectedOption === 'yes'} />}
            selected={selectedOption === 'yes'}
            onClick={() => handleOptionSelect('yes')}
          />
          <SelectionCard
            title="No"
            icon={<NoIcon selected={selectedOption === 'no'} />}
            selected={selectedOption === 'no'}
            onClick={() => handleOptionSelect('no')}
          />
        </div>

        <div className="flex justify-center mt-14">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/asset-detail/checking-savings')}
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

export default AddAdditionalAssetsPage;
