import styles from './heroSection.module.css';
import heroImg from '@/assets/images/travel.jpeg';
import CONTENT from '@/static/siteContent';
import { useParams } from 'react-router-dom';

type RouteParams = {
  lang?: string | undefined;
};

const HeroSection = () => {
  const { lang } = useParams<RouteParams>();
  const { heroHeading } = CONTENT[lang ?? 'ka'];

  return (
    <section className={styles.hero_section}>
      <img src={heroImg} className={styles.hero_img} alt="" />
      <h1 className={styles.main_heading}>{heroHeading}</h1>
    </section>
  );
};

export default HeroSection;
