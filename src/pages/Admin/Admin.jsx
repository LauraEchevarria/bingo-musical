import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Text from '../../components/Text/Text';
import { t } from '../../utils/strings';

import classes from './Admin.module.css';

const Admin = () => {
  return (
    <div className={classes.content}>
      <Text>{t('admin_spotify')}</Text>
      <Button>{t('admin_connect_spotify')}</Button>
      <Text>Search your list:</Text>
      <Input
        placeholder=""
        value=""
        onChangeValue={() => console.log('changed')}
        error=""
      ></Input>
    </div>
  );
};
export default Admin;
