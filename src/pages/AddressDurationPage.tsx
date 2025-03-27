
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { AlertCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AddressDurationPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [years, setYears] = useState<string>('');
  const [months, setMonths] = useState<string>('');
  const [errors, setErrors] = useState({
    years: '',
    months: ''
  });
  const [touched, setTouched] = useState({
    years: false,
    months: false
  });

  const validateField = (field: 'years' | 'months', value: string): string => {
    if (!value) {
      return field === 'years' ? 'Years are required' : 'Months are required';
    }
    return '';
  };

  const handleBlur = (field: 'years' | 'months') => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const value = field === 'years' ? years : months;
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const validateForm = () => {
    const yearsError = validateField('years', years);
    const monthsError = validateField('months', months);
    
    setErrors({
      years: yearsError,
      months: monthsError
    });
    
    setTouched({
      years: true,
      months: true
    });
    
    return !yearsError && !monthsError;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate('/property-relationship');
        setIsSubmitting(false);
      }, 500);
    } else {
      toast({
        title: "Please fix the errors",
        description: "Please select both years and months",
        variant: "destructive"
      });
    }
  };

  // Generate year options from 0 to 30
  const yearOptions = Array.from({ length: 31 }, (_, i) => (
    <SelectItem key={`year-${i}`} value={i.toString()}>
      {i} {i === 1 ? 'Year' : 'Years'}
    </SelectItem>
  ));

  // Generate month options from 0 to 11
  const monthOptions = Array.from({ length: 12 }, (_, i) => (
    <SelectItem key={`month-${i}`} value={i.toString()}>
      {i} {i === 1 ? 'Month' : 'Months'}
    </SelectItem>
  ));

  return (
    <Layout 
      currentStep={3} 
      totalSteps={10} 
      title="Personal Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          How long have you lived at the current address?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-10">
            <Label className="block mb-2 flex items-center">
              How long at Current Address? <span className="text-red-500 ml-1">*</span>
            </Label>
            <div className="flex gap-4">
              <div className="flex-1">
                <Select
                  value={years}
                  onValueChange={(value) => {
                    setYears(value);
                    if (touched.years) {
                      setErrors(prev => ({ ...prev, years: validateField('years', value) }));
                    }
                  }}
                  onOpenChange={() => {
                    if (!touched.years) {
                      setTouched(prev => ({ ...prev, years: true }));
                      setErrors(prev => ({ ...prev, years: validateField('years', years) }));
                    }
                  }}
                >
                  <SelectTrigger className={`w-full ${errors.years ? 'border-red-500 focus-ring-red-500' : ''}`}>
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {yearOptions}
                  </SelectContent>
                </Select>
                {errors.years && (
                  <div className="flex items-center mt-1 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{errors.years}</span>
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <Select
                  value={months}
                  onValueChange={(value) => {
                    setMonths(value);
                    if (touched.months) {
                      setErrors(prev => ({ ...prev, months: validateField('months', value) }));
                    }
                  }}
                  onOpenChange={() => {
                    if (!touched.months) {
                      setTouched(prev => ({ ...prev, months: true }));
                      setErrors(prev => ({ ...prev, months: validateField('months', months) }));
                    }
                  }}
                >
                  <SelectTrigger className={`w-full ${errors.months ? 'border-red-500 focus-ring-red-500' : ''}`}>
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {monthOptions}
                  </SelectContent>
                </Select>
                {errors.months && (
                  <div className="flex items-center mt-1 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{errors.months}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/current-address')}
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

export default AddressDurationPage;
