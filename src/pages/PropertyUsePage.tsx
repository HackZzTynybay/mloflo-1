
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import SelectionCard from '../components/SelectionCard';
import PrimaryResidenceIcon from '../components/icons/PrimaryResidenceIcon';
import SecondaryResidenceIcon from '../components/icons/SecondaryResidenceIcon';
import InvestmentPropertyIcon from '../components/icons/InvestmentPropertyIcon';
import { Button } from '@/components/ui/button';

const PropertyUsePage = () => {
  const navigate = useNavigate();
  const [selectedUse, setSelectedUse] = useState<string | null>(null);

  const handleSelect = (use: string) => {
    setSelectedUse(use);
  };

  const handleNext = () => {
    if (selectedUse) {
      navigate('/property-found');
    }
  };

  return (
    <Layout 
      currentStep={7} 
      totalSteps={10} 
      title="Loan & Property"
    >
      <div className="flex flex-col items-center justify-between flex-grow w-full max-w-4xl mx-auto py-8">
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-10 text-center">
            How do you plan to occupy the property?
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
            <SelectionCard 
              title="Primary Residence" 
              icon={<PrimaryResidenceIcon />}
              selected={selectedUse === 'primary'}
              onClick={() => handleSelect('primary')}
            />

            <SelectionCard 
              title="Secondary Residence" 
              icon={<SecondaryResidenceIcon />}
              selected={selectedUse === 'secondary'}
              onClick={() => handleSelect('secondary')}
            />

            <SelectionCard 
              title="Investment Property" 
              icon={<InvestmentPropertyIcon />}
              selected={selectedUse === 'investment'}
              onClick={() => handleSelect('investment')}
            />
          </div>
        </div>

        <div className="flex justify-center mt-auto mb-4 w-full">
          <Button 
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/property-type')}
          >
            Back
          </Button>
          
          {selectedUse && (
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

export default PropertyUsePage;
