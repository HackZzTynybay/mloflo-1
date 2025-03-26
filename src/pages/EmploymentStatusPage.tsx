
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import EmployedIcon from '@/components/icons/EmployedIcon';
import SelfEmployedIcon from '@/components/icons/SelfEmployedIcon';
import RetiredIcon from '@/components/icons/RetiredIcon';
import NotEmployedIcon from '@/components/icons/NotEmployedIcon';
import SelectionCard from '@/components/SelectionCard';

const EmploymentStatusPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === 'employed') {
      navigate('/employment-details');
    } else if (selectedOption === 'self-employed') {
      navigate('/self-employment-details');
    } else if (selectedOption === 'retired') {
      navigate('/additional-income');
    } else if (selectedOption === 'not-employed') {
      navigate('/additional-income');
    }
  };

  return (
    <Layout 
      currentStep={4} 
      totalSteps={10} 
      title="Employment"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          What is your current employment status?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-10">
          <SelectionCard
            title="Employed"
            icon={<EmployedIcon selected={selectedOption === 'employed'} />}
            selected={selectedOption === 'employed'}
            onClick={() => handleOptionSelect('employed')}
          />
          <SelectionCard
            title="Self-Employed"
            icon={<SelfEmployedIcon selected={selectedOption === 'self-employed'} />}
            selected={selectedOption === 'self-employed'}
            onClick={() => handleOptionSelect('self-employed')}
          />
          <SelectionCard
            title="Retired"
            icon={<RetiredIcon selected={selectedOption === 'retired'} />}
            selected={selectedOption === 'retired'}
            onClick={() => handleOptionSelect('retired')}
          />
          <SelectionCard
            title="Not-Employed"
            icon={<NotEmployedIcon selected={selectedOption === 'not-employed'} />}
            selected={selectedOption === 'not-employed'}
            onClick={() => handleOptionSelect('not-employed')}
          />
        </div>

        <div className="flex justify-center mt-10">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/service-expiration')}
          >
            Back
          </Button>
          
          <Button 
            type="button"
            className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default EmploymentStatusPage;
