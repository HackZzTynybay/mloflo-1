
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const DeclarationsFinancePage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    coSignerOrGuarantor: null as boolean | null,
    outstandingJudgments: null as boolean | null,
    delinquentFederalDebt: null as boolean | null,
    partyToLawsuit: null as boolean | null,
    conveyedProperty: null as boolean | null,
    preForeclosureSale: null as boolean | null,
    propertyForeclosed: null as boolean | null,
    declaredBankruptcy: null as boolean | null,
    bankruptcyTypes: {
      chapter7: false,
      chapter11: false,
      chapter12: false,
      chapter13: false
    }
  });

  const [errors, setErrors] = useState({
    coSignerOrGuarantor: '',
    outstandingJudgments: '',
    delinquentFederalDebt: '',
    partyToLawsuit: '',
    conveyedProperty: '',
    preForeclosureSale: '',
    propertyForeclosed: '',
    declaredBankruptcy: '',
    bankruptcyTypes: ''
  });

  const handleRadioChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value === 'yes' }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      bankruptcyTypes: {
        ...prev.bankruptcyTypes,
        [field]: checked
      }
    }));
    
    if (checked) {
      setErrors(prev => ({ ...prev, bankruptcyTypes: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    // Validate all required fields
    if (formData.coSignerOrGuarantor === null) {
      newErrors.coSignerOrGuarantor = 'Please select yes or no';
      isValid = false;
    }
    if (formData.outstandingJudgments === null) {
      newErrors.outstandingJudgments = 'Please select yes or no';
      isValid = false;
    }
    if (formData.delinquentFederalDebt === null) {
      newErrors.delinquentFederalDebt = 'Please select yes or no';
      isValid = false;
    }
    if (formData.partyToLawsuit === null) {
      newErrors.partyToLawsuit = 'Please select yes or no';
      isValid = false;
    }
    if (formData.conveyedProperty === null) {
      newErrors.conveyedProperty = 'Please select yes or no';
      isValid = false;
    }
    if (formData.preForeclosureSale === null) {
      newErrors.preForeclosureSale = 'Please select yes or no';
      isValid = false;
    }
    if (formData.propertyForeclosed === null) {
      newErrors.propertyForeclosed = 'Please select yes or no';
      isValid = false;
    }
    if (formData.declaredBankruptcy === null) {
      newErrors.declaredBankruptcy = 'Please select yes or no';
      isValid = false;
    }
    
    // If they declared bankruptcy, at least one type must be selected
    if (formData.declaredBankruptcy === true && 
        !Object.values(formData.bankruptcyTypes).some(val => val)) {
      newErrors.bankruptcyTypes = 'Please select at least one bankruptcy type';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate('/application-summary');
        setIsSubmitting(false);
      }, 500);
    } else {
      toast({
        title: "Please fix the errors",
        description: "Please answer all required questions before continuing",
        variant: "destructive"
      });
    }
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
            <p className="font-medium flex"><span className="mr-3">A.</span> Are you a co-signer or guarantor on any debt or loan that is not disclosed on this application? <span className="text-red-500 ml-1">*</span></p>
            <RadioGroup 
              className="flex flex-row justify-end space-x-8" 
              onValueChange={(value) => handleRadioChange('coSignerOrGuarantor', value)}
              value={formData.coSignerOrGuarantor === null ? undefined : formData.coSignerOrGuarantor ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="coSignerYes" />
                <Label htmlFor="coSignerYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="coSignerNo" />
                <Label htmlFor="coSignerNo">No</Label>
              </div>
            </RadioGroup>
            {errors.coSignerOrGuarantor && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.coSignerOrGuarantor}</span>
              </div>
            )}
          </div>

          {/* Question B */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">B.</span> Are there any outstanding judgments against you? <span className="text-red-500 ml-1">*</span></p>
            <RadioGroup 
              className="flex flex-row justify-end space-x-8" 
              onValueChange={(value) => handleRadioChange('outstandingJudgments', value)}
              value={formData.outstandingJudgments === null ? undefined : formData.outstandingJudgments ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="judgmentsYes" />
                <Label htmlFor="judgmentsYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="judgmentsNo" />
                <Label htmlFor="judgmentsNo">No</Label>
              </div>
            </RadioGroup>
            {errors.outstandingJudgments && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.outstandingJudgments}</span>
              </div>
            )}
          </div>

          {/* Question C */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">C.</span> Are you currently delinquent or in default on a Federal debt? <span className="text-red-500 ml-1">*</span></p>
            <RadioGroup 
              className="flex flex-row justify-end space-x-8" 
              onValueChange={(value) => handleRadioChange('delinquentFederalDebt', value)}
              value={formData.delinquentFederalDebt === null ? undefined : formData.delinquentFederalDebt ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="delinquentYes" />
                <Label htmlFor="delinquentYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="delinquentNo" />
                <Label htmlFor="delinquentNo">No</Label>
              </div>
            </RadioGroup>
            {errors.delinquentFederalDebt && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.delinquentFederalDebt}</span>
              </div>
            )}
          </div>

          {/* Question D */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">D.</span> Are you a party to a lawsuit in which you potentially have any personal financial liability? <span className="text-red-500 ml-1">*</span></p>
            <RadioGroup 
              className="flex flex-row justify-end space-x-8" 
              onValueChange={(value) => handleRadioChange('partyToLawsuit', value)}
              value={formData.partyToLawsuit === null ? undefined : formData.partyToLawsuit ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="lawsuitYes" />
                <Label htmlFor="lawsuitYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="lawsuitNo" />
                <Label htmlFor="lawsuitNo">No</Label>
              </div>
            </RadioGroup>
            {errors.partyToLawsuit && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.partyToLawsuit}</span>
              </div>
            )}
          </div>

          {/* Question E */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">E.</span> Have you conveyed title to any property in lieu of foreclosure in the past 7 years? <span className="text-red-500 ml-1">*</span></p>
            <RadioGroup 
              className="flex flex-row justify-end space-x-8" 
              onValueChange={(value) => handleRadioChange('conveyedProperty', value)}
              value={formData.conveyedProperty === null ? undefined : formData.conveyedProperty ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="conveyedYes" />
                <Label htmlFor="conveyedYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="conveyedNo" />
                <Label htmlFor="conveyedNo">No</Label>
              </div>
            </RadioGroup>
            {errors.conveyedProperty && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.conveyedProperty}</span>
              </div>
            )}
          </div>

          {/* Question F */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">F.</span> Within the past 7 years, have you completed a pre-foreclosure sale or short sale, whereby the property was sold to a third party and the Lender agreed to accept less than the outstanding mortgage balance due? <span className="text-red-500 ml-1">*</span></p>
            <RadioGroup 
              className="flex flex-row justify-end space-x-8" 
              onValueChange={(value) => handleRadioChange('preForeclosureSale', value)}
              value={formData.preForeclosureSale === null ? undefined : formData.preForeclosureSale ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="preForeclosureYes" />
                <Label htmlFor="preForeclosureYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="preForeclosureNo" />
                <Label htmlFor="preForeclosureNo">No</Label>
              </div>
            </RadioGroup>
            {errors.preForeclosureSale && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.preForeclosureSale}</span>
              </div>
            )}
          </div>

          {/* Question G */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">G.</span> Have you had property foreclosed upon in the last 7 years? <span className="text-red-500 ml-1">*</span></p>
            <RadioGroup 
              className="flex flex-row justify-end space-x-8" 
              onValueChange={(value) => handleRadioChange('propertyForeclosed', value)}
              value={formData.propertyForeclosed === null ? undefined : formData.propertyForeclosed ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="foreclosedYes" />
                <Label htmlFor="foreclosedYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="foreclosedNo" />
                <Label htmlFor="foreclosedNo">No</Label>
              </div>
            </RadioGroup>
            {errors.propertyForeclosed && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.propertyForeclosed}</span>
              </div>
            )}
          </div>

          {/* Question H */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">H.</span> Have you declared bankruptcy within the past 7 years? <span className="text-red-500 ml-1">*</span></p>
            <RadioGroup 
              className="flex flex-row justify-end space-x-8" 
              onValueChange={(value) => handleRadioChange('declaredBankruptcy', value)}
              value={formData.declaredBankruptcy === null ? undefined : formData.declaredBankruptcy ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="bankruptcyYes" />
                <Label htmlFor="bankruptcyYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="bankruptcyNo" />
                <Label htmlFor="bankruptcyNo">No</Label>
              </div>
            </RadioGroup>
            {errors.declaredBankruptcy && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.declaredBankruptcy}</span>
              </div>
            )}

            {formData.declaredBankruptcy && (
              <div className="mt-6 ml-6">
                <p className="font-medium mb-4 flex items-center">Identify the type(s) of bankruptcy: <span className="text-red-500 ml-1">*</span></p>
                <div className="flex flex-wrap gap-6 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="chapter7" 
                      checked={formData.bankruptcyTypes.chapter7}
                      onCheckedChange={(checked) => handleCheckboxChange('chapter7', checked as boolean)}
                    />
                    <Label htmlFor="chapter7">Chapter 7</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="chapter11" 
                      checked={formData.bankruptcyTypes.chapter11}
                      onCheckedChange={(checked) => handleCheckboxChange('chapter11', checked as boolean)}
                    />
                    <Label htmlFor="chapter11">Chapter 11</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="chapter12" 
                      checked={formData.bankruptcyTypes.chapter12}
                      onCheckedChange={(checked) => handleCheckboxChange('chapter12', checked as boolean)}
                    />
                    <Label htmlFor="chapter12">Chapter 12</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="chapter13" 
                      checked={formData.bankruptcyTypes.chapter13}
                      onCheckedChange={(checked) => handleCheckboxChange('chapter13', checked as boolean)}
                    />
                    <Label htmlFor="chapter13">Chapter 13</Label>
                  </div>
                </div>
                {errors.bankruptcyTypes && (
                  <div className="flex items-center mt-2 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{errors.bankruptcyTypes}</span>
                  </div>
                )}
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
            disabled={isSubmitting}
          >
            Back
          </Button>
          
          <Button 
            type="button"
            className="bg-mloflo-blue hover:bg-blue-700 rounded-full px-10 py-2"
            onClick={handleNext}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Next"}
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default DeclarationsFinancePage;
