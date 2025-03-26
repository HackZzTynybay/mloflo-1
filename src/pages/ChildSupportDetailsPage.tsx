
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ChildSupportDetailsPage = () => {
  const navigate = useNavigate();
  const [monthlyAmount, setMonthlyAmount] = useState('');
  const [yearsRemaining, setYearsRemaining] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/add-more-income-sources');
  };

  return (
    <Layout 
      currentStep={4} 
      totalSteps={10} 
      title="Employment"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-2xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Tell us about your child support income.
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-8">
          <div>
            <Label htmlFor="monthlyAmount">Monthly Amount Received</Label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <Input
                id="monthlyAmount"
                placeholder="0.00"
                type="number"
                step="0.01"
                min="0"
                value={monthlyAmount}
                onChange={(e) => setMonthlyAmount(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="yearsRemaining">Years Remaining</Label>
            <Input
              id="yearsRemaining"
              placeholder="Years Remaining"
              type="number"
              min="0"
              value={yearsRemaining}
              onChange={(e) => setYearsRemaining(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/income-sources')}
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

export default ChildSupportDetailsPage;
