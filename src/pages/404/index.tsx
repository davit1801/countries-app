import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.css';

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.errHeading}>404 Page Not Found</h1>
      <NavLink to="/">
        <span className={styles.nav}>Go to home page</span>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
