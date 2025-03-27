
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { AlertCircle } from 'lucide-react';

const CashOutAmountPage = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [formattedAmount, setFormattedAmount] = useState('$0.00');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (amount) {
      const numericValue = parseFloat(amount);
      if (!isNaN(numericValue)) {
        setFormattedAmount(`$${numericValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
      } else {
        setFormattedAmount('$0.00');
      }
    } else {
      setFormattedAmount('$0.00');
    }
  }, [amount]);

  const validateAmount = (value: string) => {
    if (!value.trim()) {
      return 'Cash out amount is required';
    }
    
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      return 'Please enter a valid amount';
    }
    
    if (numericValue <= 0) {
      return 'Amount must be greater than zero';
    }
    
    if (numericValue > 1000000) {
      return 'Amount exceeds maximum limit of $1,000,000';
    }
    
    return '';
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, '');
    setAmount(value);
    
    if (touched) {
      setError(validateAmount(value));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validateAmount(amount));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateAmount(amount);
    setError(validationError);
    setTouched(true);
    
    if (!validationError) {
      navigate('/refinance-property-address');
    }
  };

  return (
    <Layout 
      currentStep={11} 
      totalSteps={15} 
      title="Loan & Property"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          How much cash would you like to receive?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <Label htmlFor="cashOut">Cash Out</Label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <Input
                id="cashOut"
                placeholder="0.00"
                value={amount}
                onChange={handleAmountChange}
                onBlur={handleBlur}
                className={`pl-8 ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              />
            </div>
            {error && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{error}</span>
              </div>
            )}
            {!error && amount && (
              <p className="text-sm text-gray-500 mt-1">
                {formattedAmount}
              </p>
            )}
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/cash-out')}
            >
              Back
            </Button>
            
            <Button 
              type="submit"
              className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
              disabled={!!error && touched}
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CashOutAmountPage;
