
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CalendarIcon } from 'lucide-react';

const AdditionalEmploymentDetailsPage = () => {
  const navigate = useNavigate();
  const [employerName, setEmployerName] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [income, setIncome] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/additional-income');
  };

  return (
    <Layout 
      currentStep={4} 
      totalSteps={10} 
      title="Employment"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-2xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Additional employment
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <Label htmlFor="employerName">Employer Name</Label>
            <Input
              id="employerName"
              placeholder="Employer Name"
              value={employerName}
              onChange={(e) => setEmployerName(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="position">Position or Title</Label>
            <Input
              id="position"
              placeholder="Position or Title"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="startDate">Start Date</Label>
            <div className="relative">
              <Input
                id="startDate"
                placeholder="MM-DD-YYYY"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1 pr-10"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <CalendarIcon size={18} />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="income">Monthly Income</Label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <Input
                id="income"
                placeholder="0.00"
                type="number"
                step="0.01"
                min="0"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/additional-employment')}
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

export default AdditionalEmploymentDetailsPage;
