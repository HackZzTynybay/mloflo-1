
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface Declaration {
  id: string;
  question: string;
  checked: boolean;
}

const DeclarationsPage = () => {
  const navigate = useNavigate();
  
  const [declarations, setDeclarations] = useState<Declaration[]>([
    {
      id: 'bankruptcy',
      question: 'Are there any outstanding judgments against you?',
      checked: false
    },
    {
      id: 'foreclosure',
      question: 'Have you been declared bankrupt within the past 7 years?',
      checked: false
    },
    {
      id: 'lawsuit',
      question: 'Have you had property foreclosed upon or given title or deed in lieu thereof in the last 7 years?',
      checked: false
    },
    {
      id: 'delinquent',
      question: 'Are you a party to a lawsuit?',
      checked: false
    },
    {
      id: 'alimony',
      question: 'Have you directly or indirectly been obligated on any loan which resulted in foreclosure, transfer of title in lieu of foreclosure, or judgment?',
      checked: false
    }
  ]);

  const toggleDeclaration = (id: string) => {
    setDeclarations(prev => 
      prev.map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleNext = () => {
    navigate('/review-submit');
  };

  return (
    <Layout 
      currentStep={6} 
      totalSteps={10} 
      title="Declarations"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Declaration Questions
        </h1>
        <p className="text-gray-600 mb-10 text-center max-w-2xl">
          Please answer the following questions. These questions apply to both you and any co-borrower.
          If you answer "yes" to any questions, please use the continuation sheet for an explanation.
        </p>
        
        <Card className="w-full mb-10">
          <CardHeader>
            <CardTitle className="text-xl">Financial Declarations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {declarations.map(declaration => (
              <div key={declaration.id} className="flex items-start space-x-3">
                <div className="flex items-center space-x-3 mt-1">
                  <Checkbox 
                    id={`yes-${declaration.id}`} 
                    checked={declaration.checked} 
                    onCheckedChange={() => toggleDeclaration(declaration.id)}
                  />
                  <Label htmlFor={`yes-${declaration.id}`}>Yes</Label>
                </div>
                
                <div className="flex items-center space-x-3 ml-6 mt-1">
                  <Checkbox 
                    id={`no-${declaration.id}`} 
                    checked={!declaration.checked} 
                    onCheckedChange={() => toggleDeclaration(declaration.id)}
                  />
                  <Label htmlFor={`no-${declaration.id}`}>No</Label>
                </div>
                
                <p className="text-gray-700 mt-1">{declaration.question}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex justify-center mt-6">
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
            onClick={() => navigate('/other-assets')}
          >
            Back
          </Button>
          
          <Button 
            type="button"
            className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default DeclarationsPage;
