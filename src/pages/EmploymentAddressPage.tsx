
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { MapPin } from 'lucide-react';

const EmploymentAddressPage = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/employment-phone');
  };

  return (
    <Layout 
      currentStep={4} 
      totalSteps={10} 
      title="Employment Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          What is your employer's address?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="mb-4">
            <Label htmlFor="address">Employer Address</Label>
            <div className="relative">
              <Input
                id="address"
                placeholder="Employer Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <MapPin size={16} />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="zipCode">Zip Code</Label>
            <Input
              id="zipCode"
              placeholder="Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/employment-details')}
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

export default EmploymentAddressPage;
