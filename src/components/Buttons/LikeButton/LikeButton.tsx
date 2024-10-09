import React from 'react';
import icon from '@/assets/images/like-btn.svg';
import styles from './LikeButton.module.css';
import { CountryType } from '@/pages/country/views/list';

interface ComponentProps {
  country: CountryType;
  setCountryData: React.Dispatch<React.SetStateAction<CountryType[]>>;
}

const LikeButton = ({ country, setCountryData }: ComponentProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    setCountryData(data =>
      data.map(prevItem =>
        prevItem.id === country.id
          ? { ...country, likes: country.likes + 1 }
          : prevItem
      )
    );
  };

  return (
    <button className={styles.like_btn} onClick={handleClick}>
      <img src={icon} alt="like icon" />
      <span className={styles.btn_text}>Like</span>
      <span className={styles.count_num}>{country.likes}</span>
    </button>
  );
};

export default LikeButton;
