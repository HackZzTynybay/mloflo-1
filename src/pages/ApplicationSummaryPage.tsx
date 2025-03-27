
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';

const ApplicationSummaryPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/application-finish');
  };

  const handleBack = () => {
    navigate('/declarations-finance');
  };

  return (
    <Layout 
      currentStep={9} 
      totalSteps={10}
      title="Summary" 
    >
      <div className="flex flex-col w-full max-w-4xl mx-auto py-8 px-4 sm:px-0">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Summary
        </h1>
        
        <div className="space-y-8">
          {/* Loan & Property Section */}
          <div>
            <h2 className="text-xl font-semibold text-mloflo-blue mb-4">Loan & Property</h2>
            <ul className="space-y-4 list-disc ml-6">
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">What type of loan are you looking for?</span>
                  <span>Purchase</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">What type of property are you looking for?</span>
                  <span>Single-family</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">How do you plan to occupy the property?</span>
                  <span>Primary Residence</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">How are you financing the property?</span>
                  <span>FHA Loan</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">Have you found the property?</span>
                  <span>Yes</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">What is the estimated purchase price?</span>
                  <span>$2300.00</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">How much are you putting down as a down payment?</span>
                  <span>$350</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Personal Information Section */}
          <div>
            <h2 className="text-xl font-semibold text-mloflo-blue mb-4">Personal Information</h2>
            <ul className="space-y-4">
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">Now let's learn a little bit more about you.</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                    <div>
                      <span className="text-sm text-gray-600">Name</span>
                      <p>John Doe</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Social Security Number</span>
                      <p>1223488882</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Date of Birth</span>
                      <p>06/10/1998</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Citizenship</span>
                      <p>Indian</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">How can we contact you?</span>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-2">
                    <div>
                      <span className="text-sm text-gray-600">Email Address</span>
                      <p>johndoe@mloflo.com</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Home Phone</span>
                      <p>8797277233</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Cell Phone</span>
                      <p>2234577732</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Work Phone</span>
                      <p>18692223356</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">Are you currently living at the address you are refinancing?</span>
                  <span>Yes</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">How long have you lived at the current address?</span>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <span className="text-sm text-gray-600">Year</span>
                      <p>12</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Month</span>
                      <p>7</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">What is your relationship with this property?</span>
                  <span>Rent</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">Do you have a mortgage associated with this property?</span>
                  <span>No</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">How much is your monthly rent?</span>
                  <span>$32.00</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">What is your previous address since your current address is less than 2 years?</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                    <div>
                      <span className="text-sm text-gray-600">City</span>
                      <p>Washington</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">State</span>
                      <p>Washington</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Apt./Unit</span>
                      <p>24441</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Zip Code</span>
                      <p>803213</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">Is your mailing address same as current?</span>
                  <span>Yes</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">What is your current marital status?</span>
                  <span>Married</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">How did you file your personal tax returns?</span>
                  <span>Separately</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">How many dependents do you have?</span>
                  <span>2</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">What are the ages of your dependents?</span>
                  <span>6 years old, 8 years old</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">Did you (or your deceased spouse) ever serve, or are you currently serving, in the United States Armed Forces?</span>
                  <span>Yes</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">Thank you for your service! Please select all that apply</span>
                  <span>Serving on active duty</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">What is the projected expiration date of service/tour?</span>
                  <span>02/10/2028</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Employment Section */}
          <div>
            <h2 className="text-xl font-semibold text-mloflo-blue mb-4">Employment</h2>
            <ul className="space-y-4 list-disc ml-6">
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">What is your current employment status?</span>
                  <span>Serving on active duty</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">Tell us about your current employment.</span>
                  <div className="mt-2">
                    <div>
                      <span className="text-sm text-gray-600">Employer Name</span>
                      <p>XYZ</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">Would you like to add any additional employment?</span>
                  <span>No</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">Please provide your previous employment.</span>
                  <span className="mt-2">Employed</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-10 space-x-4">
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

export default ApplicationSummaryPage;
