import React from 'react';
import { useParams } from 'react-router-dom';
import countriesData from '@/static/dummy-data';

const DetailsCountry: React.FC = () => {
  const { id } = useParams();

  const countryInfo = countriesData.find(country => country.id === id);
  if (!countryInfo) {
    return (
      <h1 style={{ textAlign: 'center', fontSize: '2.4rem' }}>
        Country Not Found!!!
      </h1>
    );
  }
  console.log(countryInfo);

  return (
    <div style={{ textAlign: 'center', fontSize: '2.4rem' }}>
      DetailsCountry
    </div>
  );
};

export default DetailsCountry;
