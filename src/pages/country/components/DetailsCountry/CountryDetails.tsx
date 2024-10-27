import { CountryType } from '@/pages/country/views/list/reducer/state';
import CONTENT, { ParamsType } from '@/static/siteContent';
import styles from './CountryDetails.module.css';
import { useParams } from 'react-router-dom';

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
        <h3>{info.name}</h3>
        <p>
          {detailCountryTitles.capital}: {info.capital}
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
