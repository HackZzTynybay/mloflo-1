
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";

const AddressDurationPage = () => {
  const navigate = useNavigate();
  const [years, setYears] = useState('');
  const [months, setMonths] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/property-relationship');
  };

  // Generate year options from 0 to 30
  const yearOptions = Array.from({ length: 31 }, (_, i) => (
    <option key={`year-${i}`} value={i}>{i} {i === 1 ? 'Year' : 'Years'}</option>
  ));

  // Generate month options from 0 to 11
  const monthOptions = Array.from({ length: 12 }, (_, i) => (
    <option key={`month-${i}`} value={i}>{i} {i === 1 ? 'Month' : 'Months'}</option>
  ));

  return (
    <Layout 
      currentStep={3} 
      totalSteps={10} 
      title="Personal Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          How long have you lived at the current address?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-10">
            <Label className="block mb-2">How long at Current Address?</Label>
            <div className="flex gap-4">
              <select 
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-md"
              >
                <option value="" disabled selected>Year</option>
                {yearOptions}
              </select>
              
              <select 
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-md"
              >
                <option value="" disabled selected>Month</option>
                {monthOptions}
              </select>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/current-address')}
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

export default AddressDurationPage;
