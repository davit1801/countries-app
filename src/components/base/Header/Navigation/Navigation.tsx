// import NavItem from '../NavItem/NavItem';
import NavItem from '@/components/base/Header/NavItem/NavItem';
import styles from './navigation.module.css'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: 'about' },
  { name: 'Contact', path: 'contact' },
];

const Navigation: React.FC = () => {
  return (
    <nav className="header_nav">
      <ul className={styles.nav_list}>
        {navLinks.map(link => {
          return <NavItem name={link.name} path={link.path} key={link.path} />;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
