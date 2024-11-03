import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';
import styles from './card.module.css';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface cardProps {
  country: CountryType;
  editingCountry?: CountryType | null;
}

const Card: React.FC<PropsWithChildren<cardProps>> = ({
  country,
  children,
  editingCountry,
}) => {
  return (
    <article
      className={
        editingCountry?.id === country.id
          ? styles.editing_country
          : styles.country_card
      }
    >
      <Link to={`country/${country.id}`}>
        <img
          className={styles.country_img}
          src={country.image}
          alt={`${country.name}'s flag`}
        />
      </Link>
      {children}
    </article>
  );
};

export default Card;
