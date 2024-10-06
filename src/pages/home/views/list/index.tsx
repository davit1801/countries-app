import HeroSection from '@/pages/home/components/HeroSection/HeroSection';
import CountrySection from '@/pages/home/components/CountrySection/CountrySection';
import Card from '@/components/Card/Card';
import CardInfo from '@/components/Card/CardInfo/CardInfo';
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
