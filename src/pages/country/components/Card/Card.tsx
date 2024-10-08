import LikeButton from '@/components/Buttons/LikeButton/LikeButton';
import styles from './card.module.css';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface Country {
  flag: string;
  name: string;
  capital: string;
  population: number;
  id: string;
  likes: number;
}

interface ComponentProps {
  country: Country;
  setCountryData: React.Dispatch<React.SetStateAction<Country[]>>;
}

const Card: React.FC<PropsWithChildren<ComponentProps>> = ({
  country,
  children,
  setCountryData,
}) => {
  // const [likesCount, setLikeCount] = useState(0);

  return (
    <Link to={`country/${country.id}`}>
      <article className={styles.country_card}>
        <img className={styles.country_img} src={country.flag} />
        {children}
        <LikeButton country={country} setCountryData={setCountryData} />
      </article>
    </Link>
  );
};

export default Card;
