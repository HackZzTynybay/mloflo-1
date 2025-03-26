
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";

const AssetsInformationPage = () => {
  const navigate = useNavigate();
  const [checkingAccount, setCheckingAccount] = useState('');
  const [savingsAccount, setSavingsAccount] = useState('');
  const [investments, setInvestments] = useState('');
  const [retirementAccounts, setRetirementAccounts] = useState('');
  const [otherAssets, setOtherAssets] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/declarations-page');
  };

  return (
    <Layout 
      currentStep={5} 
      totalSteps={10} 
      title="Financial Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Tell us about your assets
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="mb-4">
            <Label htmlFor="checkingAccount">Checking Account Balance</Label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <Input
                id="checkingAccount"
                placeholder="0.00"
                value={checkingAccount}
                onChange={(e) => setCheckingAccount(e.target.value)}
                className="pl-7"
                type="number"
                step="0.01"
              />
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="savingsAccount">Savings Account Balance</Label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <Input
                id="savingsAccount"
                placeholder="0.00"
                value={savingsAccount}
                onChange={(e) => setSavingsAccount(e.target.value)}
                className="pl-7"
                type="number"
                step="0.01"
              />
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="investments">Investment Account Balance</Label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <Input
                id="investments"
                placeholder="0.00"
                value={investments}
                onChange={(e) => setInvestments(e.target.value)}
                className="pl-7"
                type="number"
                step="0.01"
              />
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="retirementAccounts">Retirement Account Balance</Label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <Input
                id="retirementAccounts"
                placeholder="0.00"
                value={retirementAccounts}
                onChange={(e) => setRetirementAccounts(e.target.value)}
                className="pl-7"
                type="number"
                step="0.01"
              />
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="otherAssets">Other Assets Value</Label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <Input
                id="otherAssets"
                placeholder="0.00"
                value={otherAssets}
                onChange={(e) => setOtherAssets(e.target.value)}
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
              onClick={() => navigate('/additional-income-details')}
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

export default AssetsInformationPage;
