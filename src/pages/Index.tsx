
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout 
      currentStep={1} 
      totalSteps={10} 
      title="Welcome"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Welcome to MLOFlo Mortgage Application
        </h1>
        
        <p className="text-center mb-8">
          Start your mortgage application process by exploring the available options below.
        </p>
        
        <div className="flex flex-col space-y-4 w-full max-w-md">
          <Button 
            className="bg-mloflo-blue hover:bg-blue-700 rounded-full px-10 py-6 text-lg"
            onClick={() => navigate('/assets')}
          >
            Start Application
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
