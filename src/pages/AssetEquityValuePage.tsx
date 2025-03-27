
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AssetEquityValuePage = () => {
  const navigate = useNavigate();
  const [equityType, setEquityType] = useState('');
  const [cashValue, setCashValue] = useState('');

  const handleNext = () => {
    if (equityType && cashValue.trim()) {
      navigate('/real-estate-additional');
    }
  };

  const handleBack = () => {
    navigate('/asset-cash-value');
  };

  return (
    <Layout 
      currentStep={5} 
      totalSteps={10}
      title="Assets" 
    >
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-10 text-center">
          What is the cash or market value of your equity?
        </h1>
        
        <div className="w-full max-w-md mx-auto space-y-6">
          <div>
            <label htmlFor="equityType" className="block text-sm font-medium mb-2">
              Equity Type
            </label>
            <Select value={equityType} onValueChange={setEquityType}>
              <SelectTrigger>
                <SelectValue placeholder="Equity Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lot-equity">Lot Equity</SelectItem>
                <SelectItem value="sweat-equity">Sweat Equity</SelectItem>
                <SelectItem value="trade-equity">Trade Equity</SelectItem>
                <SelectItem value="gift-equity">Gift of Equity</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="cashValue" className="block text-sm font-medium mb-2">
              Cash or Market value
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
          
          <Button 
            type="button"
            variant="outline" 
            className="flex items-center justify-center gap-2 text-mloflo-blue border-mloflo-blue hover:bg-blue-50 w-full"
          >
            <span className="text-lg">+</span> Add More
          </Button>
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
            disabled={!equityType || !cashValue.trim()}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AssetEquityValuePage;
