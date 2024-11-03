import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import styles from './CountryEditBtn.module.css';

interface ComponentProps {
  country: CountryType;
  setEditingCountry: React.Dispatch<React.SetStateAction<CountryType | null>>;
}

const CountryEditBtn: React.FC<ComponentProps> = ({
  country,
  setEditingCountry,
}) => {
  const handleCountryEdit: React.MouseEventHandler<HTMLButtonElement> = async (
    e,
  ) => {
    e.preventDefault();
    setEditingCountry((prevEditCountry) =>
      prevEditCountry?.id === country.id ? null : country,
    );
  };
  return (
    <button className={styles.edit_btn} onClick={handleCountryEdit}>
      <FaEdit />
    </button>
  );
};

export default CountryEditBtn;
