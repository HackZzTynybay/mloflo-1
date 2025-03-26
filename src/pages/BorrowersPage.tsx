
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import NumberSvg from '../components/NumberSvg';

const BorrowersPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  const handleSelect = (number: number) => {
    setSelectedOption(number);
  };
  
  const handleNext = () => {
    if (selectedOption !== null) {
      navigate(`/co-borrower?count=${selectedOption}`);
    }
  };
  
  return (
    <Layout currentStep={2} title="Welcome">
      <div className="flex flex-col items-center justify-center flex-grow py-8">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-12 text-center">
            How many borrowers will fill the application?
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div 
              className={`number-card ${selectedOption === 1 ? 'selected' : ''}`}
              onClick={() => handleSelect(1)}
            >
              <NumberSvg number={1} selected={selectedOption === 1} />
              <div className="mt-4 text-center">
                <p className="font-medium">Borrower</p>
                <p className="text-sm text-gray-500">(My Self)</p>
              </div>
            </div>
            
            <div 
              className={`number-card ${selectedOption === 2 ? 'selected' : ''}`}
              onClick={() => handleSelect(2)}
            >
              <NumberSvg number={2} selected={selectedOption === 2} />
              <div className="mt-4 text-center">
                <p className="font-medium">Borrowers</p>
              </div>
            </div>
            
            <div 
              className={`number-card ${selectedOption === 3 ? 'selected' : ''}`}
              onClick={() => handleSelect(3)}
            >
              <NumberSvg number={3} selected={selectedOption === 3} />
              <div className="mt-4 text-center">
                <p className="font-medium">Borrowers</p>
              </div>
            </div>
            
            <div 
              className={`number-card ${selectedOption === 4 ? 'selected' : ''}`}
              onClick={() => handleSelect(4)}
            >
              <NumberSvg number={4} selected={selectedOption === 4} />
              <div className="mt-4 text-center">
                <p className="font-medium">Borrowers</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={handleNext}
              className={`btn-primary ${!selectedOption ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!selectedOption}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BorrowersPage;
