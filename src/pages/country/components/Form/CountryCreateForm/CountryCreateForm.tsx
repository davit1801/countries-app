import { countriesReducerAction } from '@/pages/country/views/list/reducer/reducer';
import React, { Dispatch, FormEvent, useEffect, useState } from 'react';
import styles from './CountryCreateForm.module.css';
import CountryCreateInput from '@/pages/country/components/Form/CountryCreateInput/CountryCreateInput';
import { useParams } from 'react-router-dom';
import CONTENT, { ParamsType } from '@/static/siteContent';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';
import { addNewCountry, updateCountry } from '@/api/countries';
import { useMutation } from '@tanstack/react-query';

interface CountryCreateForm {
  countriesList: CountryType[];
  dispatch: Dispatch<countriesReducerAction>;
  editingCountry?: CountryType | null;
  setEditingCountry: React.Dispatch<React.SetStateAction<CountryType | null>>;
}

const CountryCreateForm: React.FC<CountryCreateForm> = ({
  dispatch,
  countriesList,
  editingCountry,
  setEditingCountry,
}) => {
  const { lang } = useParams<ParamsType>();
  const { countyCreatePlaceholders, countryCreateBtn, countryEditBtn } =
    CONTENT[lang ?? 'ka'];
  const [errMessage, setErrMessage] = useState('');

  const [countryNameEng, setCountryNameEng] = useState<string>('');
  const [countryNameKa, setCountryNameKa] = useState<string>('');
  const [countryCapitalEng, setCountryCapitalEng] = useState<string>('');
  const [countryCapitalKa, setCountryCapitalKa] = useState<string>('');
  const [countryPopulation, setCountryPopulation] = useState<string>('');
  const [countryImage, setCountryImage] = useState<string>('');

  const { mutate: addCountry, isPending: pendingAdding } = useMutation({
    mutationFn: addNewCountry,
  });

  const { mutate: mutateCountry, isPending: pendingEditing } = useMutation({
    mutationFn: updateCountry,
  });

  useEffect(() => {
    if (editingCountry) {
      setCountryNameEng(editingCountry.name.eng);
      setCountryNameKa(editingCountry.name.ka);
      setCountryCapitalEng(editingCountry.capital.eng);
      setCountryCapitalKa(editingCountry.capital.ka);
      setCountryPopulation(editingCountry.population.toString());
      setCountryImage(editingCountry.image || '');
    } else {
      resetCountryForm();
    }
  }, [editingCountry]);

  const resetCountryForm = () => {
    setCountryNameKa('');
    setCountryNameEng('');
    setCountryCapitalEng('');
    setCountryCapitalKa('');
    setCountryPopulation('');
    setCountryImage('');
  };

  const handleCreateOrUpdateCountry = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      countryNameEng === '' ||
      countryCapitalEng === '' ||
      countryCapitalKa === '' ||
      countryNameKa === '' ||
      countryPopulation === '' ||
      countryImage === ''
    ) {
      setErrMessage('Please fill all fields!');
      return;
    } else setErrMessage('');

    const country: CountryType = {
      id: editingCountry
        ? editingCountry.id
        : (+countriesList[countriesList.length - 1].id + 1).toString(),
      likes: editingCountry?.likes || 0,
      population: +countryPopulation,
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

    if (editingCountry) {
      // Update existing country
      dispatch({
        type: 'updateCountry',
        payload: {
          country,
        },
      });
      // updateCountry(country, editingCountry.id);
      mutateCountry({ id: editingCountry.id, payload: country });

      setEditingCountry(null);
    } else {
      // Create new country
      dispatch({
        type: 'createCountry',
        payload: {
          newCountry: country,
        },
      });
      // addNewCountry(country);
      addCountry(country);
    }

    resetCountryForm();
  };

  return (
    <form
      className={styles.country_form}
      onSubmit={handleCreateOrUpdateCountry}
    >
      <div className={styles.form_countries_inputs}>
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
      </div>

      <div className={styles.form_capitals_inputs}>
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
      </div>

      <CountryCreateInput
        name="image"
        setValue={setCountryImage}
        type="file"
        accept=".png, .jpg"
      />

      <CountryCreateInput
        name="population"
        placeholder={countyCreatePlaceholders.countryPopulation}
        value={countryPopulation}
        setValue={setCountryPopulation}
      />

      <button
        className={styles.create_btn}
        type="submit"
        disabled={pendingAdding || pendingEditing}
      >
        {editingCountry ? countryEditBtn : countryCreateBtn}
      </button>
      <span className={styles.errorMsg}>{errMessage}</span>
    </form>
  );
};

export default CountryCreateForm;
