
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin } from 'lucide-react';

const PropertyDetailsPage = () => {
  const navigate = useNavigate();
  const [propertyAddress, setPropertyAddress] = useState('');

  const handleNext = () => {
    if (propertyAddress.trim() !== '') {
      navigate('/ethnicity');
    }
  };

  return (
    <Layout 
      currentStep={6} 
      totalSteps={10} 
      title="Real Estate"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Please provide property details
        </h1>
        
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <label htmlFor="property-address" className="block text-sm font-medium">
              Property Address*
            </label>
            <div className="relative">
              <Input
                id="property-address"
                type="text"
                value={propertyAddress}
                onChange={(e) => setPropertyAddress(e.target.value)}
                placeholder="Property Address"
                className="pl-3 pr-10 py-2 w-full"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-auto pt-10">
          <Button 
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/additional-property-subject')}
          >
            Back
          </Button>
          
          <Button 
            className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
            onClick={handleNext}
            disabled={propertyAddress.trim() === ''}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetailsPage;
