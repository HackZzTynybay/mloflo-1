
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { AlertCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const DownPaymentPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentType, setPaymentType] = useState<'dollars' | 'percentage'>('dollars');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const validateAmount = (value: string): string => {
    if (!value.trim() || parseFloat(value) === 0) {
      return 'Down payment amount is required';
    }
    if (parseFloat(value) < 0) {
      return 'Down payment cannot be negative';
    }
    if (paymentType === 'percentage' && parseFloat(value) > 100) {
      return 'Percentage cannot exceed 100%';
    }
    return '';
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, '');
    
    // Prevent multiple decimal points
    if ((value.match(/\./g) || []).length > 1) return;
    
    // Prevent more than 2 decimal places
    const parts = value.split('.');
    if (parts.length > 1 && parts[1].length > 2) return;
    
    setAmount(value);
    
    if (touched) {
      setError(validateAmount(value));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validateAmount(amount));
  };

  const togglePaymentType = (type: 'dollars' | 'percentage') => {
    setPaymentType(type);
    if (touched && amount) {
      setError(validateAmount(amount));
    }
  };

  const formattedAmount = amount ? 
    paymentType === 'dollars' 
      ? `$${parseFloat(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      : `${parseFloat(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`
    : paymentType === 'dollars' ? '$0.00' : '0.00%';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateAmount(amount);
    setError(validationError);
    setTouched(true);
    
    if (!validationError) {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate('/cash-out');
        setIsSubmitting(false);
      }, 500);
    } else {
      toast({
        title: "Please fix the error",
        description: "Please enter a valid down payment amount",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout 
      currentStep={10} 
      totalSteps={15} 
      title="Loan & Property"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          How much are you putting down as down payment?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <Label htmlFor="downPayment" className="flex items-center">
              Down Payment <span className="text-red-500 ml-1">*</span>
            </Label>
            <div className="flex mt-1">
              <button
                type="button"
                className={`h-10 px-3 flex items-center justify-center ${paymentType === 'dollars' ? 'bg-mloflo-blue text-white' : 'bg-gray-200 text-gray-700'} rounded-l-md`}
                onClick={() => togglePaymentType('dollars')}
              >
                $
              </button>
              <button
                type="button"
                className={`h-10 px-3 flex items-center justify-center ${paymentType === 'percentage' ? 'bg-mloflo-blue text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => togglePaymentType('percentage')}
              >
                %
              </button>
              <Input
                id="downPayment"
                placeholder={paymentType === 'dollars' ? "$0.00" : "0.00%"}
                value={amount}
                onChange={handleAmountChange}
                onBlur={handleBlur}
                className={`rounded-l-none ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
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
              onClick={() => navigate('/purchase-price')}
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

export default DownPaymentPage;
