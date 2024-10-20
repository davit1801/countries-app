// import NavItem from '../NavItem/NavItem';
import NavItem from '@/components/base/Header/NavItem/NavItem';
import styles from './navigation.module.css';
import { useParams } from 'react-router-dom';
import CONTENT, { ParamsType } from '@/static/siteContent';

const Navigation: React.FC = () => {
  const { lang } = useParams<ParamsType>();
  const { navLinks } = CONTENT[lang ?? 'ka'];

  return (
    <nav className="header_nav">
      <ul className={styles.nav_list}>
        {navLinks.map((link: { name: string; path: string }) => {
          return <NavItem name={link.name} path={link.path} key={link.path} />;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
