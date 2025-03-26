
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";

const EmploymentDetailsPage = () => {
  const navigate = useNavigate();
  const [employerName, setEmployerName] = useState('');
  const [position, setPosition] = useState('');
  const [yearsAtEmployer, setYearsAtEmployer] = useState('');
  const [monthsAtEmployer, setMonthsAtEmployer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/employment-address');
  };

  return (
    <Layout 
      currentStep={4} 
      totalSteps={10} 
      title="Employment Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Tell us about your current employment
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="mb-4">
            <Label htmlFor="employerName">Employer Name</Label>
            <Input
              id="employerName"
              placeholder="Employer Name"
              value={employerName}
              onChange={(e) => setEmployerName(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="position">Position / Title</Label>
            <Input
              id="position"
              placeholder="Position / Title"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="employmentDuration">How long have you worked here?</Label>
            <div className="grid grid-cols-2 gap-4 mt-1">
              <div>
                <select
                  id="yearsAtEmployer"
                  value={yearsAtEmployer}
                  onChange={(e) => setYearsAtEmployer(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="" disabled selected>Year</option>
                  {Array.from({ length: 51 }, (_, i) => (
                    <option key={i} value={i}>{i} {i === 1 ? 'year' : 'years'}</option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  id="monthsAtEmployer"
                  value={monthsAtEmployer}
                  onChange={(e) => setMonthsAtEmployer(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="" disabled selected>Month</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i}>{i} {i === 1 ? 'month' : 'months'}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/income-information')}
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

export default EmploymentDetailsPage;
