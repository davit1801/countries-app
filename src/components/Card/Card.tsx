import styles from './card.module.css';

const country = {
  name: 'Spain',
  capital: 'Madrid',
  population: 47_000_000,
  flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
};

const Card:React.FC = () => {
  return (
    <article className={styles.country_card}>
      <img className={styles.country_img} src={country.flag} />
      <div className={styles.country_info}>
        <h3 className={styles.country_name}>Name: {country.name}</h3>
        <h4 className={styles.country_city}>CApital: {country.capital}</h4>
        <h5 className={styles.country_population}>
          Population: {(country.population / 1000000).toFixed(1)} Million
        </h5>
      </div>
    </article>
  );
};

export default Card;
