import { countriesReducerAction } from '@/pages/country/views/list/reducer/reducer';
import React, { Dispatch } from 'react';
import styles from './CountryDelateBtn.module.css';
import { MdDelete } from 'react-icons/md';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';
import { deleteCountry } from '@/api/countries';
import { useMutation } from '@tanstack/react-query';

interface ComponentProps {
  country: CountryType;
  dispatch: Dispatch<countriesReducerAction>;
}

const CountryDelateBtn: React.FC<ComponentProps> = ({ country, dispatch }) => {
  const { mutate } = useMutation({ mutationFn: deleteCountry });
  const handleDeleteCard: React.MouseEventHandler<HTMLButtonElement> = async (
    e,
  ) => {
    e.preventDefault();
    dispatch({
      type: 'delete',
      payload: {
        id: country.id,
      },
    });

    mutate(country.id);
  };

  return (
    <button className={styles.delete_btn} onClick={handleDeleteCard}>
      <MdDelete />
    </button>
  );
};

export default CountryDelateBtn;
