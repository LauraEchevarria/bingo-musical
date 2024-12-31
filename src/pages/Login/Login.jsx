import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';

const Login = () => {
  let navigate = useNavigate();

  const onLoginTest = () => {
    navigate('/');
  };

  const renderContent = () => {
    return (
      <div>
        <Button onClick={onLoginTest}>Login</Button>
      </div>
    );
  };

  return renderContent();
};

export default Login;
