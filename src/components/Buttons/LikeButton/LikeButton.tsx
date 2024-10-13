import React, { Dispatch } from 'react';
import icon from '@/assets/images/like-btn.svg';
import styles from './LikeButton.module.css';
import { CountryType } from '@/pages/country/views/list/reducer/state';
import { countriesReducerAction } from '@/pages/country/views/list/reducer/reducer';

interface ComponentProps {
  country: CountryType;
  dispatch: Dispatch<countriesReducerAction>;
}

const LikeButton: React.FC<ComponentProps> = ({ country, dispatch }) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    dispatch({
      type: 'like',
      payload: {
        id: country.id,
      },
    });
  };

  return (
    <button
      className={styles.like_btn}
      onClick={handleClick}
      disabled={!country.active}
    >
      <img src={icon} alt="like icon" />
      <span className={styles.btn_text}>Like</span>
      <span className={styles.count_num}>{country.likes}</span>
    </button>
  );
};

export default LikeButton;
