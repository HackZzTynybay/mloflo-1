
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { AlertCircle } from 'lucide-react';

const ApplicationFinishPage = () => {
  const navigate = useNavigate();
  const [agreements, setAgreements] = useState({
    eDisclosure: false,
    creditCheck: false
  });
  const [errors, setErrors] = useState({
    eDisclosure: false,
    creditCheck: false
  });

  const handleAgreementChange = (field: string, checked: boolean) => {
    setAgreements(prev => ({ ...prev, [field]: checked }));
    if (checked) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      eDisclosure: !agreements.eDisclosure,
      creditCheck: !agreements.creditCheck
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleFinish = () => {
    if (!validateForm()) {
      toast({
        title: "Agreement Required",
        description: "Please agree to all terms to continue.",
        variant: "destructive"
      });
      return;
    }
    
    // Navigate to completion
    navigate('/application-complete');
  };

  const handleBack = () => {
    navigate('/application-summary');
  };

  const allAgreed = agreements.eDisclosure && agreements.creditCheck;

  return (
    <Layout 
      currentStep={10} 
      totalSteps={10}
      title="Finish" 
    >
      <div className="flex flex-col w-full max-w-3xl mx-auto py-8 px-4 sm:px-0">
        <h1 className="text-3xl font-bold mb-16 text-center">
          Finish
        </h1>
        
        <div className="space-y-12">
          <div className="flex items-start space-x-4">
            <Checkbox 
              id="eDisclosure" 
              checked={agreements.eDisclosure}
              onCheckedChange={(checked) => handleAgreementChange('eDisclosure', checked as boolean)}
              className={`mt-1 ${errors.eDisclosure ? 'border-red-500' : ''}`}
            />
            <div className="flex-1">
              <Label htmlFor="eDisclosure" className="text-base font-medium">
                I agree <span className="text-mloflo-blue">Consent To Do Business Electronically (The eDisclosure Agreement)</span>
              </Label>
              {errors.eDisclosure && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span>This agreement is required</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Checkbox 
              id="creditCheck" 
              checked={agreements.creditCheck}
              onCheckedChange={(checked) => handleAgreementChange('creditCheck', checked as boolean)}
              className={`mt-1 ${errors.creditCheck ? 'border-red-500' : ''}`}
            />
            <div className="flex-1">
              <Label htmlFor="creditCheck" className="text-base font-medium">
                I agree to give <span className="text-mloflo-blue">Authorization To Run A Credit Check On Financial History</span>
              </Label>
              {errors.creditCheck && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span>This agreement is required</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-24">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2 mr-4"
            onClick={handleBack}
          >
            Back
          </Button>
          
          <Button 
            type="button"
            className={`bg-mloflo-blue hover:bg-blue-700 rounded-full px-12 py-3 ${!allAgreed ? 'opacity-70' : ''}`}
            onClick={handleFinish}
          >
            Finish
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ApplicationFinishPage;
