
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import NumberSvg from '../components/NumberSvg';
import { Button } from '@/components/ui/button';
import { toast } from "@/components/ui/use-toast";
import { AlertCircle } from 'lucide-react';

const BorrowersPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const handleSelect = (number: number) => {
    setSelectedOption(number);
    setError('');
  };
  
  const handleNext = () => {
    if (selectedOption !== null) {
      setIsSubmitting(true);
      // Simulate brief loading for better UX
      setTimeout(() => {
        navigate(`/co-borrower?count=${selectedOption}`);
        setIsSubmitting(false);
      }, 300);
    } else {
      setError('Please select the number of borrowers');
      toast({
        title: "Selection Required",
        description: "Please select the number of borrowers",
        variant: "destructive",
      });
    }
  };
  
  return (
    <Layout currentStep={1} totalSteps={10} title="Welcome">
      <div className="flex flex-col items-center justify-between flex-grow w-full max-w-4xl mx-auto py-8">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-12 text-center">
            How many borrowers will fill the application?
          </h1>
          
          {error && (
            <div className="flex items-center justify-center mb-4 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{error}</span>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div 
              className={`cursor-pointer border-2 rounded-lg p-4 flex flex-col items-center justify-center transition-colors ${
                selectedOption === 1 ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleSelect(1)}
              role="button"
              aria-pressed={selectedOption === 1}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(1)}
            >
              <NumberSvg number={1} selected={selectedOption === 1} />
              <div className="mt-4 text-center">
                <p className="font-medium">Borrower</p>
                <p className="text-sm text-gray-500">(My Self)</p>
              </div>
            </div>
            
            <div 
              className={`cursor-pointer border-2 rounded-lg p-4 flex flex-col items-center justify-center transition-colors ${
                selectedOption === 2 ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleSelect(2)}
              role="button"
              aria-pressed={selectedOption === 2}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(2)}
            >
              <NumberSvg number={2} selected={selectedOption === 2} />
              <div className="mt-4 text-center">
                <p className="font-medium">Borrowers</p>
              </div>
            </div>
            
            <div 
              className={`cursor-pointer border-2 rounded-lg p-4 flex flex-col items-center justify-center transition-colors ${
                selectedOption === 3 ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleSelect(3)}
              role="button"
              aria-pressed={selectedOption === 3}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(3)}
            >
              <NumberSvg number={3} selected={selectedOption === 3} />
              <div className="mt-4 text-center">
                <p className="font-medium">Borrowers</p>
              </div>
            </div>
            
            <div 
              className={`cursor-pointer border-2 rounded-lg p-4 flex flex-col items-center justify-center transition-colors ${
                selectedOption === 4 ? 'border-mloflo-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleSelect(4)}
              role="button"
              aria-pressed={selectedOption === 4}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(4)}
            >
              <NumberSvg number={4} selected={selectedOption === 4} />
              <div className="mt-4 text-center">
                <p className="font-medium">Borrowers</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-auto mb-4 w-full">
          <Button 
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/')}
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

export default BorrowersPage;
