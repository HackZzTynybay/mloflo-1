
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle } from 'lucide-react';

const AssetCashValuePage = () => {
  const navigate = useNavigate();
  const [cashValue, setCashValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

  const validateCashValue = (value: string) => {
    if (!value.trim()) {
      return 'Cash value is required';
    }
    
    // Check if it's a valid currency format
    const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ''));
    if (isNaN(numericValue)) {
      return 'Please enter a valid amount';
    }
    
    if (numericValue <= 0) {
      return 'Amount must be greater than zero';
    }
    
    return '';
  };

  const handleCashValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCashValue(value);
    
    if (touched) {
      setError(validateCashValue(value));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validateCashValue(cashValue));
  };

  const handleNext = () => {
    const validationError = validateCashValue(cashValue);
    setError(validationError);
    setTouched(true);
    
    if (!validationError) {
      navigate('/asset-equity-value');
    }
  };

  const handleBack = () => {
    navigate('/assets-selection');
  };

  // Format the cash value input with currency symbol if it's a number
  const formatCashValue = () => {
    const numericValue = parseFloat(cashValue.replace(/[^0-9.-]+/g, ''));
    if (!isNaN(numericValue)) {
      return `$${numericValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return cashValue;
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
            <Label htmlFor="cashValue" className="block text-sm font-medium mb-2">
              Cash or Market Value
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <Input 
                id="cashValue"
                type="text" 
                placeholder="0.00"
                value={cashValue}
                onChange={handleCashValueChange}
                onBlur={handleBlur}
                className={`w-full pl-8 ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              />
            </div>
            {error && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{error}</span>
              </div>
            )}
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
            disabled={!!error && touched}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AssetCashValuePage;
