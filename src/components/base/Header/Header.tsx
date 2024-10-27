import { Link } from 'react-router-dom';
import Navigation from '@/components/base/Header/Navigation/Navigation';
import styles from '@/components/base/Header/header.module.css';
import ChangeLangBtn from '@/components/Buttons/ChangeLangBtn/ChangeLangBtn';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__container}>
          <Link to={'countries'}>
            <span className={styles.app_name}>Travel Your Way</span>
          </Link>
          <Navigation />
          <div className={styles.lang_container}>
            <ChangeLangBtn title={'ქარ'} langName={'ka'} />
            <ChangeLangBtn title={'Eng'} langName={'eng'} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
