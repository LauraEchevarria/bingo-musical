import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import HeaderNav from '../components/Layout/HeaderNav/HeaderNav';
import Text from '../components/Text/Text';

const TITLES = {
  '/': 'Home',
  '/board': 'Bingo Board',
  '/admin': 'Generate bingo',
  '/master': "Let's rock it!",
};

const Root = () => {
  let location = useLocation();
  let title = TITLES[location.pathname];

  const renderContent = () => {
    return (
      <>
        <header>
          <HeaderNav showHome={location.pathname !== '/'} />
          {title && <Text type="header">{title}</Text>}
        </header>

        <div className="body-content">
          <Outlet />
        </div>
      </>
    );
  };

  return renderContent();
};

export default Root;
