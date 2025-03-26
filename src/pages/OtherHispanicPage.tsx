
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const OtherHispanicPage = () => {
  const navigate = useNavigate();
  const [otherType, setOtherType] = useState('');

  const handleNext = () => {
    if (otherType.trim() !== '') {
      navigate('/sex');
    }
  };

  return (
    <Layout 
      currentStep={7} 
      totalSteps={10} 
      title="Demographic"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Other Hispanic or Latino
        </h1>
        
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <label htmlFor="other-type" className="block text-sm font-medium">
              Type Other
            </label>
            <Input
              id="other-type"
              type="text"
              value={otherType}
              onChange={(e) => setOtherType(e.target.value)}
              placeholder="Type Other"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex justify-center mt-auto pt-10">
          <Button 
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/hispanic-details')}
          >
            Back
          </Button>
          
          <Button 
            className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
            onClick={handleNext}
            disabled={otherType.trim() === ''}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default OtherHispanicPage;
