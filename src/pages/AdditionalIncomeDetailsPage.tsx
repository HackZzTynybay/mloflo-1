
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";

const AdditionalIncomeDetailsPage = () => {
  const navigate = useNavigate();
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [incomeSource, setIncomeSource] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/assets-information');
  };

  return (
    <Layout 
      currentStep={4} 
      totalSteps={10} 
      title="Income Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Tell us about your additional income
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="mb-4">
            <Label htmlFor="incomeSource">Income Source</Label>
            <div className="relative mt-1">
              <select
                id="incomeSource"
                value={incomeSource}
                onChange={(e) => setIncomeSource(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              >
                <option value="" disabled>Select Income Source</option>
                <option value="alimony">Alimony</option>
                <option value="childSupport">Child Support</option>
                <option value="investment">Investment</option>
                <option value="rental">Rental Income</option>
                <option value="retirement">Retirement</option>
                <option value="socialSecurity">Social Security</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="monthlyIncome">Monthly Amount</Label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <Input
                id="monthlyIncome"
                placeholder="0.00"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                className="pl-7"
                type="number"
                step="0.01"
              />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/additional-income')}
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

export default AdditionalIncomeDetailsPage;
