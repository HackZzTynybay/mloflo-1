
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { Calendar, AlertCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const PersonalInfoPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    ssn: '',
    dob: '',
    citizenship: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    ssn: '',
    dob: '',
    citizenship: ''
  });

  const [touched, setTouched] = useState({
    firstName: false,
    middleName: false,
    lastName: false,
    ssn: false,
    dob: false,
    citizenship: false
  });

  const validateName = (value: string): string => {
    if (!value.trim()) return "This field is required";
    if (/\d/.test(value)) return "Names cannot contain numbers";
    if (value.trim().length < 2) return "Name must be at least 2 characters";
    if (value.trim().length > 50) return "Name cannot exceed 50 characters";
    return "";
  };

  const validateSSN = (value: string): string => {
    if (!value.trim()) return "Social Security Number is required";
    
    // Remove dashes for validation
    const cleanSSN = value.replace(/-/g, '');
    
    if (!/^\d{9}$/.test(cleanSSN)) {
      return "Please enter a valid 9-digit SSN";
    }
    
    return "";
  };

  const validateDOB = (value: string): string => {
    if (!value.trim()) return "Date of Birth is required";
    
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
    if (year < currentYear - 120 || year > currentYear) {
      return "Invalid year";
    }
    
    // Create Date object to check if the date is valid
    const dateObj = new Date(year, month - 1, day);
    if (dateObj.getMonth() !== month - 1 || dateObj.getDate() !== day) {
      return "Invalid date";
    }
    
    // Check if the person is at least 18 years old
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    if (age < 18) {
      return "You must be at least 18 years old";
    }
    
    return "";
  };

  const validateCitizenship = (value: string): string => {
    if (!value) return "Please select citizenship status";
    return "";
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    // For text fields, validate input type
    if (field === 'firstName' || field === 'middleName' || field === 'lastName') {
      // Only allow letters, spaces, hyphens, and apostrophes for names
      if (value === '' || /^[A-Za-z\s\-']*$/.test(value)) {
        setFormData(prev => ({ ...prev, [field]: value }));
      }
      return;
    }
    
    // For SSN, format as XXX-XX-XXXX and only allow numbers and dashes
    if (field === 'ssn') {
      if (value === '' || /^[\d-]*$/.test(value)) {
        // Format SSN as XXX-XX-XXXX
        const digits = value.replace(/\D/g, '');
        let formattedSSN = '';
        
        if (digits.length > 0) {
          formattedSSN = digits.slice(0, 3);
          if (digits.length > 3) {
            formattedSSN += '-' + digits.slice(3, 5);
          }
          if (digits.length > 5) {
            formattedSSN += '-' + digits.slice(5, 9);
          }
        }
        
        setFormData(prev => ({ ...prev, [field]: formattedSSN }));
      }
      return;
    }
    
    // For DOB, format as MM-DD-YYYY and only allow numbers and dashes
    if (field === 'dob') {
      if (value === '' || /^[\d-]*$/.test(value)) {
        // Format DOB as MM-DD-YYYY
        const digits = value.replace(/\D/g, '');
        let formattedDOB = '';
        
        if (digits.length > 0) {
          formattedDOB = digits.slice(0, 2);
          if (digits.length > 2) {
            formattedDOB += '-' + digits.slice(2, 4);
          }
          if (digits.length > 4) {
            formattedDOB += '-' + digits.slice(4, 8);
          }
        }
        
        setFormData(prev => ({ ...prev, [field]: formattedDOB }));
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
      case 'firstName':
      case 'lastName':
        error = validateName(value);
        break;
      case 'ssn':
        error = validateSSN(value);
        break;
      case 'dob':
        error = validateDOB(value);
        break;
      case 'citizenship':
        error = validateCitizenship(value);
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
      firstName: validateName(formData.firstName),
      lastName: validateName(formData.lastName),
      ssn: validateSSN(formData.ssn),
      dob: validateDOB(formData.dob),
      citizenship: validateCitizenship(formData.citizenship)
    };
    
    setErrors(newErrors);
    setTouched({
      firstName: true,
      middleName: true,
      lastName: true,
      ssn: true,
      dob: true,
      citizenship: true
    });
    
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate('/contact-info');
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
          Now let's learn a little bit more about you.
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="mb-4">
            <Label htmlFor="firstName" className="flex items-center">
              First Name <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
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

          <div className="mb-4">
            <Label htmlFor="middleName">Middle Name</Label>
            <Input
              id="middleName"
              placeholder="Middle Name"
              value={formData.middleName}
              onChange={(e) => handleChange('middleName', e.target.value)}
              onBlur={() => handleBlur('middleName')}
              className="mt-1"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="lastName" className="flex items-center">
              Last Name <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
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

          <div className="mb-4">
            <Label htmlFor="ssn" className="flex items-center">
              Social Security Number <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="ssn"
              placeholder="XXX-XX-XXXX"
              value={formData.ssn}
              onChange={(e) => handleChange('ssn', e.target.value)}
              onBlur={() => handleBlur('ssn')}
              className={`mt-1 ${errors.ssn ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              type="password"
            />
            {errors.ssn && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.ssn}</span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="dob" className="flex items-center">
              Date of Birth <span className="text-red-500 ml-1">*</span>
            </Label>
            <div className="relative">
              <Input
                id="dob"
                placeholder="MM-DD-YYYY"
                value={formData.dob}
                onChange={(e) => handleChange('dob', e.target.value)}
                onBlur={() => handleBlur('dob')}
                className={`mt-1 ${errors.dob ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Calendar size={16} />
              </div>
            </div>
            {errors.dob && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.dob}</span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="citizenship" className="flex items-center">
              Citizenship <span className="text-red-500 ml-1">*</span>
            </Label>
            <select 
              id="citizenship" 
              className={`w-full mt-1 p-2 border ${errors.citizenship ? 'border-red-500' : 'border-gray-300'} rounded-md bg-white`}
              value={formData.citizenship}
              onChange={(e) => handleChange('citizenship', e.target.value)}
              onBlur={() => handleBlur('citizenship')}
            >
              <option value="" disabled>Select</option>
              <option value="us">United States</option>
              <option value="other">Other</option>
            </select>
            {errors.citizenship && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{errors.citizenship}</span>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/property-value')}
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

export default PersonalInfoPage;
