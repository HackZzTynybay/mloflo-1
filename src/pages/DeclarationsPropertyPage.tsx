
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DeclarationsPropertyPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    occupyAsPrimary: null,
    ownershipInterest: null,
    propertyType: '',
    holdTitle: '',
    familyRelationship: null,
    borrowingMoney: null,
    moneyAmount: '',
    mortgageLoanProperty: null,
    newCreditApplying: null,
    propertySubjectToLien: null
  });

  const handleRadioChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value === 'yes' }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    navigate('/declarations-finance');
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
            <p className="font-medium flex"><span className="mr-3">A.</span> Will you occupy the property as your primary residence?</p>
            <RadioGroup className="flex flex-row justify-end space-x-8" onValueChange={(value) => handleRadioChange('occupyAsPrimary', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="occupyYes" />
                <Label htmlFor="occupyYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="occupyNo" />
                <Label htmlFor="occupyNo">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question about ownership interest */}
          <div className="space-y-4">
            <p className="font-medium">Have you had an ownership interest in another property in the last three years?</p>
            <RadioGroup className="flex flex-row justify-end space-x-8" onValueChange={(value) => handleRadioChange('ownershipInterest', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="ownershipYes" />
                <Label htmlFor="ownershipYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="ownershipNo" />
                <Label htmlFor="ownershipNo">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Property Type */}
          <div className="space-y-4">
            <Label htmlFor="propertyType">Type of Property</Label>
            <Select onValueChange={(value) => handleInputChange('propertyType', value)}>
              <SelectTrigger id="propertyType" className="w-full">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="primary-residence">Primary Residence</SelectItem>
                <SelectItem value="secondary-residence">Secondary Residence</SelectItem>
                <SelectItem value="investment">Investment Property</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Hold Title */}
          <div className="space-y-4">
            <Label htmlFor="holdTitle">How did you hold title to the property?</Label>
            <Select onValueChange={(value) => handleInputChange('holdTitle', value)}>
              <SelectTrigger id="holdTitle" className="w-full">
                <SelectValue placeholder="Select how you held title" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="by-yourself">By Yourself</SelectItem>
                <SelectItem value="jointly">Jointly with Spouse</SelectItem>
                <SelectItem value="jointly-other">Jointly with Another Person</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Question B */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">B.</span> If this is a Purchase Transaction: Do you have a family relationship or business affiliation with the seller of the property?</p>
            <RadioGroup className="flex flex-row justify-end space-x-8" onValueChange={(value) => handleRadioChange('familyRelationship', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="familyYes" />
                <Label htmlFor="familyYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="familyNo" />
                <Label htmlFor="familyNo">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question C */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">C.</span> Are you borrowing any money for this real estate transaction (e.g., money for your closing costs or down payment) or obtaining any money from another party, such as the seller or realtor, that you have not disclosed on this loan application?</p>
            <RadioGroup className="flex flex-row justify-end space-x-8" onValueChange={(value) => handleRadioChange('borrowingMoney', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="borrowingYes" />
                <Label htmlFor="borrowingYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="borrowingNo" />
                <Label htmlFor="borrowingNo">No</Label>
              </div>
            </RadioGroup>

            {formData.borrowingMoney && (
              <div className="mt-4 space-y-2">
                <Label htmlFor="moneyAmount">Amount of this money</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
                  <Input 
                    id="moneyAmount" 
                    className="pl-7" 
                    placeholder="0.00" 
                    value={formData.moneyAmount}
                    onChange={(e) => handleInputChange('moneyAmount', e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Question D - Part 1 */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">D.</span> (1) Have you or will you be applying for a mortgage loan on another property (not the property securing this loan) on or before closing this transaction that is not disclosed on this loan application?</p>
            <RadioGroup className="flex flex-row justify-end space-x-8" onValueChange={(value) => handleRadioChange('mortgageLoanProperty', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="mortgageYes" />
                <Label htmlFor="mortgageYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="mortgageNo" />
                <Label htmlFor="mortgageNo">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question D - Part 2 */}
          <div className="space-y-4">
            <p className="font-medium">(2) Have you or will you be applying for any new credit (e.g., installment loan, credit card, etc.) on or before closing this loan that is not disclosed on this application?</p>
            <RadioGroup className="flex flex-row justify-end space-x-8" onValueChange={(value) => handleRadioChange('newCreditApplying', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="newCreditYes" />
                <Label htmlFor="newCreditYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="newCreditNo" />
                <Label htmlFor="newCreditNo">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question E */}
          <div className="space-y-4">
            <p className="font-medium flex"><span className="mr-3">E.</span> Will this property be subject to a lien that could take priority over the first mortgage lien, such as a clean energy lien paid through your property taxes (e.g., the Property Assessed Clean Energy Program)?</p>
            <RadioGroup className="flex flex-row justify-end space-x-8" onValueChange={(value) => handleRadioChange('propertySubjectToLien', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="lienYes" />
                <Label htmlFor="lienYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="lienNo" />
                <Label htmlFor="lienNo">No</Label>
              </div>
            </RadioGroup>
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

export default DeclarationsPropertyPage;
