
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const DeclarationsFinancePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    coSignerOrGuarantor: null,
    outstandingJudgments: null,
    delinquentFederalDebt: null,
    partyToLawsuit: null,
    conveyedProperty: null,
    preForeclosureSale: null,
    propertyForeclosed: null,
    declaredBankruptcy: null,
    bankruptcyTypes: {
      chapter7: false,
      chapter11: false,
      chapter12: false,
      chapter13: false
    }
  });

  const handleRadioChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value === 'yes' }));
  };

  const handleCheckboxChange = (field, checked) => {
    setFormData(prev => ({
      ...prev,
      bankruptcyTypes: {
        ...prev.bankruptcyTypes,
        [field]: checked
      }
    }));
  };

  const handleNext = () => {
    navigate('/application-summary');
  };

  const handleBack = () => {
    navigate('/declarations-property');
  };

  return (
    <Layout 
      currentStep={8} 
      totalSteps={10}
      title="Declarations" 
    >
      <div className="flex flex-col w-full max-w-3xl mx-auto py-8 px-4 sm:px-0">
        <h1 className="text-2xl font-bold mb-10 text-center">
          About your finances
        </h1>
        
        <div className="space-y-10">
          {/* Question A */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">A.</span> Are you a co-signer or guarantor on any debt or loan that is not disclosed on this application?</p>
            <RadioGroup className="flex flex-row justify-end space-x-8" onValueChange={(value) => handleRadioChange('coSignerOrGuarantor', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="coSignerYes" />
                <Label htmlFor="coSignerYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="coSignerNo" />
                <Label htmlFor="coSignerNo">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question B */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">B.</span> Are there any outstanding judgments against you?</p>
            <RadioGroup className="flex flex-row justify-end space-x-8" onValueChange={(value) => handleRadioChange('outstandingJudgments', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="judgmentsYes" />
                <Label htmlFor="judgmentsYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="judgmentsNo" />
                <Label htmlFor="judgmentsNo">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question C */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">C.</span> Are you currently delinquent or in default on a Federal debt?</p>
            <RadioGroup className="flex flex-row justify-end space-x-8" onValueChange={(value) => handleRadioChange('delinquentFederalDebt', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="delinquentYes" />
                <Label htmlFor="delinquentYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="delinquentNo" />
                <Label htmlFor="delinquentNo">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question D */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">D.</span> Are you a party to a lawsuit in which you potentially have any personal financial liability?</p>
            <RadioGroup className="flex flex-row justify-end space-x-8" onValueChange={(value) => handleRadioChange('partyToLawsuit', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="lawsuitYes" />
                <Label htmlFor="lawsuitYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="lawsuitNo" />
                <Label htmlFor="lawsuitNo">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question E */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">E.</span> Have you conveyed title to any property in lieu of foreclosure in the past 7 years?</p>
            <RadioGroup className="flex flex-row justify-end space-x-8" onValueChange={(value) => handleRadioChange('conveyedProperty', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="conveyedYes" />
                <Label htmlFor="conveyedYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="conveyedNo" />
                <Label htmlFor="conveyedNo">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question F */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">F.</span> Within the past 7 years, have you completed a pre-foreclosure sale or short sale, whereby the property was sold to a third party and the Lender agreed to accept less than the outstanding mortgage balance due?</p>
            <RadioGroup className="flex flex-row justify-end space-x-8" onValueChange={(value) => handleRadioChange('preForeclosureSale', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="preForeclosureYes" />
                <Label htmlFor="preForeclosureYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="preForeclosureNo" />
                <Label htmlFor="preForeclosureNo">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question G */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">G.</span> Have you had property foreclosed upon in the last 7 years?</p>
            <RadioGroup className="flex flex-row justify-end space-x-8" onValueChange={(value) => handleRadioChange('propertyForeclosed', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="foreclosedYes" />
                <Label htmlFor="foreclosedYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="foreclosedNo" />
                <Label htmlFor="foreclosedNo">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question H */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">H.</span> Have you declared bankruptcy within the past 7 years?</p>
            <RadioGroup className="flex flex-row justify-end space-x-8" onValueChange={(value) => handleRadioChange('declaredBankruptcy', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="bankruptcyYes" />
                <Label htmlFor="bankruptcyYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="bankruptcyNo" />
                <Label htmlFor="bankruptcyNo">No</Label>
              </div>
            </RadioGroup>

            {formData.declaredBankruptcy && (
              <div className="mt-6 ml-6">
                <p className="font-medium mb-4">Identify the type(s) of bankruptcy:</p>
                <div className="flex flex-wrap gap-6 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="chapter7" 
                      checked={formData.bankruptcyTypes.chapter7}
                      onCheckedChange={(checked) => handleCheckboxChange('chapter7', checked)}
                    />
                    <Label htmlFor="chapter7">Chapter 7</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="chapter11" 
                      checked={formData.bankruptcyTypes.chapter11}
                      onCheckedChange={(checked) => handleCheckboxChange('chapter11', checked)}
                    />
                    <Label htmlFor="chapter11">Chapter 11</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="chapter12" 
                      checked={formData.bankruptcyTypes.chapter12}
                      onCheckedChange={(checked) => handleCheckboxChange('chapter12', checked)}
                    />
                    <Label htmlFor="chapter12">Chapter 12</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="chapter13" 
                      checked={formData.bankruptcyTypes.chapter13}
                      onCheckedChange={(checked) => handleCheckboxChange('chapter13', checked)}
                    />
                    <Label htmlFor="chapter13">Chapter 13</Label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-16 space-x-4">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={handleBack}
          >
            Back
          </Button>
          
          <Button 
            type="button"
            className="bg-mloflo-blue hover:bg-blue-700 rounded-full px-10 py-2"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default DeclarationsFinancePage;
