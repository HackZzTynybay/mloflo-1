
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { Plus } from 'lucide-react';

interface CoBorrower {
  relationship: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  sendInvite: boolean;
}

const defaultCoBorrower: CoBorrower = {
  relationship: 'Spouse',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  sendInvite: false
};

const CoBorrowerPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const count = parseInt(queryParams.get('count') || '2', 10);
  
  const [coBorrowers, setCoBorrowers] = useState<CoBorrower[]>(
    Array(count - 1).fill(0).map(() => ({...defaultCoBorrower}))
  );
  
  const handleInputChange = (index: number, field: keyof CoBorrower, value: string | boolean) => {
    const updatedBorrowers = [...coBorrowers];
    updatedBorrowers[index] = {
      ...updatedBorrowers[index],
      [field]: value
    };
    setCoBorrowers(updatedBorrowers);
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
    }
  };
  
  const handleNext = () => {
    // In a real app, we would save the form data here
    console.log('Co-borrower data:', coBorrowers);
    // Navigate to the next page in the flow
    navigate('/');
  };
  
  const handleBack = () => {
    navigate('/borrowers');
  };
  
  return (
    <Layout currentStep={3} title="Welcome">
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Relationship with Primary Borrower
                  </label>
                  <div className="relative">
                    <select
                      value={borrower.relationship}
                      onChange={(e) => handleInputChange(index, 'relationship', e.target.value)}
                      className="form-input appearance-none"
                    >
                      <option value="Spouse">Spouse</option>
                      <option value="Child">Child</option>
                      <option value="Parent">Parent</option>
                      <option value="Sibling">Sibling</option>
                      <option value="Friend">Friend</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path d="M7 7l3 3 3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={borrower.firstName}
                    onChange={(e) => handleInputChange(index, 'firstName', e.target.value)}
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={borrower.lastName}
                    onChange={(e) => handleInputChange(index, 'lastName', e.target.value)}
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={borrower.phone}
                    onChange={(e) => handleInputChange(index, 'phone', e.target.value)}
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={borrower.email}
                    onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                    className="form-input"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Want to send an invite?</span>
                    <div className="helper-circle">?</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={borrower.sendInvite}
                      onChange={() => handleToggleInvite(index)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mloflo-blue"></div>
                  </label>
                </div>
              </div>
            </div>
          ))}
          
          {coBorrowers.length < 3 && (
            <button
              onClick={handleAddMore}
              className="btn-outline flex items-center mx-auto"
            >
              <Plus size={18} className="mr-2" />
              Add More
            </button>
          )}
        </div>
        
        <div className="flex justify-between w-full mt-12">
          <button onClick={handleBack} className="btn-secondary">
            Back
          </button>
          <button onClick={handleNext} className="btn-primary">
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CoBorrowerPage;
