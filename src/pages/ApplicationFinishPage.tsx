
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const ApplicationFinishPage = () => {
  const navigate = useNavigate();
  const [agreements, setAgreements] = useState({
    eDisclosure: false,
    creditCheck: false
  });

  const handleAgreementChange = (field, checked) => {
    setAgreements(prev => ({ ...prev, [field]: checked }));
  };

  const handleFinish = () => {
    if (!agreements.eDisclosure || !agreements.creditCheck) {
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
        
        <div className="space-y-10">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="eDisclosure" 
              checked={agreements.eDisclosure}
              onCheckedChange={(checked) => handleAgreementChange('eDisclosure', checked)}
            />
            <div>
              <Label htmlFor="eDisclosure" className="text-base font-medium">
                I agree <span className="text-mloflo-blue">Consent To Do Business Electronically (The eDisclosure Agreement)</span>
              </Label>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="creditCheck" 
              checked={agreements.creditCheck}
              onCheckedChange={(checked) => handleAgreementChange('creditCheck', checked)}
            />
            <div>
              <Label htmlFor="creditCheck" className="text-base font-medium">
                I agree to give <span className="text-mloflo-blue">Authorization To Run A Credit Check On Financial History</span>
              </Label>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-24">
          <Button 
            type="button"
            className={`bg-mloflo-blue hover:bg-blue-700 rounded-full px-12 py-3 ${!allAgreed ? 'opacity-70 pointer-events-none' : ''}`}
            onClick={handleFinish}
            disabled={!allAgreed}
          >
            Finish
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ApplicationFinishPage;
