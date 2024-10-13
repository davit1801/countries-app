import { countriesReducerAction } from '@/pages/country/views/list/reducer/reducer';
import { CountryType } from '@/pages/country/views/list/reducer/state';
import React, { Dispatch, FormEvent } from 'react';
import styles from './CountryCreateForm.module.css';

type CountryCreateForm = {
  countriesList: CountryType[];
  dispatch: Dispatch<countriesReducerAction>;
};

const CountryCreateForm: React.FC<CountryCreateForm> = ({
  dispatch,
  countriesList,
}) => {
  const handleCreateCountry = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const countryObj: any = {
      // id: (+countriesList.at(-1)?.id + 1).toString(),
      id: (countriesList.length + 1).toString(),
      likes: 0,
      active: true,
    };
    const formData = new FormData(e.currentTarget);

    for (const [key, value] of formData) {
      countryObj[key] = value;
    }

    dispatch({
      type: 'createCountry',
      payload: {
        newCountry: countryObj,
      },
    });

    e.currentTarget.reset();
    console.log(countryObj);
  };

  return (
    <form className={styles.country_form} onSubmit={handleCreateCountry}>
      <input
        className={styles.form_input}
        name="name"
        placeholder="Country Name"
        required
      />
      <input
        className={styles.form_input}
        name="capital"
        placeholder="Country Capital"
        required
      />
      <input
        className={styles.form_input}
        name="population"
        placeholder="Country population"
        required
      />
      <input
        className={styles.form_input}
        name="flag"
        placeholder="Country image URL"
        required
      />
      <button className={styles.create_btn} type="submit">
        Create Country
      </button>
    </form>
  );
};

export default CountryCreateForm;
