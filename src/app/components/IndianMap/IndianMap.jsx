import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReactTooltip from 'react-tooltip';
import Image from 'next/image';

const stateWebsites = {
  'Andhra Pradesh': 'https://ap.gov.in/',
  'Arunachal Pradesh': 'https://arunachalpradesh.gov.in/',
  'Assam': 'https://assam.gov.in/',
  'Bihar': 'https://state.bihar.gov.in/',
  'Chhattisgarh': 'https://cg.gov.in/',
  'Goa': 'https://goa.gov.in/',
  'Gujarat': 'https://gujaratindia.gov.in/',
  'Haryana': 'https://haryana.gov.in/',
  'Himachal Pradesh': 'https://himachal.nic.in/',
  'Jharkhand': 'https://jharkhand.gov.in/',
  'Karnataka': 'https://www.karnataka.gov.in/',
  'Kerala': 'https://kerala.gov.in/',
  'Madhya Pradesh': 'https://mp.gov.in/',
  'Maharashtra': 'https://maharashtra.gov.in/',
  'Manipur': 'https://manipur.gov.in/',
  'Meghalaya': 'https://meghalaya.gov.in/',
  'Mizoram': 'https://mizoram.gov.in/',
  'Nagaland': 'https://nagaland.gov.in/',
  'Odisha': 'https://odisha.gov.in/',
  'Punjab': 'https://punjab.gov.in/',
  'Rajasthan': 'https://rajasthan.gov.in/',
  'Sikkim': 'https://sikkim.gov.in/',
  'Tamil Nadu': 'https://www.tn.gov.in/',
  'Telangana': 'https://www.telangana.gov.in/',
  'Tripura': 'https://tripura.gov.in/',
  'Uttar Pradesh': 'https://up.gov.in/',
  'Uttarakhand': 'https://uk.gov.in/',
  'West Bengal': 'https://wb.gov.in/',
};

const stateImages = {
  'Andhra Pradesh': 'https://example.com/andhra-pradesh.jpg',
  'Arunachal Pradesh': 'https://example.com/arunachal-pradesh.jpg',
  'Assam': 'https://example.com/assam.jpg',
  'Bihar': 'https://example.com/bihar.jpg',
  'Chhattisgarh': 'https://example.com/chhattisgarh.jpg',
  'Goa': 'https://example.com/goa.jpg',
  'Gujarat': 'https://example.com/gujarat.jpg',
  'Haryana': 'https://example.com/haryana.jpg',
  'Himachal Pradesh': 'https://example.com/himachal-pradesh.jpg',
  'Jharkhand': 'https://example.com/jharkhand.jpg',
  'Karnataka': 'https://example.com/karnataka.jpg',
  'Kerala': 'https://example.com/kerala.jpg',
  'Madhya Pradesh': 'https://example.com/madhya-pradesh.jpg',
  'Maharashtra': 'https://example.com/maharashtra.jpg',
  'Manipur': 'https://example.com/manipur.jpg',
  'Meghalaya': 'https://example.com/meghalaya.jpg',
  'Mizoram': 'https://example.com/mizoram.jpg',
  'Nagaland': 'https://example.com/nagaland.jpg',
  'Odisha': 'https://example.com/odisha.jpg',
  'Punjab': 'https://example.com/punjab.jpg',
  'Rajasthan': 'https://example.com/rajasthan.jpg',
  'Sikkim': 'https://example.com/sikkim.jpg',
  'Tamil Nadu': 'https://example.com/tamil-nadu.jpg',
  'Telangana': 'https://example.com/telangana.jpg',
  'Tripura': 'https://example.com/tripura.jpg',
  'Uttar Pradesh': 'https://example.com/uttar-pradesh.jpg',
  'Uttarakhand': 'https://example.com/uttarakhand.jpg',
  'West Bengal': 'https://example.com/west-bengal.jpg',
};

const IndianMap = () => {
  const handleStateClick = (state) => {
    const website = stateWebsites[state];
    if (website) {
      window.open(website, '_blank');
    } else {
      alert('Website not available for this state.');
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Interactive Indian Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.keys(stateWebsites).map((state) => (
            <div
              key={state}
              className="relative"
              data-tip
              data-for={state}
              onClick={() => handleStateClick(state)}
            >
              <Image
                src={stateImages[state]}
                alt={state}
                className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
              ></Image>
              <ReactTooltip id={state} place="top" effect="solid">
                {state}
              </ReactTooltip>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default IndianMap;
