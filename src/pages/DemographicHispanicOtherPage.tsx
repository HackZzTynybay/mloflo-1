
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const DemographicHispanicOtherPage = () => {
  const navigate = useNavigate();
  const [otherType, setOtherType] = useState('');

  const handleNext = () => {
    if (otherType.trim()) {
      navigate('/demographic-sex');
    }
  };

  const handleBack = () => {
    navigate('/demographic-hispanic');
  };

  return (
    <Layout 
      currentStep={7} 
      totalSteps={10}
      title="Demographic" 
    >
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Other Hispanic or Latino
        </h1>
        
        <div className="w-full max-w-md mx-auto">
          <div className="mb-6">
            <label htmlFor="otherType" className="block text-sm font-medium mb-2">
              Type Other
            </label>
            <Input 
              id="otherType"
              type="text" 
              placeholder="Type Other"
              value={otherType}
              onChange={(e) => setOtherType(e.target.value)}
              className="w-full"
            />
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
            disabled={!otherType.trim()}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default DemographicHispanicOtherPage;
