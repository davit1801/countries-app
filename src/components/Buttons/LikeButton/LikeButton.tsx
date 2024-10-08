import React from 'react';
import icon from '@/assets/images/like-btn.svg';
import styles from './LikeButton.module.css';

interface Country {
  flag: string;
  name: string;
  capital: string;
  population: number;
  id: string;
  likes: number;
}

interface ComponentProps {
  country: Country;
  setCountryData: React.Dispatch<React.SetStateAction<Country[]>>;
}

const LikeButton = ({ country, setCountryData }: ComponentProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    setCountryData(data =>
      data.map(prevItem =>
        prevItem.id === country.id
          ? { ...prevItem, likes: prevItem.likes + 1 }
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
