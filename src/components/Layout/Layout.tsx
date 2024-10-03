import React from 'react';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer/Footer';
import styles from '@/components/Layout/Layout.module.css'

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
