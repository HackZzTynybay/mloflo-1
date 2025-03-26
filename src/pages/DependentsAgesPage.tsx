
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";

const DependentsAgesPage = () => {
  const navigate = useNavigate();
  const [ages, setAges] = useState(['', '']);

  const handleAgeChange = (index: number, value: string) => {
    const newAges = [...ages];
    newAges[index] = value;
    setAges(newAges);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/military-service');
  };

  return (
    <Layout 
      currentStep={3} 
      totalSteps={10} 
      title="Personal Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          What are ages of your dependents?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="grid grid-cols-2 gap-4 mb-10">
            {ages.map((age, index) => (
              <div key={index}>
                <Label className="block mb-2">Age of Dependents</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="Age of Dependents"
                  value={age}
                  onChange={(e) => handleAgeChange(index, e.target.value)}
                  className="w-full"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/dependents-count')}
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

export default DependentsAgesPage;
