
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const ApplicationCompletePage = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <Layout 
      currentStep={10} 
      totalSteps={10}
      title="Application Complete" 
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <div className="text-green-500 mb-6">
          <CheckCircle size={80} />
        </div>
        
        <h1 className="text-3xl font-bold mb-4 text-center">
          Application Complete!
        </h1>
        
        <p className="text-lg text-center mb-10">
          Thank you for completing your application. We will review your information and get back to you soon.
        </p>
        
        <Button 
          type="button"
          className="bg-mloflo-blue hover:bg-blue-700 rounded-full px-10 py-2"
          onClick={handleHome}
        >
          Return to Home
        </Button>
      </div>
    </Layout>
  );
};

export default ApplicationCompletePage;
