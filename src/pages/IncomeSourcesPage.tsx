
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

// Add HousingParsonage component
const HousingParsonageIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 20L20 50V100H45V70H75V100H100V50L60 20Z" stroke="#344AD5" strokeWidth="2"/>
    <path d="M60 40L40 55V85H50V65H70V85H80V55L60 40Z" stroke="#344AD5" strokeWidth="2"/>
  </svg>
);

// Add Interest and Dividends component
const InterestDividendsIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 40H90V90H30V40Z" stroke="#344AD5" strokeWidth="2"/>
    <path d="M40 60H80M40 70H80M40 80H60" stroke="#344AD5" strokeWidth="2"/>
    <path d="M40 50L55 30H65L80 50" stroke="#344AD5" strokeWidth="2"/>
  </svg>
);

// Add Automobile Allowance icon component
const AutomobileAllowanceIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 60H90M30 60C27.2386 60 25 62.2386 25 65V75M30 60L40 40H80L90 60M90 60C92.7614 60 95 62.2386 95 65V75M35 75C35 77.7614 32.7614 80 30 80C27.2386 80 25 77.7614 25 75M35 75C35 72.2386 32.7614 70 30 70C27.2386 70 25 72.2386 25 75M85 75C85 77.7614 87.2386 80 90 80C92.7614 80 95 77.7614 95 75M85 75C85 72.2386 87.2386 70 90 70C92.7614 70 95 72.2386 95 75" stroke="#344AD5" strokeWidth="2"/>
    <path d="M60 60V80M40 60V80M80 60V80" stroke="#344AD5" strokeWidth="2"/>
  </svg>
);

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
            icon={<AutomobileAllowanceIcon />}
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
          <SelectionCard
            title="Housing or Parsonage"
            icon={<HousingParsonageIcon />}
            selected={selectedSources.includes('housing-parsonage')}
            onClick={() => toggleSource('housing-parsonage')}
          />
          <SelectionCard
            title="Interest and Dividends"
            icon={<InterestDividendsIcon />}
            selected={selectedSources.includes('interest-dividends')}
            onClick={() => toggleSource('interest-dividends')}
          />
          <SelectionCard
            title="Mortgage Credit Certificate"
            icon={<MortgageCreditIcon selected={selectedSources.includes('mortgage-credit')} />}
            selected={selectedSources.includes('mortgage-credit')}
            onClick={() => toggleSource('mortgage-credit')}
          />
          <SelectionCard
            title="Mortgage Differential Payment"
            icon={<DifferentialPaymentsIcon selected={selectedSources.includes('differential-payments')} />}
            selected={selectedSources.includes('differential-payments')}
            onClick={() => toggleSource('differential-payments')}
          />
          <SelectionCard
            title="Notes Receivable"
            icon={<ReceivableIcon selected={selectedSources.includes('notes-receivable')} />}
            selected={selectedSources.includes('notes-receivable')}
            onClick={() => toggleSource('notes-receivable')}
          />
          <SelectionCard
            title="Public Assistance"
            icon={<PublicAssistanceIcon selected={selectedSources.includes('public-assistance')} />}
            selected={selectedSources.includes('public-assistance')}
            onClick={() => toggleSource('public-assistance')}
          />
          <SelectionCard
            title="Retirement"
            icon={<RetirementIcon selected={selectedSources.includes('retirement')} />}
            selected={selectedSources.includes('retirement')}
            onClick={() => toggleSource('retirement')}
          />
          <SelectionCard
            title="Royalty Payments"
            icon={<RoyaltyPaymentIcon selected={selectedSources.includes('royalty-payments')} />}
            selected={selectedSources.includes('royalty-payments')}
            onClick={() => toggleSource('royalty-payments')}
          />
          <SelectionCard
            title="Separate Maintenance"
            icon={<MaintenanceIcon selected={selectedSources.includes('maintenance')} />}
            selected={selectedSources.includes('maintenance')}
            onClick={() => toggleSource('maintenance')}
          />
          <SelectionCard
            title="Social Security"
            icon={<SocialSecurityIcon selected={selectedSources.includes('social-security')} />}
            selected={selectedSources.includes('social-security')}
            onClick={() => toggleSource('social-security')}
          />
          <SelectionCard
            title="Trust"
            icon={<TrustIcon selected={selectedSources.includes('trust')} />}
            selected={selectedSources.includes('trust')}
            onClick={() => toggleSource('trust')}
          />
          <SelectionCard
            title="Unemployment Benefits"
            icon={<UnemploymentBenefitsIcon selected={selectedSources.includes('unemployment-benefits')} />}
            selected={selectedSources.includes('unemployment-benefits')}
            onClick={() => toggleSource('unemployment-benefits')}
          />
          <SelectionCard
            title="VA Compensation"
            icon={<VACompensationIcon selected={selectedSources.includes('va-compensation')} />}
            selected={selectedSources.includes('va-compensation')}
            onClick={() => toggleSource('va-compensation')}
          />
          <SelectionCard
            title="Other"
            icon={<OthersIcon selected={selectedSources.includes('other')} />}
            selected={selectedSources.includes('other')}
            onClick={() => toggleSource('other')}
          />
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
