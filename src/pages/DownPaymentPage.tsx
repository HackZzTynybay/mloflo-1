
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";

const DownPaymentPage = () => {
  const navigate = useNavigate();
  const [paymentType, setPaymentType] = useState<'dollars' | 'percentage'>('dollars');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/purchase-price'); // Navigate to the next page in your flow
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, '');
    setAmount(value);
  };

  const togglePaymentType = () => {
    setPaymentType(paymentType === 'dollars' ? 'percentage' : 'dollars');
    setAmount('');
  };

  const formattedAmount = amount ? 
    paymentType === 'dollars' 
      ? `$${parseFloat(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      : `${parseFloat(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`
    : paymentType === 'dollars' ? '$0.00' : '0.00%';

  return (
    <Layout 
      currentStep={2} 
      totalSteps={10} 
      title="Loan & Property"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          How much are you putting down as down payment?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <Label htmlFor="downPayment">Down Payment</Label>
            <div className="flex mt-1">
              <button
                type="button"
                className={`h-10 px-3 flex items-center justify-center ${paymentType === 'dollars' ? 'bg-mloflo-blue text-white' : 'bg-gray-200 text-gray-700'} rounded-l-md`}
                onClick={() => setPaymentType('dollars')}
              >
                $
              </button>
              <button
                type="button"
                className={`h-10 px-3 flex items-center justify-center ${paymentType === 'percentage' ? 'bg-mloflo-blue text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setPaymentType('percentage')}
              >
                %
              </button>
              <Input
                id="downPayment"
                placeholder={paymentType === 'dollars' ? "$0.00" : "0.00%"}
                value={formattedAmount}
                onChange={handleAmountChange}
                className="rounded-l-none"
              />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/purchase-price')}
            >
              Back
            </Button>
            
            <Button 
              type="submit"
              className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default DownPaymentPage;
