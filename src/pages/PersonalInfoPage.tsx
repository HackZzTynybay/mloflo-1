
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { Calendar } from 'lucide-react';

const PersonalInfoPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ssn, setSSN] = useState('');
  const [dob, setDOB] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/contact-info');
  };

  return (
    <Layout 
      currentStep={3} 
      totalSteps={10} 
      title="Personal Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Now let's learn a little bit more about you.
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="mb-4">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="middleName">Middle Name</Label>
            <Input
              id="middleName"
              placeholder="Middle Name"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="ssn">Social Security Number</Label>
            <Input
              id="ssn"
              placeholder="Social Security Number"
              value={ssn}
              onChange={(e) => setSSN(e.target.value)}
              className="mt-1"
              type="password"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="dob">Date of Birth</Label>
            <div className="relative">
              <Input
                id="dob"
                placeholder="MM-DD-YYYY"
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
                className="mt-1"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Calendar size={16} />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="citizenship">Citizenship</Label>
            <select 
              id="citizenship" 
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-white"
            >
              <option value="" disabled selected>Select</option>
              <option value="us">United States</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/property-value')}
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

export default PersonalInfoPage;
