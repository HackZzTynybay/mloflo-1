
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from "@/components/ui/label";

const DeclarationsPage = () => {
  const navigate = useNavigate();
  const [declarations, setDeclarations] = useState({
    bankruptcy: false,
    foreclosure: false,
    lawsuit: false,
    loanDefault: false,
    childSupport: false,
    taxLien: false,
    usCitizen: true,
    primaryResidence: true,
  });

  const handleCheckboxChange = (name: string) => {
    setDeclarations({
      ...declarations,
      [name]: !declarations[name as keyof typeof declarations],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/review-submit');
  };

  return (
    <Layout 
      currentStep={6} 
      totalSteps={10} 
      title="Declarations"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-2xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Please answer the following questions
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="bankruptcy"
                checked={declarations.bankruptcy}
                onCheckedChange={() => handleCheckboxChange('bankruptcy')}
                className="mt-1"
              />
              <div>
                <Label htmlFor="bankruptcy" className="text-base font-normal">
                  Have you declared bankruptcy within the past 7 years?
                </Label>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="foreclosure"
                checked={declarations.foreclosure}
                onCheckedChange={() => handleCheckboxChange('foreclosure')}
                className="mt-1"
              />
              <div>
                <Label htmlFor="foreclosure" className="text-base font-normal">
                  Have you had a property foreclosed upon in the last 7 years?
                </Label>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="lawsuit"
                checked={declarations.lawsuit}
                onCheckedChange={() => handleCheckboxChange('lawsuit')}
                className="mt-1"
              />
              <div>
                <Label htmlFor="lawsuit" className="text-base font-normal">
                  Are you a party to a lawsuit?
                </Label>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="loanDefault"
                checked={declarations.loanDefault}
                onCheckedChange={() => handleCheckboxChange('loanDefault')}
                className="mt-1"
              />
              <div>
                <Label htmlFor="loanDefault" className="text-base font-normal">
                  Have you directly or indirectly been obligated on any loan which resulted in default?
                </Label>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="childSupport"
                checked={declarations.childSupport}
                onCheckedChange={() => handleCheckboxChange('childSupport')}
                className="mt-1"
              />
              <div>
                <Label htmlFor="childSupport" className="text-base font-normal">
                  Are you presently delinquent or in default on any Federal debt, child support or alimony payments?
                </Label>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="taxLien"
                checked={declarations.taxLien}
                onCheckedChange={() => handleCheckboxChange('taxLien')}
                className="mt-1"
              />
              <div>
                <Label htmlFor="taxLien" className="text-base font-normal">
                  Are there any outstanding judgments or tax liens against you?
                </Label>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="usCitizen"
                checked={declarations.usCitizen}
                onCheckedChange={() => handleCheckboxChange('usCitizen')}
                className="mt-1"
              />
              <div>
                <Label htmlFor="usCitizen" className="text-base font-normal">
                  Are you a U.S. citizen or permanent resident?
                </Label>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="primaryResidence"
                checked={declarations.primaryResidence}
                onCheckedChange={() => handleCheckboxChange('primaryResidence')}
                className="mt-1"
              />
              <div>
                <Label htmlFor="primaryResidence" className="text-base font-normal">
                  Will you occupy the property as your primary residence?
                </Label>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/assets-information')}
            >
              Back
            </Button>
            
            <Button 
              type="submit"
              className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default DeclarationsPage;
