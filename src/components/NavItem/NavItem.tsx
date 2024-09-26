import styles from './navItem.module.css';

type Props = {
  name: string;
};

const NavItem = ({ name }: Props) => {
  return (
    <li>
      <a href="#" className={styles.nav_item}>
        {name}
      </a>
    </li>
  );
};

export default NavItem;
