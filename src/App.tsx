
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from './pages/Index';
import AdditionalRealEstatePropertiesPage from './pages/AdditionalRealEstatePropertiesPage';
import AddAdditionalAssetsPage from './pages/AddAdditionalAssetsPage';
import ChooseOtherAssetsPage from './pages/ChooseOtherAssetsPage';
import OtherAssetsPage from './pages/OtherAssetsPage';
import AssetsPage from './pages/AssetsPage';
import AssetDetailPage from './pages/AssetDetailPage';
import PersonalInfoPage from './pages/PersonalInfoPage';
import AdditionalPropertyPrimaryPage from './pages/AdditionalPropertyPrimaryPage';
import AdditionalPropertyDetailPage from './pages/AdditionalPropertyDetailPage';
import HispanicDetailsPage from './pages/HispanicDetailsPage';
import OtherHispanicPage from './pages/OtherHispanicPage';
import SexPage from './pages/SexPage';
import DeclarationsPage from './pages/DeclarationsPage';
import IncomePage from './pages/IncomePage';
import AddMoreIncomeSourcesPage from './pages/AddMoreIncomeSourcesPage';
import NotFound from './pages/NotFound';
import CashOutPage from './pages/CashOutPage';
import AssetsInformationPage from './pages/AssetsInformationPage';

