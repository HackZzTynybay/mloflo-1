
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import YesIcon from '../components/icons/YesIcon';
import NoIcon from '../components/icons/NoIcon';
import SelectionCard from '@/components/SelectionCard';
import { toast } from "@/components/ui/use-toast";

const DependentsQuestionPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setError('');
  };

  const handleNext = () => {
    if (!selectedOption) {
      setError('Please select an option');
      toast({
        title: "Selection Required",
        description: "Please select Yes or No to continue",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      if (selectedOption === 'yes') {
        navigate('/dependents-count');
      } else {
        navigate('/military-service');
      }
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <Layout 
      currentStep={3} 
      totalSteps={10} 
      title="Personal Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Do you have any dependents?
        </h1>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md text-center w-full max-w-xl">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl mx-auto mb-10">
          <SelectionCard
            title="Yes"
            icon={<YesIcon selected={selectedOption === 'yes'} />}
            selected={selectedOption === 'yes'}
            onClick={() => handleOptionClick('yes')}
          />
          <SelectionCard
            title="No"
            icon={<NoIcon selected={selectedOption === 'no'} />}
            selected={selectedOption === 'no'}
            onClick={() => handleOptionClick('no')}
          />
        </div>

        <div className="flex justify-center mt-auto">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/tax-filing-status')}
            disabled={isSubmitting}
          >
            Back
          </Button>
          
          <Button 
            className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
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

export default DependentsQuestionPage;
