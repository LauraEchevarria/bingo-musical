import { useState } from 'react';
import PropTypes from 'prop-types';
import { t } from '../../utils/strings';
import classes from './Input.module.css';

const Input = ({ value, onChangeValue, validate, errorText, ...props }) => {
  const [currentValue, setValue] = useState(value);
  const [error, setError] = useState('');

  const handleOnChangeValue = (event) => {
    let newValue = event.target.value;
    setValue(newValue);
    if (validated(newValue)) onChangeValue(newValue);
  };

  const validated = (text) => {
    if (validate && !validate(text)) {
      setError(errorText ?? t('error_general'));
      return false;
    }
    setError(null);
    return true;
  };

  return (
    <>
      <input
        className={
          !error ? classes.input : [classes.input, classes.error].join(' ')
        }
        value={currentValue}
        onChange={handleOnChangeValue}
        {...props}
      />
      <span className={classes.errorMessage}>{error}</span>
    </>
  );
};
export default Input;

Input.propTypes = {
  value: PropTypes.string,
  onChangeValue: PropTypes.func,
  errorText: PropTypes.oneOf([PropTypes.string, null]),
  validate: PropTypes.oneOf([PropTypes.string, null]),
};

Input.defaultProps = {
  errorText: null,
  validate: null,
};
