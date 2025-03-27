
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const ReviewSubmitPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!agreement) {
      setError('You must accept the terms to continue');
      toast({
        title: "Agreement Required",
        description: "Please accept the terms by checking the box before submitting your application",
        variant: "destructive",
      });
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    // Here you would typically send all the collected data to your backend
    setTimeout(() => {
      navigate('/application-submitted');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <Layout 
      currentStep={7} 
      totalSteps={10} 
      title="Review & Submit"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Review your information
        </h1>
        <p className="text-gray-600 mb-10 text-center">
          Please review all information before submitting your application.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Name:</dt>
                  <dd>John Doe</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">DOB:</dt>
                  <dd>01/01/1980</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">SSN:</dt>
                  <dd>XXX-XX-1234</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Citizenship:</dt>
                  <dd>US Citizen</dd>
                </div>
              </dl>
              <Button 
                variant="link" 
                className="mt-4 px-0 text-mloflo-blue"
                onClick={() => navigate('/personal-info')}
              >
                Edit
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Phone:</dt>
                  <dd>(555) 123-4567</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Email:</dt>
                  <dd>john.doe@example.com</dd>
                </div>
              </dl>
              <Button 
                variant="link" 
                className="mt-4 px-0 text-mloflo-blue"
                onClick={() => navigate('/contact-info')}
              >
                Edit
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Current Address</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Address:</dt>
                  <dd>123 Main St</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">City, State:</dt>
                  <dd>Anytown, CA</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Zip Code:</dt>
                  <dd>12345</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Duration:</dt>
                  <dd>3 years 2 months</dd>
                </div>
              </dl>
              <Button 
                variant="link" 
                className="mt-4 px-0 text-mloflo-blue"
                onClick={() => navigate('/current-address')}
              >
                Edit
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Employment Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Employer:</dt>
                  <dd>ACME Corporation</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Position:</dt>
                  <dd>Software Engineer</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Duration:</dt>
                  <dd>5 years 3 months</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Income:</dt>
                  <dd>$8,500/month</dd>
                </div>
              </dl>
              <Button 
                variant="link" 
                className="mt-4 px-0 text-mloflo-blue"
                onClick={() => navigate('/employment-details')}
              >
                Edit
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Loan Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Loan Purpose:</dt>
                  <dd>Refinance</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Property Value:</dt>
                  <dd>$450,000</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Loan Amount:</dt>
                  <dd>$350,000</dd>
                </div>
              </dl>
              <Button 
                variant="link" 
                className="mt-4 px-0 text-mloflo-blue"
                onClick={() => navigate('/loan-type')}
              >
                Edit
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Financial Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Checking:</dt>
                  <dd>$15,000</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Savings:</dt>
                  <dd>$25,000</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Investments:</dt>
                  <dd>$50,000</dd>
                </div>
              </dl>
              <Button 
                variant="link" 
                className="mt-4 px-0 text-mloflo-blue"
                onClick={() => navigate('/assets-information')}
              >
                Edit
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="border-t border-gray-200 pt-6 w-full">
          <div className="flex items-start space-x-3 mb-8">
            <input 
              type="checkbox" 
              id="agreement" 
              checked={agreement}
              onChange={() => {
                setAgreement(!agreement);
                setError('');
              }}
              className={`h-5 w-5 rounded border-gray-300 ${error ? 'border-red-500' : 'text-mloflo-blue'} focus:ring-mloflo-blue mt-1`}
            />
            <label htmlFor="agreement" className={`text-sm ${error ? 'text-red-500' : 'text-gray-700'}`}>
              By checking this box, I confirm that all the information provided is accurate and complete to the best of my knowledge. I authorize MloFlo to verify this information and understand that providing false information may result in the denial of my application.
            </label>
          </div>
          
          {error && (
            <div className="flex items-center mt-1 mb-4 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{error}</span>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-6">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/declarations-page')}
            disabled={isSubmitting}
          >
            Back
          </Button>
          
          <Button 
            type="button"
            className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Submit Application"}
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ReviewSubmitPage;
