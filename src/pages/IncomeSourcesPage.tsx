import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import SelectionCard from '@/components/SelectionCard';
import { CreditCard, Home, PiggyBank } from 'lucide-react';

interface IncomeSource {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const incomeSources: IncomeSource[] = [
  { id: 'salary', name: 'Salary', icon: <CreditCard size={48} /> },
  { id: 'rental', name: 'Rental Income', icon: <Home size={48} /> },
  { id: 'investment', name: 'Investment Income', icon: <PiggyBank size={48} /> },
  { id: 'other', name: 'Other', icon: <CreditCard size={48} /> },
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
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-7xl mx-auto py-10 px-8">
        <h1 className="text-2xl font-bold mb-12 text-center">
          Choose your additional sources of income.
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full mb-12">
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

        <div className="flex justify-center mt-14">
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
