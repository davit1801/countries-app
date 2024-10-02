// import styles from '@/heroSection.module.css'
import styles from '@/pages/home/components/HeroSection/heroSection.module.css';
import heroImg from '@/assets/images/hero-img.webp';

const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
      <img src={heroImg} className={styles.hero_img} alt="" />
      <h1 className={styles.main_heading}>We Find The Best Tours For You</h1>
    </section>
  );
};

export default HeroSection;
