import PropTypes from 'prop-types';
import classes from './Input.module.css';

const Input = ({ value, onChangeValue, error, ...props }) => {
  const handleOnChangeValue = (event) => {
    onChangeValue(event.target.value);
  };

  return (
    <>
      <input
        className={
          !error ? classes.input : [classes.input, classes.error].join(' ')
        }
        value={value}
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
