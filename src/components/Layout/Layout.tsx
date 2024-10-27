import React from 'react';
import Header from '@/components/base/Header/Header';
import Main from '@/components/base/Main/Main';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/base/Footer/Footer';
import styles from '@/components/Layout/Layout.module.css';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};

export default Layout;
