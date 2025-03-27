
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
    if (propertyAddress.trim()) {
      navigate('/demographic-ethnicity');
    }
  };

  const handleBack = () => {
    navigate('/real-estate-subject');
  };

  return (
    <Layout 
      currentStep={6} 
      totalSteps={10}
      title="Real Estate" 
    >
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Please provide property details
        </h1>
        
        <div className="w-full max-w-md mx-auto">
          <div className="mb-6">
            <label htmlFor="propertyAddress" className="block text-sm font-medium mb-2">
              Property Address*
            </label>
            <div className="relative">
              <Input 
                id="propertyAddress"
                type="text" 
                placeholder="Property Address"
                value={propertyAddress}
                onChange={(e) => setPropertyAddress(e.target.value)}
                className="w-full pr-10"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <MapPin size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 gap-4">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={handleBack}
          >
            Back
          </Button>
          
          <Button 
            type="button"
            className="bg-mloflo-blue hover:bg-blue-700 rounded-full px-10 py-2"
            onClick={handleNext}
            disabled={!propertyAddress.trim()}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetailsPage;
