import styles from './CountryDetails.module.css';

interface CountryInfo {
  name: string;
  capital: string;
  population: number;
  flag: string;
  id: string;
}

interface CountryDetailsProps {
  info: CountryInfo;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ info }) => {
  console.log(info);
  return (
    <div className={styles.country_container}>
      <div className={styles.country_img}>
        <img src={info.flag} alt="Country flag" />
      </div>
      <div className={styles.country_description}>
        <h3>{info.name}</h3>
        <p>Capital: {info.capital}</p>
        <p>Population: {(info.population / 1000000)} Million</p>
      </div>
    </div>
  );
};

export default CountryDetails;
