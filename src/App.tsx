import '@/App.css';
import Card from '@/components/Card/Card';
import CountrySection from '@/components/CountrySection/CountrySection';
import HeroSection from '@/components/HeroSection/HeroSection';
import CardInfo from '@/components/Card/CardInfo/CardInfo';
import Layout from './components/Layout/Layout';

const country = {
  name: 'Spain',
  capital: 'Madrid',
  population: 47_000_000,
  flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
};

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <CountrySection>
          <Card country={country}>
            <CardInfo country={country} />
          </Card>
        </CountrySection>
      </Layout>
    </>
  );
}

export default App;
