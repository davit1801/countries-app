import Card from '@/components/Card/Card';
import CardInfo from '@/components/Card/CardInfo/CardInfo';
import CountrySection from '@/pages/home/components/CountrySection/CountrySection';
import HeroSection from '@/pages/home/components/HeroSection/HeroSection';
import React from 'react';

const country = {
  name: 'Spain',
  capital: 'Madrid',
  population: 47_000_000,
  flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
};

const CountryListView: React.FC = () => {
  return (
    <>
      <HeroSection />
      <CountrySection>
        <Card country={country}>
          <CardInfo country={country} />
        </Card>
      </CountrySection>
    </>
  );
};

export default CountryListView;
