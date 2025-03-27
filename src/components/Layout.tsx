
import React from 'react';
import Logo from './Logo';
import ProgressBar from './ProgressBar';
import HelpCircle from './HelpCircle';
import ThemeToggle from './ThemeToggle';
import { LogOut } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
  currentStep?: number;
  totalSteps?: number;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentStep = 1, 
  totalSteps = 10,
  title = "Welcome"
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen max-w-6xl mx-auto bg-background text-foreground p-3 sm:p-6 flex flex-col animate-fade-in">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-3">
        <Logo />
        
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto justify-center sm:justify-between">
          <h2 className="text-xl font-medium text-center sm:mr-4 mb-2 sm:mb-0">{title}</h2>
          {!isMobile && <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />}
        </div>
        
        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <ThemeToggle />
          <button className="flex items-center space-x-1 sm:space-x-2 bg-mloflo-blue text-white px-2 sm:px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
            <LogOut size={isMobile ? 14 : 16} />
            <span className="text-sm sm:text-base">Logout</span>
          </button>
        </div>
      </header>
      
      {isMobile && (
        <div className="mb-4">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>
      )}
      
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      
      <footer className="flex justify-end mt-4 sm:mt-6">
        <HelpCircle />
      </footer>
    </div>
  );
};

export default Layout;
