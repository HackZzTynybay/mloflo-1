
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import SelectionCard from '../components/SelectionCard';
import PurchaseIcon from '../components/icons/PurchaseIcon';
import RefinanceIcon from '../components/icons/RefinanceIcon';
import { Button } from '@/components/ui/button';

const LoanTypePage = () => {
  const navigate = useNavigate();
  const [selectedLoanType, setSelectedLoanType] = useState<string | null>(null);

  const handleSelect = (type: string) => {
    setSelectedLoanType(type);
  };

  const handleNext = () => {
    if (selectedLoanType) {
      navigate('/realtor');
    }
  };

  return (
    <Layout 
      currentStep={3} 
      totalSteps={10} 
      title="Loan & Property"
    >
      <div className="flex flex-col items-center justify-between flex-grow w-full max-w-3xl mx-auto py-8">
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-10 text-center">
            What type of home loan are you looking for?
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
            <SelectionCard 
              title="Purchase" 
              icon={<PurchaseIcon selected={false} />}
              selected={selectedLoanType === 'purchase'}
              onClick={() => handleSelect('purchase')}
            />

            <SelectionCard 
              title="Refinance" 
              icon={<RefinanceIcon selected={false} />}
              selected={selectedLoanType === 'refinance'}
              onClick={() => handleSelect('refinance')}
            />
          </div>
        </div>

        <div className="flex justify-center mt-6 mb-4 w-full">
          <Button 
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/co-borrower')}
          >
            Back
          </Button>
          
          {selectedLoanType && (
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

export default LoanTypePage;
