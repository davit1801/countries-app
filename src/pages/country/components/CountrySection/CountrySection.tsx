import styles from './countrySection.module.css';
import { PropsWithChildren } from 'react';

const CountrySection: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className={styles.country_section}>
      <h2 className={styles.country_heading}>Popular Countries</h2>
      {children}
    </section>
  );
};

export default CountrySection;
