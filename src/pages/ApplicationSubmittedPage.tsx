
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const ApplicationSubmittedPage = () => {
  const navigate = useNavigate();

  return (
    <Layout 
      currentStep={10} 
      totalSteps={10} 
      title="Application Submitted"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8 text-center">
        <div className="rounded-full bg-green-100 p-4 mb-6">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">
          Application Submitted Successfully!
        </h1>
        
        <p className="text-gray-600 mb-8 max-w-md">
          Thank you for applying. Your application has been received and is being processed. A loan officer will contact you within the next 24-48 hours.
        </p>
        
        <div className="border rounded-lg p-6 bg-blue-50 mb-8 w-full">
          <h2 className="text-xl font-semibold mb-2">Application Reference</h2>
          <p className="text-lg font-bold text-mloflo-blue">MLF-{Math.floor(Math.random() * 1000000)}</p>
          <p className="text-sm text-gray-500 mt-2">Please save this reference number</p>
        </div>
        
        <div className="space-y-3 w-full">
          <p className="font-medium">What's next?</p>
          <ol className="list-decimal list-inside text-left space-y-2">
            <li>Our team will review your application</li>
            <li>You'll receive an email confirmation</li>
            <li>A loan officer will contact you to discuss next steps</li>
            <li>We'll request any additional documentation needed</li>
          </ol>
        </div>
        
        <Button 
          type="button"
          className="bg-mloflo-blue hover:bg-blue-700 mt-10 rounded-full px-10 py-2"
          onClick={() => navigate('/')}
        >
          Return to Home
        </Button>
      </div>
    </Layout>
  );
};

export default ApplicationSubmittedPage;
