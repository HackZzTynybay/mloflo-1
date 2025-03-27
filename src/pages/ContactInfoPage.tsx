
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { AlertCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const ContactInfoPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    homePhone: '',
    cellPhone: '',
    workPhone: '',
    extension: '',
    email: ''
  });
  
  const [errors, setErrors] = useState({
    homePhone: '',
    cellPhone: '',
    workPhone: '',
    extension: '',
    email: ''
  });
  
  const [touched, setTouched] = useState({
    homePhone: false,
    cellPhone: false,
    workPhone: false,
    extension: false,
    email: false
  });

  const validatePhoneNumber = (value: string) => {
    if (!value) return '';
    
    // Remove all non-numeric characters to check length
    const cleanedNumber = value.replace(/\D/g, '');
    
    // Phone number should be 10 digits
    if (cleanedNumber.length !== 10) {
      return 'Phone number must be 10 digits';
    }
    
    return '';
  };

  const validateEmail = (value: string) => {
    if (!value) return 'Email is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    
    return '';
  };

  const validateExtension = (value: string) => {
    if (!value) return '';
    
    // Extension should only contain numbers
    if (!/^\d+$/.test(value)) {
      return 'Extension should only contain numbers';
    }
    
    return '';
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    // Specific validation for extension - only allow numbers
    if (field === 'extension') {
      if (value === '' || /^\d*$/.test(value)) {
        setFormData(prev => ({ ...prev, [field]: value }));
      }
      return;
    }

    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (touched[field]) {
      validateField(field, value);
    }
  };

  const validateField = (field: keyof typeof formData, value: string) => {
    let error = '';
    
    switch (field) {
      case 'email':
        error = validateEmail(value);
        break;
      case 'homePhone':
      case 'cellPhone':
      case 'workPhone':
        error = validatePhoneNumber(value);
        break;
      case 'extension':
        error = validateExtension(value);
        break;
      default:
        break;
    }
    
    setErrors(prev => ({ ...prev, [field]: error }));
    return error;
  };

  const handleBlur = (field: keyof typeof formData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    // Format phone numbers on blur
    if (field === 'homePhone' || field === 'cellPhone' || field === 'workPhone') {
      const formattedValue = formatPhoneNumber(formData[field]);
      setFormData(prev => ({ ...prev, [field]: formattedValue }));
    }
    
    validateField(field, formData[field]);
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const cleaned = value.replace(/\D/g, '');
    
    // Format as (XXX) XXX-XXXX
    if (cleaned.length >= 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    } else if (cleaned.length >= 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    } else if (cleaned.length >= 3) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    }
    
    return cleaned;
  };

  const handlePhoneChange = (field: 'homePhone' | 'cellPhone' | 'workPhone', e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // Only allow digits, parentheses, spaces, and hyphens
    if (input === '' || /^[\d()\-\s]*$/.test(input)) {
      handleChange(field, input);
    }
  };

  const validateForm = () => {
    // Always require email and at least one phone number
    const newErrors = { ...errors };
    const hasAtLeastOnePhone = formData.homePhone || formData.cellPhone || formData.workPhone;
    
    newErrors.email = validateEmail(formData.email);
    
    if (!hasAtLeastOnePhone) {
      // Highlight the first empty phone field
      if (!formData.cellPhone) {
        newErrors.cellPhone = 'At least one phone number is required';
      } else if (!formData.homePhone) {
        newErrors.homePhone = 'At least one phone number is required';
      } else {
        newErrors.workPhone = 'At least one phone number is required';
      }
    } else {
      // Validate provided phone numbers
      if (formData.homePhone) newErrors.homePhone = validatePhoneNumber(formData.homePhone);
      if (formData.cellPhone) newErrors.cellPhone = validatePhoneNumber(formData.cellPhone);
      if (formData.workPhone) newErrors.workPhone = validatePhoneNumber(formData.workPhone);
    }
    
    if (formData.extension) {
      newErrors.extension = validateExtension(formData.extension);
    }
    
    setErrors(newErrors);
    setTouched({
      homePhone: true,
      cellPhone: true,
      workPhone: true,
      extension: true,
      email: true
    });
    
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate('/current-address');
        setIsSubmitting(false);
      }, 500);
    } else {
      toast({
        title: "Please fix the errors",
        description: "Please correct the highlighted fields before continuing.",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout 
      currentStep={3} 
      totalSteps={10} 
      title="Personal Information"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          How can we contact you?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="mb-4">
            <Label htmlFor="cellPhone" className="flex items-center">
              Cell Phone <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="cellPhone"
              placeholder="(000) 000-0000"
              value={formData.cellPhone}
              onChange={(e) => handlePhoneChange('cellPhone', e)}
              onBlur={() => handleBlur('cellPhone')}
              className={`mt-1 ${errors.cellPhone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.cellPhone && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.cellPhone}</span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="homePhone">Home Phone</Label>
            <Input
              id="homePhone"
              placeholder="(000) 000-0000"
              value={formData.homePhone}
              onChange={(e) => handlePhoneChange('homePhone', e)}
              onBlur={() => handleBlur('homePhone')}
              className={`mt-1 ${errors.homePhone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.homePhone && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.homePhone}</span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="workPhone">Work Phone</Label>
            <Input
              id="workPhone"
              placeholder="(000) 000-0000"
              value={formData.workPhone}
              onChange={(e) => handlePhoneChange('workPhone', e)}
              onBlur={() => handleBlur('workPhone')}
              className={`mt-1 ${errors.workPhone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.workPhone && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.workPhone}</span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="extension">Work Phone Extension</Label>
            <Input
              id="extension"
              placeholder="Work Phone Extension"
              value={formData.extension}
              onChange={(e) => handleChange('extension', e.target.value)}
              onBlur={() => handleBlur('extension')}
              className={`mt-1 ${errors.extension ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.extension && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.extension}</span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="email" className="flex items-center">
              Email Address <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              className={`mt-1 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              type="email"
            />
            {errors.email && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/personal-info')}
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

export default ContactInfoPage;
