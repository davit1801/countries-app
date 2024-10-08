import Button from '@/components/Buttons/ContactButton/ContactButton';
import Navigation from '@/components/base/Header/Navigation/Navigation';
import styles from '@/components/base/Header/header.module.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__container}>
          <Link to={'/'}>
            <span className={styles.app_name}>Travel Your Way</span>
          </Link>
          <Navigation />
          <Button />
        </div>
      </div>
    </header>
  );
};

export default Header;
