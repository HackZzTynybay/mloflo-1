
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import SelectionCard from '../components/SelectionCard';
import SingleFamilyIcon from '../components/icons/SingleFamilyIcon';
import CondoIcon from '../components/icons/CondoIcon';
import TownhouseIcon from '../components/icons/TownhouseIcon';
import MultifamilyIcon from '../components/icons/MultifamilyIcon';
import MobileHomeIcon from '../components/icons/MobileHomeIcon';
import { Button } from '@/components/ui/button';

const PropertyTypePage = () => {
  const navigate = useNavigate();
  const [selectedPropertyType, setSelectedPropertyType] = useState<string | null>(null);

  const handleSelect = (type: string) => {
    setSelectedPropertyType(type);
  };

  const handleNext = () => {
    if (selectedPropertyType) {
      navigate('/property-use');
    }
  };

  return (
    <Layout 
      currentStep={2} 
      totalSteps={10} 
      title="Loan & Property"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          What type of property are you looking for?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
          <SelectionCard 
            title="Single Family" 
            icon={<SingleFamilyIcon selected={selectedPropertyType === 'single-family'} />}
            selected={selectedPropertyType === 'single-family'}
            onClick={() => handleSelect('single-family')}
          />

          <SelectionCard 
            title="Condominium" 
            icon={<CondoIcon selected={selectedPropertyType === 'condo'} />}
            selected={selectedPropertyType === 'condo'}
            onClick={() => handleSelect('condo')}
          />

          <SelectionCard 
            title="Townhouse" 
            icon={<TownhouseIcon selected={selectedPropertyType === 'townhouse'} />}
            selected={selectedPropertyType === 'townhouse'}
            onClick={() => handleSelect('townhouse')}
          />

          <SelectionCard 
            title="Multifamily" 
            icon={<MultifamilyIcon selected={selectedPropertyType === 'multifamily'} />}
            selected={selectedPropertyType === 'multifamily'}
            onClick={() => handleSelect('multifamily')}
          />

          <SelectionCard 
            title="Manufactured/
Mobile Home" 
            icon={<MobileHomeIcon selected={selectedPropertyType === 'mobile-home'} />}
            selected={selectedPropertyType === 'mobile-home'}
            onClick={() => handleSelect('mobile-home')}
          />
        </div>

        <div className="mt-auto">
          <Button 
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/realtor')}
          >
            Back
          </Button>
          
          {selectedPropertyType && (
            <Button 
              className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
              onClick={handleNext}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PropertyTypePage;
