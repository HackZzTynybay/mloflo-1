
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { MapPin } from 'lucide-react';

const PropertyAddressPage = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [aptUnit, setAptUnit] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [businessSpace, setBusinessSpace] = useState('no');
  const [addGift, setAddGift] = useState('no');
  const [showExtendedForm, setShowExtendedForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/purchase-price');
  };

  const toggleExtendedForm = () => {
    setShowExtendedForm(!showExtendedForm);
  };

  return (
    <Layout 
      currentStep={2} 
      totalSteps={10} 
      title="Loan & Property"
    >
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          What is your property address?
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-8">
          {!showExtendedForm ? (
            <div className="relative mb-6">
              <Label htmlFor="address" className="block mb-2 text-gray-700">Property Address</Label>
              <div className="relative">
                <Input
                  id="address"
                  placeholder="Property Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 pr-10 py-6"
                  onClick={toggleExtendedForm}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <MapPin size={16} />
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <Label htmlFor="address" className="block mb-2 text-gray-700">Property Address</Label>
                <div className="relative">
                  <Input
                    id="address"
                    placeholder="Property Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-1 pr-10 py-6"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <MapPin size={16} />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="city" className="block mb-2 text-gray-700">City</Label>
                <Input
                  id="city"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-1 py-6"
                />
              </div>

              <div className="mb-6">
                <Label htmlFor="state" className="block mb-2 text-gray-700">State</Label>
                <Input
                  id="state"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="mt-1 py-6"
                />
              </div>

              <div className="mb-6">
                <Label htmlFor="aptUnit" className="block mb-2 text-gray-700">Apt/Unit</Label>
                <Input
                  id="aptUnit"
                  placeholder="Apt/Unit"
                  value={aptUnit}
                  onChange={(e) => setAptUnit(e.target.value)}
                  className="mt-1 py-6"
                />
              </div>

              <div className="mb-6">
                <Label htmlFor="zipCode" className="block mb-2 text-gray-700">Zip Code</Label>
                <Input
                  id="zipCode"
                  placeholder="Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="mt-1 py-6"
                />
              </div>
            </>
          )}

          <div className="mb-8">
            <Label className="block mb-4 text-gray-700">
              If you occupy the property, will you set aside space within the property to operate your business? (e.g., daycare facility, medical office, beauty/barber shop)?
            </Label>
            <RadioGroup value={businessSpace} onValueChange={setBusinessSpace} className="flex gap-8 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="business-yes" />
                <Label htmlFor="business-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="business-no" />
                <Label htmlFor="business-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="mb-8">
            <Label className="block mb-4 text-gray-700">
              Do you want to add gift or grants you have been given or will receive for this loan?
            </Label>
            <RadioGroup value={addGift} onValueChange={setAddGift} className="flex gap-8 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="gift-yes" />
                <Label htmlFor="gift-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="gift-no" />
                <Label htmlFor="gift-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              type="button"
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300 border-none rounded-full px-10 py-2"
              onClick={() => navigate('/property-found')}
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

export default PropertyAddressPage;
