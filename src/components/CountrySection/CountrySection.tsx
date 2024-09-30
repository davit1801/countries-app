import styles from '@/components/CountrySection/countrySection.module.css';
import { PropsWithChildren } from 'react';

const CountrySection: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className={styles.country_section}>
      <div className={styles.countries}>{children}</div>
    </section>
  );
};

export default CountrySection;
