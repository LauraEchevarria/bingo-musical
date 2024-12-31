import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import { t } from '../../utils/strings';

import classes from './Admin.module.css';

const Admin = () => {
  return (
    <div className={classes.content}>
      <Text>{t('admin_spotify')}</Text>
      <Button>{t('admin_connect_spotify')}</Button>
    </div>
  );
};
export default Admin;
