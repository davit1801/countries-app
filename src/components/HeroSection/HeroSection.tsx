import styles from './heroSection.module.css'

const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
    <img src="../public/hero-img.webp" className={styles.hero_img} alt="" />
    <h1 className={styles.main_heading}>THE ONLY WAY TO TRAVEL</h1>
  </section>
  )
}

export default HeroSection