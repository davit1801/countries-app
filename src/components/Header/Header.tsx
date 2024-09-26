import Button from '../Buttons/ContactButton';
import Navigation from '../Navigation/Navigation';
import styles from './header.module.css'

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
