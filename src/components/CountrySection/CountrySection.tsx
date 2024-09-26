import styles from './countrySection.module.css'
import Card from '../Card/Card'

const CountrySection = () => {
  return (
    <section className={styles.country_section}>
    <div className={styles.countries}>
      <Card />
    </div>
  </section>
  )
}

export default CountrySection