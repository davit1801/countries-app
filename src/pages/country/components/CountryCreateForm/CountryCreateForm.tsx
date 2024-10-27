import { countriesReducerAction } from '@/pages/country/views/list/reducer/reducer';
import { CountryType } from '@/pages/country/views/list/reducer/state';
import React, { Dispatch, FormEvent, useState } from 'react';
import styles from './CountryCreateForm.module.css';
import CountryCreateInput from '@/pages/country/components/CountryCreateInput/CountryCreateInput';
import { useParams } from 'react-router-dom';
import CONTENT, { ParamsType } from '@/static/siteContent';

interface CountryCreateForm {
  countriesList: CountryType[];
  dispatch: Dispatch<countriesReducerAction>;
}

const CountryCreateForm: React.FC<CountryCreateForm> = ({
  dispatch,
  countriesList,
}) => {
  const { lang } = useParams<ParamsType>();
  const { countyCreatePlaceholders, countryCreateBtn } = CONTENT[lang ?? 'ka'];
  const [countryName, setCountryName] = useState<string>('');
  const [countryCapital, setCountryCapital] = useState<string>('');
  const [countryPopulation, setCountryPopulation] = useState<string>('');
  const [countryImage, setCountryImage] = useState<string>('');
  const [errMessage, setErrMessage] = useState('');
  // const [selectedFormLang, setSelectedFormLang] = useState<string>('ka');

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
          image: countryImage,
        },
      },
    });

    resetCountryForm();
  };

  return (
    <form className={styles.country_form} onSubmit={handleCreateCountry}>
      <CountryCreateInput
        name="name"
        placeholder={countyCreatePlaceholders.countryName}
        value={countryName}
        setValue={setCountryName}
      />
      <CountryCreateInput
        name="capital"
        placeholder={countyCreatePlaceholders.countryCapital}
        value={countryCapital}
        setValue={setCountryCapital}
      />
      <CountryCreateInput
        name="population"
        placeholder={countyCreatePlaceholders.countryPopulation}
        value={countryPopulation}
        setValue={setCountryPopulation}
      />
      <CountryCreateInput
        name="image"
        placeholder={countyCreatePlaceholders.countryImg}
        value={countryImage}
        setValue={setCountryImage}
      />
      <button className={styles.create_btn} type="submit">
        {countryCreateBtn}
      </button>
      <span className={styles.errorMsg}>{errMessage}</span>
    </form>
  );
};

export default CountryCreateForm;
