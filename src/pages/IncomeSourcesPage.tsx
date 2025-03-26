
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import SelectionCard from '@/components/SelectionCard';
import AlimonyIcon from '@/components/icons/AlimonyIcon';
import BoarderIncomeIcon from '@/components/icons/BoarderIncomeIcon';
import CapitalGainsIcon from '@/components/icons/CapitalGainsIcon';
import ChildSupportIcon from '@/components/icons/ChildSupportIcon';
import DisabilityIcon from '@/components/icons/DisabilityIcon';
import FosterCareIcon from '@/components/icons/FosterCareIcon';

const IncomeSourcesPage = () => {
  const navigate = useNavigate();
  const [selectedSources, setSelectedSources] = useState<string[]>([]);

  const toggleSource = (source: string) => {
    if (selectedSources.includes(source)) {
      setSelectedSources(selectedSources.filter(item => item !== source));
    } else {
      setSelectedSources([...selectedSources, source]);
    }
  };

  const handleBack = () => {
    navigate('/additional-income-sources');
  };

  const handleNext = (source: string) => {
    if (source === 'child-support') {
      navigate('/child-support-details');
    } else {
      navigate('/add-more-income-sources');
    }
  };

  return (
    <Layout 
      currentStep={4} 
      totalSteps={10} 
      title="Employment"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-5xl mx-auto py-6">
        <h1 className="text-2xl font-bold mb-8 text-center">
          Choose your additional sources of income.
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mb-8">
          <SelectionCard
            title="Alimony"
            icon={<AlimonyIcon selected={selectedSources.includes('alimony')} />}
            selected={selectedSources.includes('alimony')}
            onClick={() => toggleSource('alimony')}
          />
          <SelectionCard
            title="Automobile Allowance"
            icon={<AlimonyIcon selected={selectedSources.includes('auto-allowance')} />}
            selected={selectedSources.includes('auto-allowance')}
            onClick={() => toggleSource('auto-allowance')}
          />
          <SelectionCard
            title="Boarder Income"
            icon={<BoarderIncomeIcon selected={selectedSources.includes('boarder-income')} />}
            selected={selectedSources.includes('boarder-income')}
            onClick={() => toggleSource('boarder-income')}
          />
          <SelectionCard
            title="Capital Gains"
            icon={<CapitalGainsIcon selected={selectedSources.includes('capital-gains')} />}
            selected={selectedSources.includes('capital-gains')}
            onClick={() => toggleSource('capital-gains')}
          />
          <SelectionCard
            title="Child Support"
            icon={<ChildSupportIcon selected={selectedSources.includes('child-support')} />}
            selected={selectedSources.includes('child-support')}
            onClick={() => toggleSource('child-support')}
          />
          <SelectionCard
            title="Disability"
            icon={<DisabilityIcon selected={selectedSources.includes('disability')} />}
            selected={selectedSources.includes('disability')}
            onClick={() => toggleSource('disability')}
          />
          <SelectionCard
            title="Foster Care"
            icon={<FosterCareIcon selected={selectedSources.includes('foster-care')} />}
            selected={selectedSources.includes('foster-care')}
            onClick={() => toggleSource('foster-care')}
          />
          {/* Additional icons would be added here for the rest of the income sources */}
        </div>

        <div className="flex justify-center mt-6">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={handleBack}
          >
            Back
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default IncomeSourcesPage;
