
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
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

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/additional-real-estate-properties" element={<AdditionalRealEstatePropertiesPage />} />
            <Route path="/add-additional-assets" element={<AddAdditionalAssetsPage />} />
            <Route path="/choose-other-assets" element={<ChooseOtherAssetsPage />} />
            <Route path="/other-assets" element={<OtherAssetsPage />} />
            <Route path="/assets" element={<AssetsPage />} />
            <Route path="/asset-detail/:assetType" element={<AssetDetailPage />} />
            
            <Route path="/personal-info" element={<PersonalInfoPage />} />
            <Route path="/additional-property-primary" element={<AdditionalPropertyPrimaryPage />} />
            <Route path="/additional-property-detail" element={<AdditionalPropertyDetailPage />} />
            <Route path="/hispanic-details" element={<HispanicDetailsPage />} />
            <Route path="/other-hispanic" element={<OtherHispanicPage />} />
            <Route path="/sex" element={<SexPage />} />
            <Route path="/declarations-page" element={<DeclarationsPage />} />
            <Route path="/income" element={<IncomePage />} />
            <Route path="/add-more-income-sources" element={<AddMoreIncomeSourcesPage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
