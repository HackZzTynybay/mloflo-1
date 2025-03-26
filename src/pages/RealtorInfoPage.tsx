
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const RealtorInfoPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [sendInvite, setSendInvite] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/property-type');
  };

  return (
    <Layout 
      currentStep={5} 
      totalSteps={10} 
      title="Loan & Property"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Tell us about the realtor.
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Label htmlFor="sendInvite">Want to send an invite?</Label>
              <span className="text-gray-500">ⓘ</span>
            </div>
            <Switch
              id="sendInvite"
              checked={sendInvite}
              onCheckedChange={setSendInvite}
            />
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/realtor')}
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

export default RealtorInfoPage;
