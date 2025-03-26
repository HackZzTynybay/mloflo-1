
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
import MortgageCreditIcon from '@/components/icons/MortgageCreditIcon';
import DifferentialPaymentsIcon from '@/components/icons/DifferentialPaymentsIcon';
import ReceivableIcon from '@/components/icons/ReceivableIcon';
import PublicAssistanceIcon from '@/components/icons/PublicAssistanceIcon';
import RetirementIcon from '@/components/icons/RetirementIcon';
import RoyaltyPaymentIcon from '@/components/icons/RoyaltyPaymentIcon';
import MaintenanceIcon from '@/components/icons/MaintenanceIcon';
import SocialSecurityIcon from '@/components/icons/SocialSecurityIcon';
import TrustIcon from '@/components/icons/TrustIcon';
import UnemploymentBenefitsIcon from '@/components/icons/UnemploymentBenefitsIcon';
import VACompensationIcon from '@/components/icons/VACompensationIcon';
import OthersIcon from '@/components/icons/OthersIcon';
import HousingParsonageIcon from '@/components/icons/HousingParsonageIcon';
import InterestDividendsIcon from '@/components/icons/InterestDividendsIcon';
import AutomobileAllowanceIcon from '@/components/icons/AutomobileAllowanceIcon';

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

  const handleNext = () => {
    if (selectedSources.includes('child-support')) {
      navigate('/child-support-details');
    } else {
      navigate('/add-more-income-sources');
    }
  };

  const incomeSources = [
    { id: 'alimony', title: 'Alimony', icon: AlimonyIcon },
    { id: 'auto-allowance', title: 'Automobile Allowance', icon: AutomobileAllowanceIcon },
    { id: 'boarder-income', title: 'Boarder Income', icon: BoarderIncomeIcon },
    { id: 'capital-gains', title: 'Capital Gains', icon: CapitalGainsIcon },
    { id: 'child-support', title: 'Child Support', icon: ChildSupportIcon },
    { id: 'disability', title: 'Disability', icon: DisabilityIcon },
    { id: 'foster-care', title: 'Foster Care', icon: FosterCareIcon },
    { id: 'housing-parsonage', title: 'Housing or Parsonage', icon: HousingParsonageIcon },
    { id: 'interest-dividends', title: 'Interest and Dividends', icon: InterestDividendsIcon },
    { id: 'mortgage-credit', title: 'Mortgage Credit Certificate', icon: MortgageCreditIcon },
    { id: 'differential-payments', title: 'Mortgage Differential Payment', icon: DifferentialPaymentsIcon },
    { id: 'notes-receivable', title: 'Notes Receivable', icon: ReceivableIcon },
    { id: 'public-assistance', title: 'Public Assistance', icon: PublicAssistanceIcon },
    { id: 'retirement', title: 'Retirement', icon: RetirementIcon },
    { id: 'royalty-payments', title: 'Royalty Payments', icon: RoyaltyPaymentIcon },
    { id: 'maintenance', title: 'Separate Maintenance', icon: MaintenanceIcon },
    { id: 'social-security', title: 'Social Security', icon: SocialSecurityIcon },
    { id: 'trust', title: 'Trust', icon: TrustIcon },
    { id: 'unemployment-benefits', title: 'Unemployment Benefits', icon: UnemploymentBenefitsIcon },
    { id: 'va-compensation', title: 'VA Compensation', icon: VACompensationIcon },
    { id: 'other', title: 'Other', icon: OthersIcon },
  ];

  return (
    <Layout 
      currentStep={4} 
      totalSteps={10} 
      title="Employment"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-5xl mx-auto py-6 px-4">
        <h1 className="text-2xl font-bold mb-8 text-center">
          Choose your additional sources of income.
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mb-8">
          {incomeSources.map((source) => (
            <SelectionCard
              key={source.id}
              title={source.title}
              icon={<source.icon selected={selectedSources.includes(source.id)} />}
              selected={selectedSources.includes(source.id)}
              onClick={() => toggleSource(source.id)}
            />
          ))}
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
          {selectedSources.length > 0 && (
            <Button 
              type="button"
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

export default IncomeSourcesPage;
