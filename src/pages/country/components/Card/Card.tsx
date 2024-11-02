import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';
import styles from './card.module.css';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface cardProps {
  country: CountryType;
}

const Card: React.FC<PropsWithChildren<cardProps>> = ({
  country,
  children,
}) => {
  return (
    <Link to={`country/${country.id}`}>
      <article className={styles.country_card}>
        <img
          className={styles.country_img}
          src={country.image}
          alt={`${country.name}'s flag`}
        />
        {children}
      </article>
    </Link>
  );
};

export default Card;
