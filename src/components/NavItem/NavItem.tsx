import styles from '@/components/NavItem/navItem.module.css';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';

type Props = {
  name: string;
  path: string;
};

const handleActiveNav = ({ isActive }: NavLinkRenderProps) =>
  isActive ? styles['active_nav_item'] : styles['nav_item'];

const NavItem = ({ name, path }: Props) => {
  return (
    <li>
      <NavLink to={path} className={handleActiveNav}>
        {name}
      </NavLink>
    </li>
  );
};

export default NavItem;
