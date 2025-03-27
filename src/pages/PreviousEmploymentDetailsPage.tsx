
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CalendarIcon, AlertCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const PreviousEmploymentDetailsPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    employerName: '',
    position: '',
    startDate: '',
    endDate: ''
  });

  const [errors, setErrors] = useState({
    employerName: '',
    position: '',
    startDate: '',
    endDate: ''
  });

  const [touched, setTouched] = useState({
    employerName: false,
    position: false,
    startDate: false,
    endDate: false
  });

  const validateRequired = (value: string, fieldName: string): string => {
    if (!value.trim()) return `${fieldName} is required`;
    return "";
  };

  const validateDate = (value: string): string => {
    if (!value.trim()) return "Date is required";
    
    // Check date format (MM-DD-YYYY)
    if (!/^\d{2}-\d{2}-\d{4}$/.test(value)) {
      return "Please use MM-DD-YYYY format";
    }
    
    // Parse the date
    const [month, day, year] = value.split('-').map(Number);
    
    // Basic validation
    if (month < 1 || month > 12) return "Invalid month";
    if (day < 1 || day > 31) return "Invalid day";
    
    const currentYear = new Date().getFullYear();
    if (year < currentYear - 100 || year > currentYear) {
      return "Invalid year";
    }
    
    // Create Date object to check if the date is valid
    const dateObj = new Date(year, month - 1, day);
    if (dateObj.getMonth() !== month - 1 || dateObj.getDate() !== day) {
      return "Invalid date";
    }
    
    return "";
  };

  const validateDateRange = (startDate: string, endDate: string): string => {
    if (!startDate || !endDate) return "";
    
    // If both dates are valid format
    if (!/^\d{2}-\d{2}-\d{4}$/.test(startDate) || !/^\d{2}-\d{2}-\d{4}$/.test(endDate)) {
      return "";
    }
    
    // Parse dates
    const [startMonth, startDay, startYear] = startDate.split('-').map(Number);
    const [endMonth, endDay, endYear] = endDate.split('-').map(Number);
    
    const start = new Date(startYear, startMonth - 1, startDay);
    const end = new Date(endYear, endMonth - 1, endDay);
    
    if (end < start) {
      return "End date cannot be before start date";
    }
    
    return "";
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    // For text fields, validate input type
    if (field === 'employerName' || field === 'position') {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
    
    // For dates, format as MM-DD-YYYY and only allow numbers and dashes
    if (field === 'startDate' || field === 'endDate') {
      if (value === '' || /^[\d-]*$/.test(value)) {
        // Format as MM-DD-YYYY
        const digits = value.replace(/\D/g, '');
        let formattedDate = '';
        
        if (digits.length > 0) {
          formattedDate = digits.slice(0, 2);
          if (digits.length > 2) {
            formattedDate += '-' + digits.slice(2, 4);
          }
          if (digits.length > 4) {
            formattedDate += '-' + digits.slice(4, 8);
          }
        }
        
        setFormData(prev => ({ ...prev, [field]: formattedDate }));
      }
      return;
    }
  };

  const validateField = (field: keyof typeof errors, value: string) => {
    let error = '';
    
    switch (field) {
      case 'employerName':
        error = validateRequired(value, 'Employer Name');
        break;
      case 'position':
        error = validateRequired(value, 'Position');
        break;
      case 'startDate':
        error = validateDate(value);
        break;
      case 'endDate':
        error = validateDate(value);
        if (!error && formData.startDate) {
          error = validateDateRange(formData.startDate, value);
        }
        break;
      default:
        break;
    }
    
    setErrors(prev => ({ ...prev, [field]: error }));
    return error;
  };

  const handleBlur = (field: keyof typeof formData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  const validateForm = () => {
    const newErrors = {
      employerName: validateRequired(formData.employerName, 'Employer Name'),
      position: validateRequired(formData.position, 'Position'),
      startDate: validateDate(formData.startDate),
      endDate: validateDate(formData.endDate)
    };
    
    // Check date range only if individual dates are valid
    if (!newErrors.startDate && !newErrors.endDate) {
      const rangeError = validateDateRange(formData.startDate, formData.endDate);
      if (rangeError) {
        newErrors.endDate = rangeError;
      }
    }
    
    setErrors(newErrors);
    setTouched({
      employerName: true,
      position: true,
      startDate: true,
      endDate: true
    });
    
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate('/additional-income');
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
          Add previous employment details.
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <Label htmlFor="employerName" className="flex items-center">
              Employer Name <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="employerName"
              placeholder="Employer Name"
              value={formData.employerName}
              onChange={(e) => handleChange('employerName', e.target.value)}
              onBlur={() => handleBlur('employerName')}
              className={`mt-1 ${errors.employerName ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.employerName && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.employerName}</span>
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="position" className="flex items-center">
              Position or Title <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="position"
              placeholder="Position or Title"
              value={formData.position}
              onChange={(e) => handleChange('position', e.target.value)}
              onBlur={() => handleBlur('position')}
              className={`mt-1 ${errors.position ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.position && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.position}</span>
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="startDate" className="flex items-center">
              Start Date <span className="text-red-500 ml-1">*</span>
            </Label>
            <div className="relative">
              <Input
                id="startDate"
                placeholder="MM-DD-YYYY"
                value={formData.startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
                onBlur={() => handleBlur('startDate')}
                className={`mt-1 pr-10 ${errors.startDate ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <CalendarIcon size={18} />
              </div>
            </div>
            {errors.startDate && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.startDate}</span>
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="endDate" className="flex items-center">
              End Date <span className="text-red-500 ml-1">*</span>
            </Label>
            <div className="relative">
              <Input
                id="endDate"
                placeholder="MM-DD-YYYY"
                value={formData.endDate}
                onChange={(e) => handleChange('endDate', e.target.value)}
                onBlur={() => handleBlur('endDate')}
                className={`mt-1 pr-10 ${errors.endDate ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <CalendarIcon size={18} />
              </div>
            </div>
            {errors.endDate && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.endDate}</span>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/previous-employment-type')}
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

export default PreviousEmploymentDetailsPage;
