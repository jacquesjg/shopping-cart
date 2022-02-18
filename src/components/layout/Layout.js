import React from 'react';
import Header from './Header';
import Body from './Body';
const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        {children}
      </div>
    </>
  );
};

export default Layout;