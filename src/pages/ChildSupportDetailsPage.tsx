
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const ChildSupportDetailsPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    monthlyAmount: '',
    yearsRemaining: ''
  });

  const [errors, setErrors] = useState({
    monthlyAmount: '',
    yearsRemaining: ''
  });

  const [touched, setTouched] = useState({
    monthlyAmount: false,
    yearsRemaining: false
  });

  const validateAmount = (value: string): string => {
    if (!value.trim()) {
      return 'Monthly amount is required';
    }
    if (parseFloat(value) <= 0) {
      return 'Amount must be greater than zero';
    }
    return '';
  };

  const validateYears = (value: string): string => {
    if (!value.trim()) {
      return 'Years remaining is required';
    }
    if (parseFloat(value) < 0) {
      return 'Years cannot be negative';
    }
    return '';
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    // Only allow numbers and a single decimal point
    if (value === '' || /^(\d+\.?\d*|\.\d+)$/.test(value)) {
      setFormData(prev => ({ ...prev, [field]: value }));
      
      if (touched[field]) {
        validateField(field, value);
      }
    }
  };

  const validateField = (field: keyof typeof errors, value: string) => {
    let error = '';
    
    switch (field) {
      case 'monthlyAmount':
        error = validateAmount(value);
        break;
      case 'yearsRemaining':
        error = validateYears(value);
        break;
      default:
        break;
    }
    
    setErrors(prev => ({ ...prev, [field]: error }));
    return error;
  };

  const handleBlur = (field: keyof typeof formData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field as keyof typeof errors, formData[field]);
  };

  const validateForm = () => {
    const newErrors = {
      monthlyAmount: validateAmount(formData.monthlyAmount),
      yearsRemaining: validateYears(formData.yearsRemaining)
    };
    
    setErrors(newErrors);
    setTouched({
      monthlyAmount: true,
      yearsRemaining: true
    });
    
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate('/add-more-income-sources');
        setIsSubmitting(false);
      }, 500);
    } else {
      toast({
        title: "Please fix the errors",
        description: "Please fill in all required fields correctly before continuing.",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout 
      currentStep={4} 
      totalSteps={10} 
      title="Employment"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-2xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Tell us about your child support income.
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-8">
          <div>
            <Label htmlFor="monthlyAmount" className="flex items-center">
              Monthly Amount Received <span className="text-red-500 ml-1">*</span>
            </Label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <Input
                id="monthlyAmount"
                placeholder="0.00"
                value={formData.monthlyAmount}
                onChange={(e) => handleChange('monthlyAmount', e.target.value)}
                onBlur={() => handleBlur('monthlyAmount')}
                className={`pl-8 ${errors.monthlyAmount ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              />
            </div>
            {errors.monthlyAmount && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.monthlyAmount}</span>
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="yearsRemaining" className="flex items-center">
              Years Remaining <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="yearsRemaining"
              placeholder="Years Remaining"
              value={formData.yearsRemaining}
              onChange={(e) => handleChange('yearsRemaining', e.target.value)}
              onBlur={() => handleBlur('yearsRemaining')}
              className={`mt-1 ${errors.yearsRemaining ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.yearsRemaining && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.yearsRemaining}</span>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/income-sources')}
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

export default ChildSupportDetailsPage;
