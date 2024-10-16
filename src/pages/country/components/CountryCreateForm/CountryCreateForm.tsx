import { countriesReducerAction } from '@/pages/country/views/list/reducer/reducer';
import { CountryType } from '@/pages/country/views/list/reducer/state';
import React, { Dispatch, FormEvent, useState } from 'react';
import styles from './CountryCreateForm.module.css';
import CountryCreateInput from '@/pages/country/components/CountryCreateInput/CountryCreateInput';

type CountryCreateForm = {
  countriesList: CountryType[];
  dispatch: Dispatch<countriesReducerAction>;
};

const CountryCreateForm: React.FC<CountryCreateForm> = ({
  dispatch,
  countriesList,
}) => {
  const [countryName, setCountryName] = useState<string>('');
  const [countryCapital, setCountryCapital] = useState<string>('');
  const [countryPopulation, setCountryPopulation] = useState<string>('');
  const [countryImage, setCountryImage] = useState<string>('');
  const [errMessage, setErrMessage] = useState('');

  const resetCountryForm = () => {
    setCountryName('');
    setCountryCapital('');
    setCountryPopulation('');
    setCountryImage('');
  };

  const handleCreateCountry = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      countryName === '' ||
      countryCapital === '' ||
      countryPopulation === '' ||
      countryImage === ''
    ) {
      setErrMessage('გთხოვთ შეავსოთ ყველა ველი!');
      return;
    } else setErrMessage('');

    dispatch({
      type: 'createCountry',
      payload: {
        newCountry: {
          id: (countriesList.length + 1).toString(),
          likes: 0,
          active: true,
          name: countryName,
          capital: countryCapital,
          population: +countryPopulation,
          flag: countryImage,
        },
      },
    });

    resetCountryForm();
  };

  return (
    <form className={styles.country_form} onSubmit={handleCreateCountry}>
      <CountryCreateInput
        name="name"
        placeholder="Country Name"
        value={countryName}
        setValue={setCountryName}
      />
      <CountryCreateInput
        name="capital"
        placeholder="Country Capital"
        value={countryCapital}
        setValue={setCountryCapital}
      />
      <CountryCreateInput
        name="population"
        placeholder="Country population"
        value={countryPopulation}
        setValue={setCountryPopulation}
      />
      <CountryCreateInput
        name="image"
        placeholder="Country image URL"
        value={countryImage}
        setValue={setCountryImage}
      />
      <button className={styles.create_btn} type="submit">
        Create Country
      </button>
      <span className={styles.errorMsg}>{errMessage}</span>
    </form>
  );
};

export default CountryCreateForm;
