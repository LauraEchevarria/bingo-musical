import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import HeaderNav from '../components/Layout/HeaderNav/HeaderNav';
import Text from '../components/Text/Text';
import { getIsLogged } from '../utils/auth';

const TITLES = {
  '/': 'Home',
  '/board': 'Bingo Board',
  '/admin': 'Generate bingo',
  '/master': "Let's rock it!",
};

const Root = () => {
  let [logged, setLogged] = useState(null);
  let location = useLocation();
  let title = TITLES[location.pathname];

  useEffect(() => {
    setLogged(getIsLogged());
  }, []);

  const renderContent = () => {
    if (logged == null) return <Text>Loading...</Text>;
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
