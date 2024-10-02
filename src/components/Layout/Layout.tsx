import React from 'react';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;
