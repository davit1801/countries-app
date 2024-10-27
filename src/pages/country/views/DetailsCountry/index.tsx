import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryDetails from '@/pages/country/components/DetailsCountry/CountryDetails';
import { countriesInitialState } from '@/pages/country/views/list/reducer/state';
import { ParamsType } from '@/static/siteContent';

const DetailsCountry: React.FC = () => {
  const { id, lang } = useParams<ParamsType>();
  const [countryData] = useState(countriesInitialState[lang ?? 'ka']);

  const countryInfo = countryData.find((country) => country.id === id);

  return countryInfo ? (
    <CountryDetails info={countryInfo} />
  ) : (
    <h1 style={{ textAlign: 'center', fontSize: '2.4rem' }}>
      Country Not Found!!!
    </h1>
  );
};

export default DetailsCountry;
