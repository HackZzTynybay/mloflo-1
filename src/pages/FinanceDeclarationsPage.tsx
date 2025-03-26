
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

const FinanceDeclarationsPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    cosigner: 'no',
    judgments: 'no',
    delinquent: 'no',
    lawsuit: 'no',
    conveyedTitle: 'no',
    preForeclosure: 'no',
    foreclosed: 'no',
    bankruptcy: 'yes',
    bankruptcyTypes: {
      chapter7: false,
      chapter11: true,
      chapter12: false,
      chapter13: false,
    }
  });

  const handleChange = (field: string, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const handleBankruptcyTypeChange = (type: string, checked: boolean) => {
    setAnswers(prev => ({
      ...prev,
      bankruptcyTypes: {
        ...prev.bankruptcyTypes,
        [type]: checked
      }
    }));
  };

  const handleNext = () => {
    navigate('/finish');
  };

  return (
    <Layout 
      currentStep={8} 
      totalSteps={10} 
      title="Declarations"
    >
      <div className="flex flex-col items-start justify-start flex-grow w-full max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center w-full">
          About your finances
        </h1>
        
        <div className="w-full space-y-8">
          <div>
            <span className="font-medium mr-2">A.</span>
            <span>Are you a co-signer or guarantor on any debt or loan that is not disclosed on this application?</span>
            <div className="flex items-center space-x-4 mt-2 ml-4">
              <RadioGroup 
                defaultValue={answers.cosigner} 
                onValueChange={(value) => handleChange('cosigner', value)}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="cosigner-yes" />
                  <Label htmlFor="cosigner-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="cosigner-no" />
                  <Label htmlFor="cosigner-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div>
            <span className="font-medium mr-2">B.</span>
            <span>Are there any outstanding judgments against you?</span>
            <div className="flex items-center space-x-4 mt-2 ml-4">
              <RadioGroup 
                defaultValue={answers.judgments} 
                onValueChange={(value) => handleChange('judgments', value)}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="judgments-yes" />
                  <Label htmlFor="judgments-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="judgments-no" />
                  <Label htmlFor="judgments-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div>
            <span className="font-medium mr-2">C.</span>
            <span>Are you currently delinquent or in default on a Federal debt?</span>
            <div className="flex items-center space-x-4 mt-2 ml-4">
              <RadioGroup 
                defaultValue={answers.delinquent} 
                onValueChange={(value) => handleChange('delinquent', value)}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="delinquent-yes" />
                  <Label htmlFor="delinquent-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="delinquent-no" />
                  <Label htmlFor="delinquent-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div>
            <span className="font-medium mr-2">D.</span>
            <span>Are you a party to a lawsuit in which you potentially have any personal financial liability?</span>
            <div className="flex items-center space-x-4 mt-2 ml-4">
              <RadioGroup 
                defaultValue={answers.lawsuit} 
                onValueChange={(value) => handleChange('lawsuit', value)}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="lawsuit-yes" />
                  <Label htmlFor="lawsuit-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="lawsuit-no" />
                  <Label htmlFor="lawsuit-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div>
            <span className="font-medium mr-2">E.</span>
            <span>Have you conveyed title to any property in lieu of foreclosure in the past 7 years?</span>
            <div className="flex items-center space-x-4 mt-2 ml-4">
              <RadioGroup 
                defaultValue={answers.conveyedTitle} 
                onValueChange={(value) => handleChange('conveyedTitle', value)}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="conveyedTitle-yes" />
                  <Label htmlFor="conveyedTitle-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="conveyedTitle-no" />
                  <Label htmlFor="conveyedTitle-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div>
            <span className="font-medium mr-2">F.</span>
            <span>Within the past 7 years, have you completed a pre-foreclosure sale or short sale, whereby the property was sold to a third party and the Lender agreed to accept less than the outstanding mortgage balance due?</span>
            <div className="flex items-center space-x-4 mt-2 ml-4">
              <RadioGroup 
                defaultValue={answers.preForeclosure} 
                onValueChange={(value) => handleChange('preForeclosure', value)}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="preForeclosure-yes" />
                  <Label htmlFor="preForeclosure-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="preForeclosure-no" />
                  <Label htmlFor="preForeclosure-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div>
            <span className="font-medium mr-2">G.</span>
            <span>Have you had property foreclosed upon in the last 7 years?</span>
            <div className="flex items-center space-x-4 mt-2 ml-4">
              <RadioGroup 
                defaultValue={answers.foreclosed} 
                onValueChange={(value) => handleChange('foreclosed', value)}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="foreclosed-yes" />
                  <Label htmlFor="foreclosed-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="foreclosed-no" />
                  <Label htmlFor="foreclosed-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <span className="font-medium mr-2">H.</span>
              <span>Have you declared bankruptcy within the past 7 years?</span>
              <div className="flex items-center space-x-4 mt-2 ml-4">
                <RadioGroup 
                  defaultValue={answers.bankruptcy} 
                  onValueChange={(value) => handleChange('bankruptcy', value)}
                  className="flex items-center space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="bankruptcy-yes" />
                    <Label htmlFor="bankruptcy-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="bankruptcy-no" />
                    <Label htmlFor="bankruptcy-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {answers.bankruptcy === 'yes' && (
              <div className="ml-4">
                <span>Identify the type(s) of bankruptcy:</span>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="chapter7" 
                      checked={answers.bankruptcyTypes.chapter7}
                      onCheckedChange={(checked) => handleBankruptcyTypeChange('chapter7', checked === true)} 
                    />
                    <Label htmlFor="chapter7">Chapter 7</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="chapter11" 
                      checked={answers.bankruptcyTypes.chapter11}
                      onCheckedChange={(checked) => handleBankruptcyTypeChange('chapter11', checked === true)} 
                    />
                    <Label htmlFor="chapter11">Chapter 11</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="chapter12" 
                      checked={answers.bankruptcyTypes.chapter12}
                      onCheckedChange={(checked) => handleBankruptcyTypeChange('chapter12', checked === true)} 
                    />
                    <Label htmlFor="chapter12">Chapter 12</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="chapter13" 
                      checked={answers.bankruptcyTypes.chapter13}
                      onCheckedChange={(checked) => handleBankruptcyTypeChange('chapter13', checked === true)} 
                    />
                    <Label htmlFor="chapter13">Chapter 13</Label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center w-full mt-8">
          <Button 
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/property-declarations')}
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

export default FinanceDeclarationsPage;
