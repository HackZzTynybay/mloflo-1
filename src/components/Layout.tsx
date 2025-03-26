
import React from 'react';
import Logo from './Logo';
import ProgressBar from './ProgressBar';
import HelpCircle from './HelpCircle';
import ThemeToggle from './ThemeToggle';
import { LogOut } from 'lucide-react';

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
  return (
    <div className="min-h-screen max-w-6xl mx-auto bg-background text-foreground p-6 flex flex-col animate-fade-in">
      <header className="flex justify-between items-center mb-6">
        <Logo />
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-medium text-center mr-4">{title}</h2>
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <button className="flex items-center space-x-2 bg-mloflo-blue text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </header>
      
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      
      <footer className="flex justify-end mt-6">
        <HelpCircle />
      </footer>
    </div>
  );
};

export default Layout;
