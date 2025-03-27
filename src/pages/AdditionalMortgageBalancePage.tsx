
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { AlertCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const AdditionalMortgageBalancePage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [balance, setBalance] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const validateBalance = (value: string): string => {
    if (!value.trim() || parseFloat(value) === 0) {
      return 'Mortgage balance is required';
    }
    if (parseFloat(value) < 0) {
      return 'Mortgage balance cannot be negative';
    }
    return '';
  };

  const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, '');
    
    // Prevent multiple decimal points
    if ((value.match(/\./g) || []).length > 1) return;
    
    // Prevent more than 2 decimal places
    const parts = value.split('.');
    if (parts.length > 1 && parts[1].length > 2) return;
    
    setBalance(value);
    
    if (touched) {
      setError(validateBalance(value));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validateBalance(balance));
  };

  const formattedBalance = balance ? `$${parseFloat(balance).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '$0.00';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateBalance(balance);
    setError(validationError);
    setTouched(true);
    
    if (!validationError) {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate('/property-value');
        setIsSubmitting(false);
      }, 500);
    } else {
      toast({
        title: "Please fix the error",
        description: "Please enter a valid mortgage balance",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout 
      currentStep={14} 
      totalSteps={15} 
      title="Loan & Property"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          What is the remaining mortgage loan balance on this loan?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <Label htmlFor="balance" className="flex items-center">
              Remaining Mortgage Loan Balance <span className="text-red-500 ml-1">*</span>
            </Label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <Input
                id="balance"
                placeholder="0.00"
                value={balance}
                onChange={handleBalanceChange}
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
            {!error && balance && (
              <p className="text-sm text-gray-500 mt-1">
                {formattedBalance}
              </p>
            )}
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/additional-mortgage')}
              disabled={isSubmitting}
            >
              Back
            </Button>
            
            <Button 
              type="submit"
              className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Next"}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AdditionalMortgageBalancePage;
