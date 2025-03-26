
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";

const EmploymentPhonePage = () => {
  const navigate = useNavigate();
  const [employerPhone, setEmployerPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/additional-income');
  };

  return (
    <Layout 
      currentStep={4} 
      totalSteps={10} 
      title="Employment Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          What is your employer's phone number?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="mb-4">
            <Label htmlFor="employerPhone">Employer Phone Number</Label>
            <Input
              id="employerPhone"
              placeholder="(XXX) XXX-XXXX"
              value={employerPhone}
              onChange={(e) => setEmployerPhone(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/employment-address')}
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

export default EmploymentPhonePage;
