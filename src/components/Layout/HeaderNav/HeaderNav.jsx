import { Link } from 'react-router-dom';
import Icon from '../../Icon/Icon';
import Button from '../../Button/Button';
import { t } from '../../../utils/strings';
import classes from './HeaderNav.module.css';

const HeaderNav = ({ showHome }) => {
  const loginLogic = false;
  let logged = false; // @todo CREATE LOGIC

  const renderLoginButton = () => {
    if (logged) return <Button>{t('logout')}</Button>;
    return (
      <Button>
        <Link to="/login">{t('login')}</Link>
      </Button>
    );
  };

  return (
    <div className={classes.header}>
      <Link to="/">
        {showHome && <Icon type="home" size="medium" fill="#fff" />}
      </Link>
      {loginLogic && renderLoginButton()}
    </div>
  );
};
export default HeaderNav;
