import { useParams } from 'react-router-dom';
import styles from './CountryDetails.module.css';
import CONTENT, { ParamsType } from '@/static/siteContent';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';

interface CountryDetailsProps {
  info: CountryType;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ info }) => {
  const { lang } = useParams<ParamsType>();
  const { detailCountryTitles } = CONTENT[lang ?? 'ka'];

  return (
    <div className={styles.country_container}>
      <div className={styles.country_img}>
        <img src={info.image} alt="Country flag" />
      </div>
      <div className={styles.country_description}>
        <h3>{info.name[lang ?? 'ka']}</h3>
        <p>
          {detailCountryTitles.capital}: {info.capital[lang ?? 'ka']}
        </p>
        <p>
          {detailCountryTitles.population}: {info.population / 1000000}{' '}
          {detailCountryTitles.million}
        </p>
      </div>
    </div>
  );
};

export default CountryDetails;
