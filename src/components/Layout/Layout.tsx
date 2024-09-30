import React, { PropsWithChildren } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
