
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import SelectionCard from '@/components/SelectionCard';
import AlimonyIcon from '@/components/icons/AlimonyIcon';
import AutomobileAllowanceIcon from '@/components/icons/AutomobileAllowanceIcon';
import BoarderIncomeIcon from '@/components/icons/BoarderIncomeIcon';
import CapitalGainsIcon from '@/components/icons/CapitalGainsIcon';
import ChildSupportIcon from '@/components/icons/ChildSupportIcon';
import DisabilityIcon from '@/components/icons/DisabilityIcon';
import FosterCareIcon from '@/components/icons/FosterCareIcon';
import HousingParsonageIcon from '@/components/icons/HousingParsonageIcon';
import InterestDividendsIcon from '@/components/icons/InterestDividendsIcon';

interface IncomeSource {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const incomeSources: IncomeSource[] = [
  { id: 'alimony', name: 'Alimony', icon: <AlimonyIcon /> },
  { id: 'automobile', name: 'Automobile Allowance', icon: <AutomobileAllowanceIcon /> },
  { id: 'boarder', name: 'Boarder Income', icon: <BoarderIncomeIcon /> },
  { id: 'capital', name: 'Capital Gains', icon: <CapitalGainsIcon /> },
  { id: 'child_support', name: 'Child Support', icon: <ChildSupportIcon /> },
  { id: 'disability', name: 'Disability', icon: <DisabilityIcon /> },
  { id: 'foster', name: 'Foster Care', icon: <FosterCareIcon /> },
  { id: 'housing', name: 'Housing or Parsonage', icon: <HousingParsonageIcon /> },
  { id: 'interest', name: 'Interests and Dividends', icon: <InterestDividendsIcon /> },
];

const IncomeSourcesPage = () => {
  const navigate = useNavigate();
  const [selectedSources, setSelectedSources] = useState<string[]>([]);

  const handleSelect = (sourceId: string) => {
    setSelectedSources((prev) =>
      prev.includes(sourceId)
        ? prev.filter((id) => id !== sourceId)
        : [...prev, sourceId]
    );
  };

  const handleNext = () => {
    navigate('/declarations-page');
  };

  return (
    <Layout 
      currentStep={4} 
      totalSteps={10} 
      title="Employment"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-7xl mx-auto py-10 px-6">
        <h1 className="text-2xl font-bold mb-12 text-center">
          Choose your additional sources of income.
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-16">
          {incomeSources.map((source) => (
            <SelectionCard
              key={source.id}
              title={source.name}
              icon={source.icon}
              selected={selectedSources.includes(source.id)}
              onClick={() => handleSelect(source.id)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/additional-income-sources')}
          >
            Back
          </Button>
          
          <Button 
            type="button"
            className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
            onClick={handleNext}
            disabled={selectedSources.length === 0}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default IncomeSourcesPage;
