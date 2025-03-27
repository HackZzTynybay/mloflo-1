
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { AlertCircle } from 'lucide-react';

const DeclarationsPropertyPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    occupyAsPrimary: null as boolean | null,
    ownershipInterest: null as boolean | null,
    propertyType: '',
    holdTitle: '',
    familyRelationship: null as boolean | null,
    borrowingMoney: null as boolean | null,
    moneyAmount: '',
    mortgageLoanProperty: null as boolean | null,
    newCreditApplying: null as boolean | null,
    propertySubjectToLien: null as boolean | null
  });

  const [errors, setErrors] = useState({
    occupyAsPrimary: '',
    ownershipInterest: '',
    propertyType: '',
    holdTitle: '',
    familyRelationship: '',
    borrowingMoney: '',
    moneyAmount: '',
    mortgageLoanProperty: '',
    newCreditApplying: '',
    propertySubjectToLien: ''
  });

  const handleRadioChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value === 'yes' }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    // Check required fields
    if (formData.occupyAsPrimary === null) {
      newErrors.occupyAsPrimary = 'Please select yes or no';
      isValid = false;
    }
    if (formData.ownershipInterest === null) {
      newErrors.ownershipInterest = 'Please select yes or no';
      isValid = false;
    }
    if (!formData.propertyType) {
      newErrors.propertyType = 'Please select property type';
      isValid = false;
    }
    if (!formData.holdTitle) {
      newErrors.holdTitle = 'Please select how you held title';
      isValid = false;
    }
    if (formData.familyRelationship === null) {
      newErrors.familyRelationship = 'Please select yes or no';
      isValid = false;
    }
    if (formData.borrowingMoney === null) {
      newErrors.borrowingMoney = 'Please select yes or no';
      isValid = false;
    }
    // Validate moneyAmount only if borrowingMoney is true
    if (formData.borrowingMoney === true && !formData.moneyAmount) {
      newErrors.moneyAmount = 'Please enter the amount';
      isValid = false;
    }
    if (formData.mortgageLoanProperty === null) {
      newErrors.mortgageLoanProperty = 'Please select yes or no';
      isValid = false;
    }
    if (formData.newCreditApplying === null) {
      newErrors.newCreditApplying = 'Please select yes or no';
      isValid = false;
    }
    if (formData.propertySubjectToLien === null) {
      newErrors.propertySubjectToLien = 'Please select yes or no';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate('/declarations-finance');
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
    navigate('/demographic-asian');
  };

  return (
    <Layout 
      currentStep={8} 
      totalSteps={10}
      title="Declarations" 
    >
      <div className="flex flex-col w-full max-w-3xl mx-auto py-8 px-4 sm:px-0">
        <h1 className="text-2xl font-bold mb-10 text-center">
          About this property and your money with this loan
        </h1>
        
        <div className="space-y-10">
          {/* Question A */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">A.</span> Will you occupy the property as your primary residence? <span className="text-red-500 ml-1">*</span></p>
            <RadioGroup 
              className="flex flex-row justify-end space-x-8" 
              onValueChange={(value) => handleRadioChange('occupyAsPrimary', value)}
              value={formData.occupyAsPrimary === null ? undefined : formData.occupyAsPrimary ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="occupyYes" />
                <Label htmlFor="occupyYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="occupyNo" />
                <Label htmlFor="occupyNo">No</Label>
              </div>
            </RadioGroup>
            {errors.occupyAsPrimary && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.occupyAsPrimary}</span>
              </div>
            )}
          </div>

          {/* Question about ownership interest */}
          <div className="space-y-4">
            <p className="font-medium">Have you had an ownership interest in another property in the last three years? <span className="text-red-500 ml-1">*</span></p>
            <RadioGroup 
              className="flex flex-row justify-end space-x-8" 
              onValueChange={(value) => handleRadioChange('ownershipInterest', value)}
              value={formData.ownershipInterest === null ? undefined : formData.ownershipInterest ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="ownershipYes" />
                <Label htmlFor="ownershipYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="ownershipNo" />
                <Label htmlFor="ownershipNo">No</Label>
              </div>
            </RadioGroup>
            {errors.ownershipInterest && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.ownershipInterest}</span>
              </div>
            )}
          </div>

          {/* Property Type */}
          <div className="space-y-4">
            <Label htmlFor="propertyType" className="flex items-center">Type of Property <span className="text-red-500 ml-1">*</span></Label>
            <Select onValueChange={(value) => handleInputChange('propertyType', value)}>
              <SelectTrigger id="propertyType" className={`w-full ${errors.propertyType ? 'border-red-500' : ''}`}>
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="primary-residence">Primary Residence</SelectItem>
                <SelectItem value="secondary-residence">Secondary Residence</SelectItem>
                <SelectItem value="investment">Investment Property</SelectItem>
              </SelectContent>
            </Select>
            {errors.propertyType && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.propertyType}</span>
              </div>
            )}
          </div>

          {/* Hold Title */}
          <div className="space-y-4">
            <Label htmlFor="holdTitle" className="flex items-center">How did you hold title to the property? <span className="text-red-500 ml-1">*</span></Label>
            <Select onValueChange={(value) => handleInputChange('holdTitle', value)}>
              <SelectTrigger id="holdTitle" className={`w-full ${errors.holdTitle ? 'border-red-500' : ''}`}>
                <SelectValue placeholder="Select how you held title" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="by-yourself">By Yourself</SelectItem>
                <SelectItem value="jointly">Jointly with Spouse</SelectItem>
                <SelectItem value="jointly-other">Jointly with Another Person</SelectItem>
              </SelectContent>
            </Select>
            {errors.holdTitle && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.holdTitle}</span>
              </div>
            )}
          </div>

          {/* Question B */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">B.</span> If this is a Purchase Transaction: Do you have a family relationship or business affiliation with the seller of the property? <span className="text-red-500 ml-1">*</span></p>
            <RadioGroup 
              className="flex flex-row justify-end space-x-8" 
              onValueChange={(value) => handleRadioChange('familyRelationship', value)}
              value={formData.familyRelationship === null ? undefined : formData.familyRelationship ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="familyYes" />
                <Label htmlFor="familyYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="familyNo" />
                <Label htmlFor="familyNo">No</Label>
              </div>
            </RadioGroup>
            {errors.familyRelationship && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.familyRelationship}</span>
              </div>
            )}
          </div>

          {/* Question C */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">C.</span> Are you borrowing any money for this real estate transaction (e.g., money for your closing costs or down payment) or obtaining any money from another party, such as the seller or realtor, that you have not disclosed on this loan application? <span className="text-red-500 ml-1">*</span></p>
            <RadioGroup 
              className="flex flex-row justify-end space-x-8" 
              onValueChange={(value) => handleRadioChange('borrowingMoney', value)}
              value={formData.borrowingMoney === null ? undefined : formData.borrowingMoney ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="borrowingYes" />
                <Label htmlFor="borrowingYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="borrowingNo" />
                <Label htmlFor="borrowingNo">No</Label>
              </div>
            </RadioGroup>
            {errors.borrowingMoney && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.borrowingMoney}</span>
              </div>
            )}

            {formData.borrowingMoney && (
              <div className="mt-4 space-y-2">
                <Label htmlFor="moneyAmount" className="flex items-center">Amount of this money <span className="text-red-500 ml-1">*</span></Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
                  <Input 
                    id="moneyAmount" 
                    className={`pl-7 ${errors.moneyAmount ? 'border-red-500' : ''}`}
                    placeholder="0.00" 
                    value={formData.moneyAmount}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^\d.]/g, '');
                      handleInputChange('moneyAmount', value);
                    }}
                  />
                </div>
                {errors.moneyAmount && (
                  <div className="flex items-center mt-1 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{errors.moneyAmount}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Question D - Part 1 */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">D.</span> (1) Have you or will you be applying for a mortgage loan on another property (not the property securing this loan) on or before closing this transaction that is not disclosed on this loan application? <span className="text-red-500 ml-1">*</span></p>
            <RadioGroup 
              className="flex flex-row justify-end space-x-8" 
              onValueChange={(value) => handleRadioChange('mortgageLoanProperty', value)}
              value={formData.mortgageLoanProperty === null ? undefined : formData.mortgageLoanProperty ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="mortgageYes" />
                <Label htmlFor="mortgageYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="mortgageNo" />
                <Label htmlFor="mortgageNo">No</Label>
              </div>
            </RadioGroup>
            {errors.mortgageLoanProperty && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.mortgageLoanProperty}</span>
              </div>
            )}
          </div>

          {/* Question D - Part 2 */}
          <div className="space-y-4">
            <p className="font-medium">(2) Have you or will you be applying for any new credit (e.g., installment loan, credit card, etc.) on or before closing this loan that is not disclosed on this application? <span className="text-red-500 ml-1">*</span></p>
            <RadioGroup 
              className="flex flex-row justify-end space-x-8" 
              onValueChange={(value) => handleRadioChange('newCreditApplying', value)}
              value={formData.newCreditApplying === null ? undefined : formData.newCreditApplying ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="newCreditYes" />
                <Label htmlFor="newCreditYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="newCreditNo" />
                <Label htmlFor="newCreditNo">No</Label>
              </div>
            </RadioGroup>
            {errors.newCreditApplying && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.newCreditApplying}</span>
              </div>
            )}
          </div>

          {/* Question E */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">E.</span> Will this property be subject to a lien that could take priority over the first mortgage lien, such as a clean energy lien paid through your property taxes (e.g., the Property Assessed Clean Energy Program)? <span className="text-red-500 ml-1">*</span></p>
            <RadioGroup 
              className="flex flex-row justify-end space-x-8" 
              onValueChange={(value) => handleRadioChange('propertySubjectToLien', value)}
              value={formData.propertySubjectToLien === null ? undefined : formData.propertySubjectToLien ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="lienYes" />
                <Label htmlFor="lienYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="lienNo" />
                <Label htmlFor="lienNo">No</Label>
              </div>
            </RadioGroup>
            {errors.propertySubjectToLien && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.propertySubjectToLien}</span>
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

export default DeclarationsPropertyPage;
