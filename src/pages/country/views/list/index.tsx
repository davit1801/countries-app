import { useState } from 'react';
import HeroSection from '@/pages/country/components/HeroSection/HeroSection';
import CountrySection from '@/pages/country/components/CountrySection/CountrySection';
import Card from '@/pages/country/components/Card/Card';
import CardInfo from '@/pages/country/components/Card/CardInfo/CardInfo';
import LikeButton from '@/components/Buttons/LikeButton/LikeButton';
import styles from './index.module.css';
import SortSelect from '@/pages/country/components/SortSelect/SortSelect';

const CountryListView: React.FC = () => {
  const [countrysData, setCountrysData] = useState([
    {
      id: '1',
      name: 'Spain',
      capital: 'Madrid',
      population: 47_000_000,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
      likes: 0,
    },
    {
      id: '2',
      name: 'Italy',
      capital: 'Rome',
      population: 59_000_000,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
      likes: 0,
    },
    {
      id: '3',
      name: 'Germany',
      capital: 'Berlin',
      population: 84_000_000,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png',
      likes: 0,
    },
  ]);

  const sortData = (type: string) => {
    setCountrysData(
      [...countrysData].sort((a, b) => {
        if (type === 'increase') return b.likes - a.likes;
        if (type === 'decrease') return a.likes - b.likes;
        return 0;
      })
    );
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    sortData(e.target.value);
  };

  return (
    <>
      <HeroSection />
      <CountrySection>
        <SortSelect handleSortChange={handleSortChange} />
        <ul className={styles.countries}>
          {countrysData.map(country => {
            return (
              <li key={country.id}>
                <Card country={country}>
                  <CardInfo country={country} />
                  <LikeButton
                    country={country}
                    setCountryData={setCountrysData}
                  />
                </Card>
              </li>
            );
          })}
        </ul>
      </CountrySection>
    </>
  );
};

export default CountryListView;
