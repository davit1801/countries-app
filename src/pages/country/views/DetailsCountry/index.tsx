import React from 'react';
import { useParams } from 'react-router-dom';
import CountryDetails from '@/pages/country/components/DetailsCountry/CountryDetails';
import { getOneCountry } from '@/api/countries';
import { useQuery } from '@tanstack/react-query';
import Loading from '@/components/Loading';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';

const DetailsCountry: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: countryInfo,
    isLoading,
    isError,
  } = useQuery<CountryType | undefined>({
    queryKey: ['single-country', id],
    queryFn: () => getOneCountry(id as string),
    gcTime: 1000 * 60,
    staleTime: 1000 * 60,
  });

  if (isError)
    return (
      <h1 style={{ textAlign: 'center', fontSize: '2.4rem' }}>
        Country Not Found!!!
      </h1>
    );

  return isLoading ? (
    <Loading />
  ) : (
    <CountryDetails info={countryInfo as CountryType} />
  );
};

export default DetailsCountry;
