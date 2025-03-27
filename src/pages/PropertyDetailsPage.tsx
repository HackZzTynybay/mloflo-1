
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, AlertCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const PropertyDetailsPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    propertyAddress: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const [errors, setErrors] = useState({
    propertyAddress: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const [touched, setTouched] = useState({
    propertyAddress: false,
    city: false,
    state: false,
    zipCode: false
  });

  const validateRequired = (value: string, fieldName: string): string => {
    if (!value.trim()) return `${fieldName} is required`;
    return "";
  };

  const validateState = (value: string): string => {
    if (!value.trim()) return "State is required";
    if (value.length > 2) return "Please use state abbreviation (e.g., CA)";
    if (!/^[A-Za-z]+$/.test(value)) return "State cannot contain numbers or special characters";
    return "";
  };

  const validateZipCode = (value: string): string => {
    if (!value.trim()) return "Zip Code is required";
    if (!/^\d{5}(-\d{4})?$/.test(value)) return "Please enter a valid 5-digit zip code";
    return "";
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    // For text fields, validate input type
    if (field === 'city' || field === 'state') {
      // Only allow letters, spaces, hyphens for city/state
      if (value === '' || /^[A-Za-z\s\-]*$/.test(value)) {
        setFormData(prev => ({ ...prev, [field]: value }));
      }
      return;
    }
    
    // For zip code, only allow numbers and dash
    if (field === 'zipCode') {
      if (value === '' || /^[\d-]*$/.test(value)) {
        setFormData(prev => ({ ...prev, [field]: value }));
      }
      return;
    }
    
    // For other fields
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (touched[field]) {
      validateField(field, value);
    }
  };

  const validateField = (field: keyof typeof errors, value: string) => {
    let error = '';
    
    switch (field) {
      case 'propertyAddress':
        error = validateRequired(value, 'Property Address');
        break;
      case 'city':
        error = validateRequired(value, 'City');
        break;
      case 'state':
        error = validateState(value);
        break;
      case 'zipCode':
        error = validateZipCode(value);
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
      propertyAddress: validateRequired(formData.propertyAddress, 'Property Address'),
      city: validateRequired(formData.city, 'City'),
      state: validateState(formData.state),
      zipCode: validateZipCode(formData.zipCode)
    };
    
    setErrors(newErrors);
    setTouched({
      propertyAddress: true,
      city: true,
      state: true,
      zipCode: true
    });
    
    return !Object.values(newErrors).some(error => error);
  };

  const handleNext = () => {
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate('/demographic-ethnicity');
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
      currentStep={6} 
      totalSteps={10}
      title="Real Estate" 
    >
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Please provide property details
        </h1>
        
        <div className="w-full max-w-md mx-auto">
          <div className="mb-6">
            <Label htmlFor="propertyAddress" className="flex items-center">
              Property Address <span className="text-red-500 ml-1">*</span>
            </Label>
            <div className="relative">
              <Input 
                id="propertyAddress"
                type="text" 
                placeholder="Property Address"
                value={formData.propertyAddress}
                onChange={(e) => handleChange('propertyAddress', e.target.value)}
                onBlur={() => handleBlur('propertyAddress')}
                className={`w-full pr-10 ${errors.propertyAddress ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <MapPin size={18} />
              </div>
            </div>
            {errors.propertyAddress && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.propertyAddress}</span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <Label htmlFor="city" className="flex items-center">
              City <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              onBlur={() => handleBlur('city')}
              className={`${errors.city ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.city && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.city}</span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <Label htmlFor="state" className="flex items-center">
              State <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="state"
              type="text"
              placeholder="State (e.g., CA)"
              maxLength={2}
              value={formData.state}
              onChange={(e) => handleChange('state', e.target.value.toUpperCase())}
              onBlur={() => handleBlur('state')}
              className={`${errors.state ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.state && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.state}</span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <Label htmlFor="zipCode" className="flex items-center">
              Zip Code <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="zipCode"
              type="text"
              placeholder="Zip Code"
              value={formData.zipCode}
              onChange={(e) => handleChange('zipCode', e.target.value)}
              onBlur={() => handleBlur('zipCode')}
              className={`${errors.zipCode ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              maxLength={10}
            />
            {errors.zipCode && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.zipCode}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-10 gap-4">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/real-estate-subject')}
            disabled={isSubmitting}
          >
            Back
          </Button>
          
          <Button 
            type="button"
            className="bg-mloflo-blue hover:bg-blue-700 rounded-full px-10 py-2"
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

export default PropertyDetailsPage;
