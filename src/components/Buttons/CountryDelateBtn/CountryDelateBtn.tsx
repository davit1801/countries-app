import { countriesReducerAction } from '@/pages/country/views/list/reducer/reducer';
import React, { Dispatch } from 'react';
import styles from './CountryDelateBtn.module.css';
import { MdDelete } from 'react-icons/md';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';
import axios from 'axios';

interface ComponentProps {
  country: CountryType;
  dispatch: Dispatch<countriesReducerAction>;
}

const CountryDelateBtn: React.FC<ComponentProps> = ({ country, dispatch }) => {
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

    try {
      await axios.delete(`http://localhost:3000/countries/${country.id}`);
      console.log(`Country with ID ${country.id} deleted successfully.`);
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  return (
    <button className={styles.delete_btn} onClick={handleDeleteCard}>
      <MdDelete />
    </button>
  );
};

export default CountryDelateBtn;
