
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { MapPin, AlertCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const PreviousAddressPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    aptUnit: '',
    zipCode: ''
  });

  const [errors, setErrors] = useState({
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const [touched, setTouched] = useState({
    address: false,
    city: false,
    state: false,
    aptUnit: false,
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
    
    if (touched[field] && field in errors) {
      validateField(field as keyof typeof errors, value);
    }
  };

  const validateField = (field: keyof typeof errors, value: string) => {
    let error = '';
    
    switch (field) {
      case 'address':
        error = validateRequired(value, 'Address');
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
    
    if (field in errors) {
      validateField(field as keyof typeof errors, formData[field]);
    }
  };

  const validateForm = () => {
    const newErrors = {
      address: validateRequired(formData.address, 'Address'),
      city: validateRequired(formData.city, 'City'),
      state: validateState(formData.state),
      zipCode: validateZipCode(formData.zipCode)
    };
    
    setErrors(newErrors);
    setTouched({
      address: true,
      city: true,
      state: true,
      aptUnit: true,
      zipCode: true
    });
    
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate('/mailing-address-question');
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
          What is your previous address since your current address is less than 2 years?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="mb-4">
            <Label htmlFor="address" className="flex items-center">
              Previous Address <span className="text-red-500 ml-1">*</span>
            </Label>
            <div className="relative">
              <Input
                id="address"
                placeholder="Previous Address"
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                onBlur={() => handleBlur('address')}
                className={`mt-1 ${errors.address ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <MapPin size={16} />
              </div>
            </div>
            {errors.address && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.address}</span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="city" className="flex items-center">
              City <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="city"
              placeholder="City"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              onBlur={() => handleBlur('city')}
              className={`mt-1 ${errors.city ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.city && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.city}</span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="state" className="flex items-center">
              State <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="state"
              placeholder="State (e.g., CA)"
              maxLength={2}
              value={formData.state}
              onChange={(e) => handleChange('state', e.target.value.toUpperCase())}
              onBlur={() => handleBlur('state')}
              className={`mt-1 ${errors.state ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.state && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.state}</span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="aptUnit">Apt./Unit</Label>
            <Input
              id="aptUnit"
              placeholder="Apt./Unit"
              value={formData.aptUnit}
              onChange={(e) => handleChange('aptUnit', e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="zipCode" className="flex items-center">
              Zip Code <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="zipCode"
              placeholder="Zip Code"
              value={formData.zipCode}
              onChange={(e) => handleChange('zipCode', e.target.value)}
              onBlur={() => handleBlur('zipCode')}
              className={`mt-1 ${errors.zipCode ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              maxLength={10}
            />
            {errors.zipCode && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.zipCode}</span>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/mortgage-question')}
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

export default PreviousAddressPage;
