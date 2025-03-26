
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

const OtherAssetsPage = () => {
  const navigate = useNavigate();
  const [otherAssets, setOtherAssets] = useState([
    { type: '', value: '' }
  ]);

  const handleAddAsset = () => {
    setOtherAssets([...otherAssets, { type: '', value: '' }]);
  };

  const handleRemoveAsset = (index: number) => {
    const updatedAssets = [...otherAssets];
    updatedAssets.splice(index, 1);
    setOtherAssets(updatedAssets);
  };

  const handleAssetChange = (index: number, field: 'type' | 'value', value: string) => {
    const updatedAssets = [...otherAssets];
    updatedAssets[index][field] = value;
    setOtherAssets(updatedAssets);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/declarations-page');
  };

  return (
    <Layout 
      currentStep={5} 
      totalSteps={10} 
      title="Assets"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-2xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Do you have any other assets?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {otherAssets.map((asset, index) => (
            <Card key={index} className="w-full mb-4">
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-4">
                  <div>
                    <Label htmlFor={`asset-type-${index}`}>Asset Type</Label>
                    <Input
                      id={`asset-type-${index}`}
                      placeholder="Asset Type"
                      value={asset.type}
                      onChange={(e) => handleAssetChange(index, 'type', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor={`asset-value-${index}`}>Value</Label>
                    <div className="relative mt-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">$</span>
                      </div>
                      <Input
                        id={`asset-value-${index}`}
                        placeholder="0.00"
                        value={asset.value}
                        onChange={(e) => handleAssetChange(index, 'value', e.target.value)}
                        className="pl-7"
                        type="number"
                        step="0.01"
                      />
                    </div>
                  </div>
                  
                  {index > 0 && (
                    <Button
                      type="button"
                      variant="outline"
                      className="self-end text-red-500 border-red-300 hover:bg-red-50"
                      onClick={() => handleRemoveAsset(index)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Button
            type="button"
            variant="outline"
            className="w-full bg-blue-50 text-mloflo-blue hover:bg-blue-100 border-none rounded-md"
            onClick={handleAddAsset}
          >
            + Add Another Asset
          </Button>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/add-additional-assets')}
            >
              Back
            </Button>
            
            <Button 
              type="submit"
              className="bg-mloflo-blue hover:bg-blue-700 ml-4 rounded-full px-10 py-2"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default OtherAssetsPage;
