import { countriesReducerAction } from '@/pages/country/views/list/reducer/reducer';
import React, { Dispatch, FormEvent, useState } from 'react';
import styles from './CountryCreateForm.module.css';
import CountryCreateInput from '@/pages/country/components/Form/CountryCreateInput/CountryCreateInput';
import { useParams } from 'react-router-dom';
import CONTENT, { ParamsType } from '@/static/siteContent';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';
import axios from 'axios';

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
  const [errMessage, setErrMessage] = useState('');

  const [countryNameEng, setCountryNameEng] = useState<string>('');
  const [countryNameKa, setCountryNameKa] = useState<string>('');
  const [countryCapitalEng, setCountryCapitalEng] = useState<string>('');
  const [countryCapitalKa, setCountryCapitalKa] = useState<string>('');
  const [countryPopulation, setCountryPopulation] = useState<string>('');
  const [countryImage, setCountryImage] = useState<string>('');

  const resetCountryForm = () => {
    setCountryNameKa('');
    setCountryNameEng('');
    setCountryCapitalEng('');
    setCountryCapitalKa('');
    setCountryPopulation('');
    setCountryImage('');
  };

  const handleCreateCountry = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      countryNameEng === '' ||
      countryCapitalEng === '' ||
      countryCapitalKa === '' ||
      countryNameKa === '' ||
      countryPopulation === '' ||
      countryImage === ''
    ) {
      setErrMessage('გთხოვთ შეავსოთ ყველა ველი!');
      return;
    } else setErrMessage('');

    const newCountry = {
      id: (+countriesList[countriesList.length - 1].id + 1).toString(),
      likes: 0,
      population: +countryPopulation,
      active: true,
      image: typeof countryImage === 'string' ? countryImage : '',
      name: {
        ka: countryNameKa,
        eng: countryNameEng,
      },
      capital: {
        ka: countryCapitalKa,
        eng: countryCapitalEng,
      },
    };

    dispatch({
      type: 'createCountry',
      payload: {
        newCountry,
      },
    });

    try {
      axios.post('http://localhost:3000/countries', newCountry);
    } catch (error) {
      console.error('Error creating country:', error);
    }

    resetCountryForm();
  };

  return (
    <form className={styles.country_form} onSubmit={handleCreateCountry}>
      <CountryCreateInput
        name="name"
        placeholder="ქვეყანა"
        value={countryNameKa}
        setValue={setCountryNameKa}
      />
      <CountryCreateInput
        name="name"
        placeholder="Country"
        value={countryNameEng}
        setValue={setCountryNameEng}
      />
      <CountryCreateInput
        name="capital"
        placeholder="დედაქალაქი"
        value={countryCapitalKa}
        setValue={setCountryCapitalKa}
      />
      <CountryCreateInput
        name="capital"
        placeholder="Capital"
        value={countryCapitalEng}
        setValue={setCountryCapitalEng}
      />
      <CountryCreateInput
        name="population"
        placeholder={countyCreatePlaceholders.countryPopulation}
        value={countryPopulation}
        setValue={setCountryPopulation}
      />
      <CountryCreateInput
        name="image"
        setValue={setCountryImage}
        type="file"
        accept=".png, .jpg"
      />
      <button className={styles.create_btn} type="submit">
        {countryCreateBtn}
      </button>
      <span className={styles.errorMsg}>{errMessage}</span>
    </form>
  );
};

export default CountryCreateForm;
