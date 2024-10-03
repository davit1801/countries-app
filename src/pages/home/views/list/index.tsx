import React, { lazy } from 'react';

const country = {
  name: 'Spain',
  capital: 'Madrid',
  population: 47_000_000,
  flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
};

const LazyHeroSection = lazy(
  () => import('@/pages/home/components/HeroSection/HeroSection')
);

const LazyCountry = lazy(
  () => import('@/pages/home/components/CountrySection/CountrySection')
);

const LazyCard = lazy(() => import('@/components/Card/Card'));
const LazyCardInfo = lazy(() => import('@/components/Card/CardInfo/CardInfo'));

const CountryListView: React.FC = () => {
  return (
    <>
      <LazyHeroSection />
      <LazyCountry>
        <LazyCard country={country}>
          <LazyCardInfo country={country} />
        </LazyCard>
      </LazyCountry>
    </>
  );
};

export default CountryListView;
