
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BorrowersPage from "./pages/BorrowersPage";
import CoBorrowerPage from "./pages/CoBorrowerPage";
import NotFound from "./pages/NotFound";

// New Mortgage Application Routes
import LoanTypePage from "./pages/LoanTypePage";
import RealtorPage from "./pages/RealtorPage";
import RealtorInfoPage from "./pages/RealtorInfoPage";
import PropertyTypePage from "./pages/PropertyTypePage";
import PropertyUsePage from "./pages/PropertyUsePage";
import PropertyFoundPage from "./pages/PropertyFoundPage";
import PropertyAddressPage from "./pages/PropertyAddressPage";
import PurchasePricePage from "./pages/PurchasePricePage";
import DownPaymentPage from "./pages/DownPaymentPage";

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
          
          {/* Mortgage Application Flow */}
          <Route path="/loan-type" element={<LoanTypePage />} />
          <Route path="/realtor" element={<RealtorPage />} />
          <Route path="/realtor-info" element={<RealtorInfoPage />} />
          <Route path="/property-type" element={<PropertyTypePage />} />
          <Route path="/property-use" element={<PropertyUsePage />} />
          <Route path="/property-found" element={<PropertyFoundPage />} />
          <Route path="/property-address" element={<PropertyAddressPage />} />
          <Route path="/purchase-price" element={<PurchasePricePage />} />
          <Route path="/down-payment" element={<DownPaymentPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