// Import all the other pages
import BorrowersPage from './pages/BorrowersPage';
import CoBorrowerPage from './pages/CoBorrowerPage';
import LoanTypePage from './pages/LoanTypePage';
import RealtorPage from './pages/RealtorPage';
import RealtorInfoPage from './pages/RealtorInfoPage';
import PropertyTypePage from './pages/PropertyTypePage';
import PropertyUsePage from './pages/PropertyUsePage';
import PropertyFoundPage from './pages/PropertyFoundPage';
import PropertyAddressPage from './pages/PropertyAddressPage';
import PurchasePricePage from './pages/PurchasePricePage';
import DownPaymentPage from './pages/DownPaymentPage';
import CashOutAmountPage from './pages/CashOutAmountPage';
import RefinancePropertyAddressPage from './pages/RefinancePropertyAddressPage';
import ExistingMortgagePage from './pages/ExistingMortgagePage';
import MortgageBalancePage from './pages/MortgageBalancePage';
import AdditionalMortgagePage from './pages/AdditionalMortgagePage';
import AdditionalMortgageBalancePage from './pages/AdditionalMortgageBalancePage';
import PropertyValuePage from './pages/PropertyValuePage';
import ContactInfoPage from './pages/ContactInfoPage';
import CurrentAddressPage from './pages/CurrentAddressPage';
import AddressDurationPage from './pages/AddressDurationPage';
import PropertyRelationshipPage from './pages/PropertyRelationshipPage';
import MortgageQuestionPage from './pages/MortgageQuestionPage';
import PreviousAddressPage from './pages/PreviousAddressPage';
import MailingAddressQuestionPage from './pages/MailingAddressQuestionPage';
import MaritalStatusPage from './pages/MaritalStatusPage';
import TaxFilingStatusPage from './pages/TaxFilingStatusPage';
import DependentsQuestionPage from './pages/DependentsQuestionPage';
import DependentsCountPage from './pages/DependentsCountPage';
import DependentsAgesPage from './pages/DependentsAgesPage';
import MilitaryServicePage from './pages/MilitaryServicePage';
import MilitaryServiceDetailsPage from './pages/MilitaryServiceDetailsPage';
import ServiceExpirationPage from './pages/ServiceExpirationPage';
import EmploymentStatusPage from './pages/EmploymentStatusPage';
import EmploymentDetailsPage from './pages/EmploymentDetailsPage';
import SelfEmploymentDetailsPage from './pages/SelfEmploymentDetailsPage';
import AdditionalEmploymentPage from './pages/AdditionalEmploymentPage';
import AdditionalEmploymentDetailsPage from './pages/AdditionalEmploymentDetailsPage';
import AdditionalEmploymentTypePage from './pages/AdditionalEmploymentTypePage';
import AdditionalSelfEmploymentDetailsPage from './pages/AdditionalSelfEmploymentDetailsPage';
import PreviousEmploymentTypePage from './pages/PreviousEmploymentTypePage';
import PreviousEmploymentDetailsPage from './pages/PreviousEmploymentDetailsPage';
import AdditionalIncomeSourcesPage from './pages/AdditionalIncomeSourcesPage';
import IncomeSourcesPage from './pages/IncomeSourcesPage';
import ChildSupportDetailsPage from './pages/ChildSupportDetailsPage';
import ReviewSubmitPage from './pages/ReviewSubmitPage';
import EmploymentAddressPage from './pages/EmploymentAddressPage';
import EmploymentPhonePage from './pages/EmploymentPhonePage';
import EthnicityPage from './pages/EthnicityPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/borrowers" element={<BorrowersPage />} />
              <Route path="/co-borrower" element={<CoBorrowerPage />} />
              
              {/* Purchase Flow */}
              <Route path="/loan-type" element={<LoanTypePage />} />
              <Route path="/realtor" element={<RealtorPage />} />
              <Route path="/realtor-info" element={<RealtorInfoPage />} />
              <Route path="/property-type" element={<PropertyTypePage />} />
              <Route path="/property-use" element={<PropertyUsePage />} />
              <Route path="/property-found" element={<PropertyFoundPage />} />
              <Route path="/property-address" element={<PropertyAddressPage />} />
              <Route path="/purchase-price" element={<PurchasePricePage />} />
              <Route path="/down-payment" element={<DownPaymentPage />} />
              
              {/* Refinance Flow */}
              <Route path="/cash-out" element={<CashOutPage />} />
              <Route path="/cash-out-amount" element={<CashOutAmountPage />} />
              <Route path="/refinance-property-address" element={<RefinancePropertyAddressPage />} />
              <Route path="/existing-mortgage" element={<ExistingMortgagePage />} />
              <Route path="/mortgage-balance" element={<MortgageBalancePage />} />
              <Route path="/additional-mortgage" element={<AdditionalMortgagePage />} />
              <Route path="/additional-mortgage-balance" element={<AdditionalMortgageBalancePage />} />
              <Route path="/property-value" element={<PropertyValuePage />} />
              
              {/* Personal Information Flow */}
              <Route path="/personal-info" element={<PersonalInfoPage />} />
              <Route path="/contact-info" element={<ContactInfoPage />} />
              <Route path="/current-address" element={<CurrentAddressPage />} />
              <Route path="/address-duration" element={<AddressDurationPage />} />
              <Route path="/property-relationship" element={<PropertyRelationshipPage />} />
              <Route path="/mortgage-question" element={<MortgageQuestionPage />} />
              <Route path="/previous-address" element={<PreviousAddressPage />} />
              <Route path="/mailing-address-question" element={<MailingAddressQuestionPage />} />
              <Route path="/marital-status" element={<MaritalStatusPage />} />
              <Route path="/tax-filing-status" element={<TaxFilingStatusPage />} />
              <Route path="/dependents-question" element={<DependentsQuestionPage />} />
              <Route path="/dependents-count" element={<DependentsCountPage />} />
              <Route path="/dependents-ages" element={<DependentsAgesPage />} />
              <Route path="/military-service" element={<MilitaryServicePage />} />
              <Route path="/military-service-details" element={<MilitaryServiceDetailsPage />} />
              <Route path="/service-expiration" element={<ServiceExpirationPage />} />
              
              {/* Employment Flow */}
              <Route path="/employment-status" element={<EmploymentStatusPage />} />
              <Route path="/employment-details" element={<EmploymentDetailsPage />} />
              <Route path="/employment-address" element={<EmploymentAddressPage />} />
              <Route path="/employment-phone" element={<EmploymentPhonePage />} />
              <Route path="/self-employment-details" element={<SelfEmploymentDetailsPage />} />
              <Route path="/additional-employment" element={<AdditionalEmploymentPage />} />
              <Route path="/additional-employment-details" element={<AdditionalEmploymentDetailsPage />} />
              <Route path="/additional-employment-type" element={<AdditionalEmploymentTypePage />} />
              <Route path="/additional-self-employment-details" element={<AdditionalSelfEmploymentDetailsPage />} />
              <Route path="/previous-employment-type" element={<PreviousEmploymentTypePage />} />
              <Route path="/previous-employment-details" element={<PreviousEmploymentDetailsPage />} />
              <Route path="/additional-income" element={<AdditionalIncomeSourcesPage />} />
              <Route path="/income-sources" element={<IncomeSourcesPage />} />
              <Route path="/child-support-details" element={<ChildSupportDetailsPage />} />
              <Route path="/add-more-income-sources" element={<AddMoreIncomeSourcesPage />} />
              
              {/* Assets Flow */}
              <Route path="/assets" element={<AssetsPage />} />
              <Route path="/asset-detail/:assetType" element={<AssetDetailPage />} />
              <Route path="/add-additional-assets" element={<AddAdditionalAssetsPage />} />
              <Route path="/choose-other-assets" element={<ChooseOtherAssetsPage />} />
              <Route path="/other-assets" element={<OtherAssetsPage />} />
              <Route path="/assets-information" element={<AssetsInformationPage />} />
              <Route path="/additional-real-estate-properties" element={<AdditionalRealEstatePropertiesPage />} />
              <Route path="/additional-property-primary" element={<AdditionalPropertyPrimaryPage />} />
              <Route path="/additional-property-detail" element={<AdditionalPropertyDetailPage />} />
              
              {/* Demographic Flow */}
              <Route path="/ethnicity" element={<EthnicityPage />} />
              <Route path="/hispanic-details" element={<HispanicDetailsPage />} />
              <Route path="/other-hispanic" element={<OtherHispanicPage />} />
              <Route path="/sex" element={<SexPage />} />
              
              {/* Final Flow */}
              <Route path="/declarations-page" element={<DeclarationsPage />} />
              <Route path="/income" element={<IncomePage />} />
              <Route path="/review-submit" element={<ReviewSubmitPage />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
