
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { CalendarIcon } from 'lucide-react';

const ServiceExpirationPage = () => {
  const navigate = useNavigate();
  const [expirationDate, setExpirationDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Temporarily navigate back home since we removed the next pages
    navigate('/');
  };

  return (
    <Layout 
      currentStep={3} 
      totalSteps={10} 
      title="Personal Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          What is the projected expiration date of service/tour?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="mb-4">
            <Label htmlFor="expirationDate">Expiration Date</Label>
            <div className="relative mt-1">
              <Input
                id="expirationDate"
                placeholder="MM-DD-YYYY"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                className="mt-1"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <CalendarIcon size={16} />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/military-service-details')}
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

export default ServiceExpirationPage;
