
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AssetCashValuePage = () => {
  const navigate = useNavigate();
  const [cashValue, setCashValue] = useState('');

  const handleNext = () => {
    if (cashValue.trim()) {
      navigate('/asset-equity-value');
    }
  };

  const handleBack = () => {
    navigate('/assets-selection');
  };

  return (
    <Layout 
      currentStep={5} 
      totalSteps={10}
      title="Assets" 
    >
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-10 text-center">
          What is the cash or market value of other?
        </h1>
        
        <div className="w-full max-w-md mx-auto">
          <div className="mb-6">
            <label htmlFor="cashValue" className="block text-sm font-medium mb-2">
              Cash or Market Value
            </label>
            <Input 
              id="cashValue"
              type="text" 
              placeholder="Cash or Market Value"
              value={cashValue}
              onChange={(e) => setCashValue(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex justify-center mt-10 gap-4">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={handleBack}
          >
            Back
          </Button>
          
          <Button 
            type="button"
            className="bg-mloflo-blue hover:bg-blue-700 rounded-full px-10 py-2"
            onClick={handleNext}
            disabled={!cashValue.trim()}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AssetCashValuePage;
