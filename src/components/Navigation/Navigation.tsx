// import NavItem from '../NavItem/NavItem';
import NavItem from '@/components/NavItem/NavItem';
import styles from '@/components/Navigation/navigation.module.css';

const navLinks = ['Home', 'About', 'Contact', 'Services'];

const Navigation: React.FC = () => {
  return (
    <nav className="header_nav">
      <ul className={styles.nav_list}>
        {navLinks.map(link => {
          return <NavItem name={link} />;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
