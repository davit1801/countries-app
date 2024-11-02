import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryDetails from '@/pages/country/components/DetailsCountry/CountryDetails';
import { ParamsType } from '@/static/siteContent';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';
import axios from 'axios';

const DetailsCountry: React.FC = () => {
  const [countryInfo, setCountryInfo] = useState<CountryType | null>(null);
  const { id } = useParams<ParamsType>();

  useEffect(() => {
    const getData = async (id: string | undefined) => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/countries/${id}`,
        );
        setCountryInfo(data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    getData(id);
  }, [id]);

  return countryInfo ? (
    <CountryDetails info={countryInfo} />
  ) : (
    <h1 style={{ textAlign: 'center', fontSize: '2.4rem' }}>
      Country Not Found!!!
    </h1>
  );
};

export default DetailsCountry;
