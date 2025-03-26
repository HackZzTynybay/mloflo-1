
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AdditionalPropertyDetailPage = () => {
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState('');

  const handleNext = () => {
    navigate('/hispanic-details');
  };

  return (
    <Layout 
      currentStep={5} 
      totalSteps={10} 
      title="Additional Property Details"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Tell us about your additional property
        </h1>
        
        <div className="w-full max-w-lg space-y-6">
          <div className="space-y-2">
            <label htmlFor="property-type" className="block text-sm font-medium">
              Property Type
            </label>
            <Select 
              value={propertyType} 
              onValueChange={setPropertyType}
            >
              <SelectTrigger id="property-type" className="w-full">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single-family">Single Family</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="condo">Condominium</SelectItem>
                <SelectItem value="multi-family">Multi-Family</SelectItem>
                <SelectItem value="mobile-home">Mobile Home</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="property-value" className="block text-sm font-medium">
              Estimated Property Value
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <Input
                id="property-value"
                type="number"
                placeholder="0.00"
                className="pl-7"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-14">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/additional-property-primary')}
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

export default AdditionalPropertyDetailPage;
