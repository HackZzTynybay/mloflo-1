
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { AlertCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const PurchasePricePage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const validatePrice = (value: string): string => {
    if (!value || parseFloat(value) === 0) {
      return 'Purchase price is required';
    }
    if (parseFloat(value) < 0) {
      return 'Purchase price cannot be negative';
    }
    return '';
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, '');
    
    // Prevent multiple decimal points
    if ((value.match(/\./g) || []).length > 1) return;
    
    // Prevent more than 2 decimal places
    const parts = value.split('.');
    if (parts.length > 1 && parts[1].length > 2) return;
    
    setPrice(value);
    
    if (touched) {
      setError(validatePrice(value));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validatePrice(price));
  };

  const formattedPrice = price ? `$${parseFloat(price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '$0.00';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validatePrice(price);
    setError(validationError);
    setTouched(true);
    
    if (!validationError) {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate('/down-payment');
        setIsSubmitting(false);
      }, 500);
    } else {
      toast({
        title: "Please fix the error",
        description: "Please enter a valid purchase price",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout 
      currentStep={10} 
      totalSteps={10} 
      title="Loan & Property"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          What is the estimated purchase price?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <Label htmlFor="price" className="flex items-center">
              Purchase Price <span className="text-red-500 ml-1">*</span>
            </Label>
            <div className="relative">
              <Input
                id="price"
                placeholder="$0.00"
                value={price}
                onChange={handlePriceChange}
                onBlur={handleBlur}
                className={`mt-1 ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              />
            </div>
            {error && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{error}</span>
              </div>
            )}
            {!error && price && (
              <p className="text-sm text-gray-500 mt-1">
                {formattedPrice}
              </p>
            )}
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/property-address')}
              disabled={isSubmitting}
            >
              Back
            </Button>
            
            <Button 
              type="submit"
              className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Next"}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default PurchasePricePage;
