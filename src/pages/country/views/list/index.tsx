import { Dispatch } from 'react';
import styles from './index.module.css';
import HeroSection from '@/pages/country/components/HeroSection/HeroSection';
import CountrySection from '@/pages/country/components/CountrySection/CountrySection';
import Card from '@/pages/country/components/Card/Card';
import CardInfo from '@/pages/country/components/Card/CardInfo/CardInfo';
import LikeButton from '@/components/Buttons/LikeButton/LikeButton';
import SortSelect from '@/pages/country/components/Form/SortSelect/SortSelect';
import { countriesReducerAction } from '@/pages/country/views/list/reducer/reducer';
import CountryCreateForm from '@/pages/country/components/Form/CountryCreateForm/CountryCreateForm';
import CountryDelateBtn from '@/components/Buttons/CountryDelateBtn/CountryDelateBtn';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';

interface ComponentProps {
  countriesList: CountryType[];
  dispatch: Dispatch<countriesReducerAction>;
}

const CountryListView: React.FC<ComponentProps> = ({
  countriesList,
  dispatch,
}) => {
  return (
    <>
      <HeroSection />
      <CountrySection>
        <SortSelect dispatch={dispatch} />
        <CountryCreateForm dispatch={dispatch} countriesList={countriesList} />
        <ul className={styles.countries}>
          {countriesList.map((country: CountryType) => {
            return (
              <li key={country.id}>
                <Card country={country}>
                  <CardInfo country={country} />
                  <LikeButton country={country} dispatch={dispatch} />
                  <CountryDelateBtn country={country} dispatch={dispatch} />
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
