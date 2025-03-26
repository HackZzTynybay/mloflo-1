
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
