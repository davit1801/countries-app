import React from 'react';
import { useParams } from 'react-router-dom';
import CountryDetails from '@/pages/country/components/DetailsCountry/CountryDetails';
import { ParamsType } from '@/static/siteContent';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';

type PropsType = {
  countriesList: CountryType[];
};

const DetailsCountry: React.FC<PropsType> = ({ countriesList }) => {
  const { id } = useParams<ParamsType>();
  // const [countryData] = useState(countriesInitialState);

  const countryInfo = countriesList.find((country) => country.id === id);

  return countryInfo ? (
    <CountryDetails info={countryInfo} />
  ) : (
    <h1 style={{ textAlign: 'center', fontSize: '2.4rem' }}>
      Country Not Found!!!
    </h1>
  );
};

export default DetailsCountry;
