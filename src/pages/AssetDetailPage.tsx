import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AssetDetailPage = () => {
  const navigate = useNavigate();
  const { assetId } = useParams();
  
  const [accountType, setAccountType] = useState<string>('');
  const [financialInstitution, setFinancialInstitution] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [value, setValue] = useState<string>('');

  // Get title based on the assetId
  const getAssetTitle = () => {
    switch (assetId) {
      case 'checking-savings':
        return 'Checking/Savings';
      case 'money-market':
        return 'Money Market';
      case 'certificate-of-deposit':
        return 'Certificate of Deposit';
      case 'mutual-fund':
        return 'Mutual Fund';
      case 'stocks':
        return 'Stocks';
      case 'bonds':
        return 'Bonds';
      case 'retirement':
        return 'Retirement';
      case 'bridge-loan-proceeds':
        return 'Bridge Loan Proceeds';
      case 'individual-development-account':
        return 'Individual Development Account';
      case 'trust-account':
        return 'Trust Account';
      case 'cash-value-of-life-insurance':
        return 'Cash Value of Life Insurance';
      default:
        return 'Asset';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/add-additional-assets');
  };

  const handleAddAnother = () => {
    // Reset form and keep the user on the same page
    setAccountType('');
    setFinancialInstitution('');
    setAccountNumber('');
    setValue('');
  };

  return (
    <Layout 
      currentStep={5} 
      totalSteps={10} 
      title="Assets"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Provide details of your {getAssetTitle()} account.
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="mb-4">
            <Label htmlFor="accountType">Account Type</Label>
            <Select 
              value={accountType} 
              onValueChange={setAccountType}
            >
              <SelectTrigger id="accountType" className="w-full">
                <SelectValue placeholder="Account Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="checking">Checking</SelectItem>
                <SelectItem value="savings">Savings</SelectItem>
                <SelectItem value="money-market">Money Market</SelectItem>
                <SelectItem value="certificate-of-deposit">Certificate of Deposit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <Label htmlFor="financialInstitution">Financial Institution</Label>
            <Input
              id="financialInstitution"
              placeholder="Financial Institution"
              value={financialInstitution}
              onChange={(e) => setFinancialInstitution(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="accountNumber">Account Number</Label>
            <Input
              id="accountNumber"
              placeholder="Account Number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="value">Cash or Market Value</Label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <Input
                id="value"
                placeholder="0.00"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="pl-7"
                type="number"
                step="0.01"
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <Button 
              type="button"
              variant="outline" 
              className="bg-blue-50 text-mloflo-blue hover:bg-blue-100 border-none rounded-full px-10 py-2 flex items-center"
              onClick={handleAddAnother}
            >
              <span className="mr-2">+</span> Add More {getAssetTitle()} Account
            </Button>
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/assets')}
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

export default AssetDetailPage;
