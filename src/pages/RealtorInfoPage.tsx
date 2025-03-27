
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { AlertCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const RealtorInfoPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });
  const [sendInvite, setSendInvite] = useState(false);
  
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });
  
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false
  });

  const validateField = (field: keyof typeof errors, value: string) => {
    let error = '';
    
    switch (field) {
      case 'firstName':
        error = !value.trim() ? 'First name is required' : '';
        break;
      case 'lastName':
        error = !value.trim() ? 'Last name is required' : '';
        break;
      case 'phone':
        error = !value.trim() ? 'Phone number is required' : 
               !/^\(\d{3}\) \d{3}-\d{4}$/.test(value) ? 'Phone must be in format (xxx) xxx-xxxx' : '';
        break;
      case 'email':
        error = !value.trim() ? 'Email is required' :
               !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email address' : '';
        break;
      default:
        break;
    }
    
    setErrors(prev => ({ ...prev, [field]: error }));
    return error;
  };

  const formatPhoneNumber = (input: string) => {
    // Remove all non-digit characters
    const cleaned = input.replace(/\D/g, '');
    
    // Format as (xxx) xxx-xxxx
    if (cleaned.length <= 3) {
      return cleaned.length ? `(${cleaned}` : '';
    } else if (cleaned.length <= 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    } else {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    let processedValue = value;
    
    // Special handling for phone numbers
    if (field === 'phone') {
      processedValue = formatPhoneNumber(value);
    }
    
    setFormData(prev => ({ ...prev, [field]: processedValue }));
    
    if (touched[field]) {
      validateField(field, processedValue);
    }
  };

  const handleBlur = (field: keyof typeof formData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  const validateForm = () => {
    const newErrors = {
      firstName: validateField('firstName', formData.firstName),
      lastName: validateField('lastName', formData.lastName),
      phone: validateField('phone', formData.phone),
      email: validateField('email', formData.email)
    };
    
    setTouched({
      firstName: true,
      lastName: true,
      phone: true,
      email: true
    });
    
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate('/property-type');
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
      currentStep={5} 
      totalSteps={10} 
      title="Loan & Property"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Tell us about the realtor.
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <Label htmlFor="firstName" className="flex items-center">
              First Name <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              onBlur={() => handleBlur('firstName')}
              className={`mt-1 ${errors.firstName ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.firstName && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.firstName}</span>
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="lastName" className="flex items-center">
              Last Name <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              onBlur={() => handleBlur('lastName')}
              className={`mt-1 ${errors.lastName ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.lastName && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.lastName}</span>
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="phone" className="flex items-center">
              Phone Number <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              onBlur={() => handleBlur('phone')}
              className={`mt-1 ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.phone && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.phone}</span>
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="flex items-center">
              Email <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              className={`mt-1 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.email && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Label htmlFor="sendInvite">Want to send an invite?</Label>
              <span className="text-gray-500">ⓘ</span>
            </div>
            <Switch
              id="sendInvite"
              checked={sendInvite}
              onCheckedChange={setSendInvite}
            />
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/realtor')}
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

export default RealtorInfoPage;
