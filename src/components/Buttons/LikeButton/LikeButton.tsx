import React, { Dispatch } from 'react';
import icon from '@/assets/images/like-btn.svg';
import styles from './LikeButton.module.css';
import { countriesReducerAction } from '@/pages/country/views/list/reducer/reducer';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';
import axios from 'axios';

interface ComponentProps {
  country: CountryType;
  dispatch: Dispatch<countriesReducerAction>;
}

const LikeButton: React.FC<ComponentProps> = ({ country, dispatch }) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    dispatch({
      type: 'like',
      payload: {
        id: country.id,
      },
    });

    try {
      await axios.put(`http://localhost:3000/countries/${country.id}`, {
        ...country,
        likes: country.likes + 1,
      });
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  return (
    <button
      className={styles.like_btn}
      onClick={handleClick}
      // disabled={!country.active}
    >
      <img src={icon} alt="like icon" />
      <span className={styles.btn_text}>Like</span>
      <span className={styles.count_num}>{country.likes}</span>
    </button>
  );
};

export default LikeButton;
