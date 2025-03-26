
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin } from 'lucide-react';

const SelfEmploymentDetailsPage = () => {
  const navigate = useNavigate();
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [ownershipShare, setOwnershipShare] = useState<'less' | 'more' | null>(null);
  const [income, setIncome] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/additional-income');
  };

  return (
    <Layout 
      currentStep={4} 
      totalSteps={10} 
      title="Employment"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-2xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Additional self employment.
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <Label htmlFor="businessName">Business Name</Label>
            <Input
              id="businessName"
              placeholder="Business Name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              placeholder="Phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <div className="relative">
              <Input
                id="address"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 pr-10"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <MapPin size={18} />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="ownership">Ownership Share*</Label>
            <div className="flex gap-4 mt-2">
              <Button
                type="button"
                variant={ownershipShare === 'less' ? 'default' : 'outline'}
                className={`w-full ${ownershipShare === 'less' ? 'bg-mloflo-blue' : 'border-gray-300'}`}
                onClick={() => setOwnershipShare('less')}
              >
                Less than 25%
              </Button>
              <Button
                type="button"
                variant={ownershipShare === 'more' ? 'default' : 'outline'}
                className={`w-full ${ownershipShare === 'more' ? 'bg-mloflo-blue' : 'border-gray-300'}`}
                onClick={() => setOwnershipShare('more')}
              >
                Over 25%
              </Button>
            </div>
          </div>

          <div>
            <Label htmlFor="income">Gross Monthly Income before Deductions</Label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <Input
                id="income"
                placeholder="0.00"
                type="number"
                step="0.01"
                min="0"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/employment-status')}
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

export default SelfEmploymentDetailsPage;
