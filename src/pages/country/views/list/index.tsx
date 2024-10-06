import HeroSection from '@/pages/country/components/HeroSection/HeroSection';
import CountrySection from '@/pages/country/components/CountrySection/CountrySection';
import Card from '@/pages/country/components/Card/Card';
import CardInfo from '@/pages/country/components/Card/CardInfo/CardInfo';
import countriesData from '@/static/dummy-data';

const CountryListView: React.FC = () => {
  return (
    <>
      <HeroSection />
      <CountrySection>
        {countriesData.map(country => {
          return (
            <Card country={country} key={country.id}>
              <CardInfo country={country} />
            </Card>
          );
        })}
      </CountrySection>
    </>
  );
};

export default CountryListView;
