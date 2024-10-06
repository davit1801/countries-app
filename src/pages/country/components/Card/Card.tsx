import styles from './card.module.css'
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface Country {
  flag: string;
  name: string;
  capital: string;
  population: number;
  id: string;
}

interface ComponentProps {
  country: Country;
}

const Card: React.FC<PropsWithChildren<ComponentProps>> = ({
  country,
  children,
}) => {
  return (
    <Link to={`country/${country.id}`}>
      <article className={styles.country_card}>
        <img className={styles.country_img} src={country.flag} />
        {children}
      </article>
    </Link>
  );
};

export default Card;
