import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { Plus, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from "@/components/ui/use-toast";

interface CoBorrower {
  relationship: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  sendInvite: boolean;
}

interface ValidationErrors {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

const defaultCoBorrower: CoBorrower = {
  relationship: 'Spouse',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  sendInvite: false
};

const defaultErrors: ValidationErrors = {
  firstName: '',
  lastName: '',
  phone: '',
  email: ''
};

const CoBorrowerPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const count = parseInt(queryParams.get('count') || '2', 10);
  
  const [coBorrowers, setCoBorrowers] = useState<CoBorrower[]>(
    Array(count - 1).fill(0).map(() => ({...defaultCoBorrower}))
  );
  
  const [errors, setErrors] = useState<ValidationErrors[]>(
    Array(count - 1).fill({...defaultErrors})
  );
  
  const [touched, setTouched] = useState<boolean[]>(
    Array(count - 1).fill(false)
  );
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateName = (value: string): string => {
    if (!value.trim()) return "This field is required";
    if (/\d/.test(value)) return "Names cannot contain numbers";
    if (value.trim().length < 2) return "Name must be at least 2 characters";
    if (value.trim().length > 50) return "Name cannot exceed 50 characters";
    return "";
  };
  
  const validatePhone = (value: string): string => {
    if (!value.trim()) return "Phone number is required";
    if (!/^[\d()\-\s+]+$/.test(value)) return "Please enter a valid phone number";
    // Remove all non-digits for length check
    const digits = value.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 15) return "Phone number must be 10-15 digits";
    return "";
  };
  
  const validateEmail = (value: string): string => {
    if (!value.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(value)) return "Please enter a valid email address";
    return "";
  };
  
  const handleInputChange = (index: number, field: keyof CoBorrower, value: string | boolean) => {
    // For text fields, validate input type
    if (typeof value === 'string') {
      if (field === 'firstName' || field === 'lastName') {
        // Only allow letters, spaces, hyphens, and apostrophes for names
        if (field === 'firstName' || field === 'lastName') {
          // Allow typing backspace (empty string)
          if (value === '' || /^[A-Za-z\s\-']+$/.test(value)) {
            updateBorrowerField(index, field, value);
          }
          return;
        }
      }
      
      if (field === 'phone') {
        // Only allow numbers, parentheses, hyphens, spaces, and plus sign for phone
        if (value === '' || /^[\d()\-\s+]*$/.test(value)) {
          updateBorrowerField(index, field, value);
        }
        return;
      }
    }
    
    // For other fields (boolean, select, or if we passed the validation)
    updateBorrowerField(index, field, value);
  };
  
  const updateBorrowerField = (index: number, field: keyof CoBorrower, value: string | boolean) => {
    const updatedBorrowers = [...coBorrowers];
    updatedBorrowers[index] = {
      ...updatedBorrowers[index],
      [field]: value
    };
    setCoBorrowers(updatedBorrowers);
    
    // Update validation errors if touched
    if (touched[index]) {
      // Only validate fields that exist in ValidationErrors
      if (field === 'firstName' || field === 'lastName' || field === 'phone' || field === 'email') {
        validateField(index, field as keyof ValidationErrors, value.toString());
      }
    }
  };
  
  const validateField = (index: number, field: keyof ValidationErrors, value: string) => {
    const updatedErrors = [...errors];
    
    if (field === 'firstName' || field === 'lastName') {
      updatedErrors[index] = {
        ...updatedErrors[index],
        [field]: validateName(value)
      };
    } else if (field === 'phone') {
      updatedErrors[index] = {
        ...updatedErrors[index],
        [field]: validatePhone(value)
      };
    } else if (field === 'email') {
      updatedErrors[index] = {
        ...updatedErrors[index],
        [field]: validateEmail(value)
      };
    }
    
    setErrors(updatedErrors);
  };
  
  const handleBlur = (index: number, field: keyof ValidationErrors) => {
    // Mark this field as touched
    const newTouched = [...touched];
    newTouched[index] = true;
    setTouched(newTouched);
    
    // Validate the field
    validateField(index, field, coBorrowers[index][field as keyof CoBorrower].toString());
  };
  
  const handleToggleInvite = (index: number) => {
    const updatedBorrowers = [...coBorrowers];
    updatedBorrowers[index] = {
      ...updatedBorrowers[index],
      sendInvite: !updatedBorrowers[index].sendInvite
    };
    setCoBorrowers(updatedBorrowers);
  };
  
  const handleAddMore = () => {
    if (coBorrowers.length < 3) {
      setCoBorrowers([...coBorrowers, {...defaultCoBorrower}]);
      setErrors([...errors, {...defaultErrors}]);
      setTouched([...touched, false]);
    }
  };
  
  const validateAll = (): boolean => {
    let isValid = true;
    const newErrors = [...errors];
    const newTouched = [...touched].fill(true);
    
    coBorrowers.forEach((borrower, index) => {
      const borrowerErrors = {
        firstName: validateName(borrower.firstName),
        lastName: validateName(borrower.lastName),
        phone: validatePhone(borrower.phone),
        email: validateEmail(borrower.email)
      };
      
      newErrors[index] = borrowerErrors;
      
      if (borrowerErrors.firstName || borrowerErrors.lastName || 
          borrowerErrors.phone || borrowerErrors.email) {
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    setTouched(newTouched);
    return isValid;
  };
  
  const handleNext = () => {
    if (validateAll()) {
      setIsSubmitting(true);
      // In a real app, we would save the form data here
      console.log('Co-borrower data:', coBorrowers);
      // Navigate to the loan type page in the flow
      setTimeout(() => {
        navigate('/loan-type');
        setIsSubmitting(false);
      }, 500);
    } else {
      toast({
        title: "Form Validation Error",
        description: "Please fix the errors in the form before proceeding",
        variant: "destructive",
      });
    }
  };
  
  const handleBack = () => {
    navigate('/borrowers');
  };
  
  // Format phone number as user types
  const formatPhoneNumber = (phoneNumber: string): string => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    if (cleaned.length === 0) return '';
    
    if (cleaned.length <= 3) {
      return `(${cleaned}`;
    } else if (cleaned.length <= 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    } else {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
  };
  
  // Apply phone formatting on blur
  useEffect(() => {
    coBorrowers.forEach((borrower, index) => {
      if (borrower.phone && touched[index]) {
        const formattedPhone = formatPhoneNumber(borrower.phone);
        if (formattedPhone !== borrower.phone) {
          const updatedBorrowers = [...coBorrowers];
          updatedBorrowers[index] = {
            ...updatedBorrowers[index],
            phone: formattedPhone
          };
          setCoBorrowers(updatedBorrowers);
        }
      }
    });
  }, [touched]);
  
  return (
    <Layout currentStep={2} totalSteps={10} title="Welcome">
      <div className="flex flex-col items-center justify-center py-8 w-full max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-12 text-center">
          Now let's learn a little about your co-borrower.
        </h1>
        
        <div className="w-full space-y-12">
          {coBorrowers.map((borrower, index) => (
            <div key={index} className="space-y-6 animate-slide-in">
              {coBorrowers.length > 1 && (
                <h2 className="text-lg font-medium text-mloflo-blue">
                  Borrower {index + 1}
                </h2>
              )}
              
              <div className="space-y-4">
                <div>
                  <Label className="block mb-1">
                    Relationship with Primary Borrower
                  </Label>
                  <div className="relative">
                    <select
                      value={borrower.relationship}
                      onChange={(e) => handleInputChange(index, 'relationship', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    >
                      <option value="Spouse">Spouse</option>
                      <option value="Child">Child</option>
                      <option value="Parent">Parent</option>
                      <option value="Sibling">Sibling</option>
                      <option value="Friend">Friend</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <Label className="block mb-1">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="First Name"
                    value={borrower.firstName}
                    onChange={(e) => handleInputChange(index, 'firstName', e.target.value)}
                    onBlur={() => handleBlur(index, 'firstName')}
                    className={errors[index]?.firstName ? "border-red-500" : ""}
                  />
                  {errors[index]?.firstName && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{errors[index].firstName}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <Label className="block mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    value={borrower.lastName}
                    onChange={(e) => handleInputChange(index, 'lastName', e.target.value)}
                    onBlur={() => handleBlur(index, 'lastName')}
                    className={errors[index]?.lastName ? "border-red-500" : ""}
                  />
                  {errors[index]?.lastName && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{errors[index].lastName}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <Label className="block mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="tel"
                    placeholder="(XXX) XXX-XXXX"
                    value={borrower.phone}
                    onChange={(e) => handleInputChange(index, 'phone', e.target.value)}
                    onBlur={() => handleBlur(index, 'phone')}
                    className={errors[index]?.phone ? "border-red-500" : ""}
                  />
                  {errors[index]?.phone && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{errors[index].phone}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <Label className="block mb-1">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={borrower.email}
                    onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                    onBlur={() => handleBlur(index, 'email')}
                    className={errors[index]?.email ? "border-red-500" : ""}
                  />
                  {errors[index]?.email && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{errors[index].email}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Want to send an invite?</span>
                    <div className="helper-circle cursor-help" title="Send an invitation email to this co-borrower">?</div>
                  </div>
                  <Switch
                    checked={borrower.sendInvite}
                    onCheckedChange={() => handleToggleInvite(index)}
                  />
                </div>
              </div>
            </div>
          ))}
          
          {coBorrowers.length < 3 && (
            <Button
              variant="outline"
              onClick={handleAddMore}
              className="flex items-center mx-auto"
            >
              <Plus size={18} className="mr-2" />
              Add More
            </Button>
          )}
        </div>
        
        <div className="flex justify-between w-full mt-12">
          <Button 
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={handleBack}
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

export default CoBorrowerPage;
