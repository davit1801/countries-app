import styles from './heroSection.module.css';
import heroImg from '@/assets/images/travel.jpeg';
import CONTENT, { ParamsType } from '@/static/siteContent';
import { useParams } from 'react-router-dom';

const HeroSection = () => {
  const { lang } = useParams<ParamsType>();
  const { heroHeading } = CONTENT[lang ?? 'ka'];


  return (
    <section className={styles.hero_section}>
      <img src={heroImg} className={styles.hero_img} alt="" />
      <h1 className={styles.main_heading}>{heroHeading}</h1>
    </section>
  );
};

export default HeroSection;
