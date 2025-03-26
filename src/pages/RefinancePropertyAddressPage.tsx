
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { MapPin } from 'lucide-react';

const RefinancePropertyAddressPage = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [aptUnit, setAptUnit] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/existing-mortgage');
  };

  return (
    <Layout 
      currentStep={12} 
      totalSteps={15} 
      title="Loan & Property"
    >
      <div className="flex flex-col items-center w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          What is the address of the property that you are refinancing?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="mb-4">
            <Label htmlFor="address" className="block mb-2 text-gray-700">Property Address</Label>
            <div className="relative">
              <Input
                id="address"
                placeholder="Property Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="pr-10 py-6"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <MapPin size={16} />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="city" className="block mb-2 text-gray-700">City</Label>
            <Input
              id="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="py-6"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="state" className="block mb-2 text-gray-700">State</Label>
            <Input
              id="state"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="py-6"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="aptUnit" className="block mb-2 text-gray-700">Apt/Unit</Label>
            <Input
              id="aptUnit"
              placeholder="Apt/Unit"
              value={aptUnit}
              onChange={(e) => setAptUnit(e.target.value)}
              className="py-6"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="zipCode" className="block mb-2 text-gray-700">Zip Code</Label>
            <Input
              id="zipCode"
              placeholder="Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="py-6"
            />
          </div>

          <div className="flex justify-center mt-12 mb-4">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/cash-out-amount')}
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

export default RefinancePropertyAddressPage;
