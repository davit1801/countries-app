import React, { PropsWithChildren } from 'react';
import styles from './CardInfo.module.css';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';
import { useParams } from 'react-router-dom';
import CONTENT, { ParamsType } from '@/static/siteContent';

interface ComponentProps {
  country: CountryType;
}

const CardInfo: React.FC<PropsWithChildren<ComponentProps>> = ({ country }) => {
  const { lang } = useParams<ParamsType>();
  const { detailCountryTitles } = CONTENT[lang ?? 'ka'];
  return (
    <div className={styles.country_info}>
      <h3 className={styles.country_name}>{country.name[lang ?? 'ka']}</h3>
      <h4 className={styles.country_city}>
        {detailCountryTitles.capital}: {country.capital[lang ?? 'ka']}
      </h4>
      <h5 className={styles.country_population}>
        {detailCountryTitles.population}:{' '}
        {(country.population / 1000000).toFixed(1)}{' '}
        {detailCountryTitles.million}
      </h5>
    </div>
  );
};

export default CardInfo;
