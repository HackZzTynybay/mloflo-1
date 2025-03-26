
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const IncomePage = () => {
  const navigate = useNavigate();
  const [hasIncome, setHasIncome] = useState(true);

  const handleNext = () => {
    navigate('/add-more-income-sources');
  };

  return (
    <Layout 
      currentStep={8} 
      totalSteps={10} 
      title="Income"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Income Information
        </h1>
        
        <Card className="w-full max-w-2xl mb-8">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="income-source" className="block text-sm font-medium mb-1">
                  Income Source
                </label>
                <Input
                  id="income-source"
                  placeholder="Employment"
                  disabled
                />
              </div>
              
              <div>
                <label htmlFor="amount" className="block text-sm font-medium mb-1">
                  Monthly Amount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    className="pl-7"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-6">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/declarations-page')}
          >
            Back
          </Button>
          
          <Button 
            type="button"
            className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default IncomePage;
