
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const PropertyDeclarationsPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    isPrimaryResidence: 'yes',
    hadOwnershipInterest: 'yes',
    propertyType: '',
    holdTitle: '',
    familyRelationship: 'no',
    borrowingMoney: 'yes',
    moneyAmount: '0.00',
    applyingForMortgage: 'no',
    applyingForCredit: 'no',
    subjectToLien: 'no'
  });

  const handleChange = (field: string, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    navigate('/finance-declarations');
  };

  return (
    <Layout 
      currentStep={8} 
      totalSteps={10} 
      title="Declarations"
    >
      <div className="flex flex-col items-start justify-start flex-grow w-full max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center w-full">
          About this property and your money with this loan
        </h1>
        
        <div className="w-full space-y-8">
          <div className="flex flex-col space-y-6">
            <div>
              <span className="font-medium mr-2">A.</span>
              <span>Will you occupy the property as your primary residence?</span>
              <div className="flex items-center space-x-4 mt-2 ml-4">
                <RadioGroup 
                  defaultValue={answers.isPrimaryResidence} 
                  onValueChange={(value) => handleChange('isPrimaryResidence', value)}
                  className="flex items-center space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="primary-yes" />
                    <Label htmlFor="primary-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="primary-no" />
                    <Label htmlFor="primary-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div>
              <span>Have you had an ownership interest in another property in the last three years?</span>
              <div className="flex items-center space-x-4 mt-2 ml-4">
                <RadioGroup 
                  defaultValue={answers.hadOwnershipInterest} 
                  onValueChange={(value) => handleChange('hadOwnershipInterest', value)}
                  className="flex items-center space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="ownership-yes" />
                    <Label htmlFor="ownership-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="ownership-no" />
                    <Label htmlFor="ownership-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="property-type">Type of Property</Label>
                <select 
                  id="property-type" 
                  className="w-full p-2 border border-gray-300 rounded-md mt-1"
                  value={answers.propertyType}
                  onChange={(e) => handleChange('propertyType', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="primary">Primary Residence</option>
                  <option value="secondary">Secondary Residence</option>
                  <option value="investment">Investment Property</option>
                </select>
              </div>

              <div>
                <Label htmlFor="hold-title">How did you hold title to the property?</Label>
                <select 
                  id="hold-title" 
                  className="w-full p-2 border border-gray-300 rounded-md mt-1"
                  value={answers.holdTitle}
                  onChange={(e) => handleChange('holdTitle', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="self">By Yourself</option>
                  <option value="jointly">Jointly with Spouse</option>
                  <option value="other">Jointly with Another Person</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <span className="font-medium mr-2">B.</span>
            <span>If this is a Purchase Transaction: Do you have a family relationship or business affiliation with the seller of the property?</span>
            <div className="flex items-center space-x-4 mt-2 ml-4">
              <RadioGroup 
                defaultValue={answers.familyRelationship} 
                onValueChange={(value) => handleChange('familyRelationship', value)}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="relationship-yes" />
                  <Label htmlFor="relationship-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="relationship-no" />
                  <Label htmlFor="relationship-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <span className="font-medium mr-2">C.</span>
              <span>Are you borrowing any money for this real estate transaction (e.g., money for your closing costs or down payment) or obtaining any money from another party, such as the seller or realtor, that you have not disclosed on this loan application?</span>
              <div className="flex items-center space-x-4 mt-2 ml-4">
                <RadioGroup 
                  defaultValue={answers.borrowingMoney} 
                  onValueChange={(value) => handleChange('borrowingMoney', value)}
                  className="flex items-center space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="borrowing-yes" />
                    <Label htmlFor="borrowing-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="borrowing-no" />
                    <Label htmlFor="borrowing-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {answers.borrowingMoney === 'yes' && (
              <div className="ml-4">
                <Label htmlFor="money-amount">Amount of this money</Label>
                <Input
                  id="money-amount"
                  type="text"
                  value={answers.moneyAmount}
                  onChange={(e) => handleChange('moneyAmount', e.target.value)}
                  className="w-full mt-1"
                />
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <span className="font-medium mr-2">D.</span>
              <span>(1) Have you or will you be applying for a mortgage loan on another property (not the property securing this loan) on or before closing this transaction that is not disclosed on this loan application?</span>
              <div className="flex items-center space-x-4 mt-2 ml-4">
                <RadioGroup 
                  defaultValue={answers.applyingForMortgage} 
                  onValueChange={(value) => handleChange('applyingForMortgage', value)}
                  className="flex items-center space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="mortgage-yes" />
                    <Label htmlFor="mortgage-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="mortgage-no" />
                    <Label htmlFor="mortgage-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div>
              <span>(2) Have you or will you be applying for any new credit (e.g., installment loan, credit card, etc.) on or before closing this loan that is not disclosed on this application?</span>
              <div className="flex items-center space-x-4 mt-2 ml-4">
                <RadioGroup 
                  defaultValue={answers.applyingForCredit} 
                  onValueChange={(value) => handleChange('applyingForCredit', value)}
                  className="flex items-center space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="credit-yes" />
                    <Label htmlFor="credit-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="credit-no" />
                    <Label htmlFor="credit-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          <div>
            <span className="font-medium mr-2">E.</span>
            <span>Will this property be subject to a lien that could take priority over the first mortgage lien, such as a clean energy lien paid through your property taxes (e.g., the Property Assessed Clean Energy Program)?</span>
            <div className="flex items-center space-x-4 mt-2 ml-4">
              <RadioGroup 
                defaultValue={answers.subjectToLien} 
                onValueChange={(value) => handleChange('subjectToLien', value)}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="lien-yes" />
                  <Label htmlFor="lien-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="lien-no" />
                  <Label htmlFor="lien-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full mt-8">
          <Button 
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          
          <Button 
            className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDeclarationsPage;
