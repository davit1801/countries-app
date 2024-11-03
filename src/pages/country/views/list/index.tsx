import { Dispatch, useState } from 'react';
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
import OTPInputs from '@/pages/country/components/OTPInputs/OTPInputs';
import CountryEditBtn from '@/components/Buttons/CountryEditBtn/CountryEditBtn';

interface ComponentProps {
  countriesList: CountryType[];
  dispatch: Dispatch<countriesReducerAction>;
}

const CountryListView: React.FC<ComponentProps> = ({
  countriesList,
  dispatch,
}) => {
  const [editingCountry, setEditingCountry] = useState<CountryType | null>(
    null,
  );

  return (
    <>
      <HeroSection />
      <CountrySection>
        <SortSelect dispatch={dispatch} />
        <CountryCreateForm
          dispatch={dispatch}
          countriesList={countriesList}
          editingCountry={editingCountry}
          setEditingCountry={setEditingCountry}
        />
        <ul className={styles.countries}>
          {countriesList.map((country: CountryType) => {
            return (
              <li key={country.id}>
                <Card country={country} editingCountry={editingCountry}>
                  <CardInfo country={country} />
                  <LikeButton country={country} dispatch={dispatch} />
                  <div className={styles.countries_btns}>
                    <CountryEditBtn
                      country={country}
                      setEditingCountry={setEditingCountry}
                    />
                    <CountryDelateBtn country={country} dispatch={dispatch} />
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      </CountrySection>
      <OTPInputs inputQnty={4} />
    </>
  );
};

export default CountryListView;
