
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import BorrowersPage from "./pages/BorrowersPage";
import CoBorrowerPage from "./pages/CoBorrowerPage";
import NotFound from "./pages/NotFound";

// Mortgage Application Routes
import LoanTypePage from "./pages/LoanTypePage";
import RealtorPage from "./pages/RealtorPage";
import RealtorInfoPage from "./pages/RealtorInfoPage";
import PropertyTypePage from "./pages/PropertyTypePage";
import PropertyUsePage from "./pages/PropertyUsePage";
import PropertyFoundPage from "./pages/PropertyFoundPage";
import PropertyAddressPage from "./pages/PropertyAddressPage";
import PurchasePricePage from "./pages/PurchasePricePage";
import DownPaymentPage from "./pages/DownPaymentPage";

// New Refinance Flow Pages
import CashOutPage from "./pages/CashOutPage";
import CashOutAmountPage from "./pages/CashOutAmountPage";
import RefinancePropertyAddressPage from "./pages/RefinancePropertyAddressPage";
import ExistingMortgagePage from "./pages/ExistingMortgagePage";
import MortgageBalancePage from "./pages/MortgageBalancePage";
import AdditionalMortgagePage from "./pages/AdditionalMortgagePage";
import AdditionalMortgageBalancePage from "./pages/AdditionalMortgageBalancePage";
import PropertyValuePage from "./pages/PropertyValuePage";

// Personal Information Pages
import PersonalInfoPage from "./pages/PersonalInfoPage";
import ContactInfoPage from "./pages/ContactInfoPage";
import CurrentAddressPage from "./pages/CurrentAddressPage";
import AddressDurationPage from "./pages/AddressDurationPage";
import PropertyRelationshipPage from "./pages/PropertyRelationshipPage";
import MortgageQuestionPage from "./pages/MortgageQuestionPage";
import PreviousAddressPage from "./pages/PreviousAddressPage";
import MailingAddressQuestionPage from "./pages/MailingAddressQuestionPage";
import MaritalStatusPage from "./pages/MaritalStatusPage";
import TaxFilingStatusPage from "./pages/TaxFilingStatusPage";
import DependentsQuestionPage from "./pages/DependentsQuestionPage";
import DependentsCountPage from "./pages/DependentsCountPage";
import DependentsAgesPage from "./pages/DependentsAgesPage";
import MilitaryServicePage from "./pages/MilitaryServicePage";
import MilitaryServiceDetailsPage from "./pages/MilitaryServiceDetailsPage";
import ServiceExpirationPage from "./pages/ServiceExpirationPage";

// Employment Pages
import EmploymentStatusPage from "./pages/EmploymentStatusPage";
import EmploymentDetailsPage from "./pages/EmploymentDetailsPage";
import SelfEmploymentDetailsPage from "./pages/SelfEmploymentDetailsPage";
import AdditionalEmploymentPage from "./pages/AdditionalEmploymentPage";
import AdditionalEmploymentDetailsPage from "./pages/AdditionalEmploymentDetailsPage";
import AdditionalEmploymentTypePage from "./pages/AdditionalEmploymentTypePage";
import AdditionalSelfEmploymentDetailsPage from "./pages/AdditionalSelfEmploymentDetailsPage";
import PreviousEmploymentTypePage from "./pages/PreviousEmploymentTypePage";
import PreviousEmploymentDetailsPage from "./pages/PreviousEmploymentDetailsPage";
import AdditionalIncomeSourcesPage from "./pages/AdditionalIncomeSourcesPage";
import IncomeSourcesPage from "./pages/IncomeSourcesPage";
import ChildSupportDetailsPage from "./pages/ChildSupportDetailsPage";
import AddMoreIncomeSourcesPage from "./pages/AddMoreIncomeSourcesPage";

// Asset Pages
import AssetsPage from "./pages/AssetsPage";
import AssetDetailPage from "./pages/AssetDetailPage";
import AddAdditionalAssetsPage from "./pages/AddAdditionalAssetsPage";
import AssetsSelectionPage from "./pages/AssetsSelectionPage";

// New Asset Detail Flow
import AssetCashValuePage from "./pages/AssetCashValuePage";
import AssetEquityValuePage from "./pages/AssetEquityValuePage";

// Real Estate Pages
import RealEstateAdditionalPage from "./pages/RealEstateAdditionalPage";
import RealEstatePrimaryPage from "./pages/RealEstatePrimaryPage";
import RealEstateSubjectPage from "./pages/RealEstateSubjectPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";

// Demographic Pages
import DemographicEthnicityPage from "./pages/DemographicEthnicityPage";
import DemographicHispanicPage from "./pages/DemographicHispanicPage";
import DemographicHispanicOtherPage from "./pages/DemographicHispanicOtherPage";
import DemographicSexPage from "./pages/DemographicSexPage";
import DemographicRacePage from "./pages/DemographicRacePage";
import DemographicAsianPage from "./pages/DemographicAsianPage";
import ApplicationCompletePage from "./pages/ApplicationCompletePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
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
            <Route path="/asset-detail/:assetId" element={<AssetDetailPage />} />
            <Route path="/add-additional-assets" element={<AddAdditionalAssetsPage />} />
            <Route path="/assets-selection" element={<AssetsSelectionPage />} />
            
            {/* New Asset Detail Flow */}
            <Route path="/asset-cash-value" element={<AssetCashValuePage />} />
            <Route path="/asset-equity-value" element={<AssetEquityValuePage />} />
            
            {/* Real Estate Flow */}
            <Route path="/real-estate-additional" element={<RealEstateAdditionalPage />} />
            <Route path="/real-estate-primary" element={<RealEstatePrimaryPage />} />
            <Route path="/real-estate-subject" element={<RealEstateSubjectPage />} />
            <Route path="/property-details" element={<PropertyDetailsPage />} />
            
            {/* Demographic Flow */}
            <Route path="/demographic-ethnicity" element={<DemographicEthnicityPage />} />
            <Route path="/demographic-hispanic" element={<DemographicHispanicPage />} />
            <Route path="/demographic-hispanic-other" element={<DemographicHispanicOtherPage />} />
            <Route path="/demographic-sex" element={<DemographicSexPage />} />
            <Route path="/demographic-race" element={<DemographicRacePage />} />
            <Route path="/demographic-asian" element={<DemographicAsianPage />} />
            <Route path="/application-complete" element={<ApplicationCompletePage />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
