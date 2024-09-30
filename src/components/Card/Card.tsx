import styles from '@/components/Card/card.module.css';
import { PropsWithChildren } from 'react';



interface Country {
  flag: string;
  name: string;
  capital: string;
  population: number;
}

interface ComponentProps {
  country: Country;
}

const Card: React.FC<PropsWithChildren<ComponentProps>> = ({
  country,
  children,
}) => {
  return (
    <article className={styles.country_card}>
      <img className={styles.country_img} src={country.flag} />
      {children}
    </article>
  );
};

export default Card;
