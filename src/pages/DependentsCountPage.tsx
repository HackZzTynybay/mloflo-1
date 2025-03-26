
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";

const DependentsCountPage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dependents-ages');
  };

  return (
    <Layout 
      currentStep={3} 
      totalSteps={10} 
      title="Personal Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          How many dependents do you have?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="mb-10">
            <Label className="block mb-2">Number of Dependents</Label>
            <select 
              value={count}
              onChange={(e) => setCount(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md appearance-none"
            >
              <option value="" disabled selected>Number of Dependents</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/dependents-question')}
            >
              Back
            </Button>
            
            <Button 
              type="submit"
              className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
              disabled={!count}
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default DependentsCountPage;
