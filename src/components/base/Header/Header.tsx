import Button from '@/components/Buttons/ContactButton';
import Navigation from '@/components/base/Header/Navigation/Navigation';
import styles from '@/components/base/Header/header.module.css'

const Header:React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__container}>
          <span className={styles.app_name}>Travel Your Way</span>
          <Navigation />
          <Button />
        </div>
      </div>
    </header>
  );
};

export default Header;
