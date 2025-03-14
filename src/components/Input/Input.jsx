import PropTypes from 'prop-types';
import classes from './Input.module.css';

const Input = (props) => {
  let { value, onChangeValue, error, className } = props;
  const handleOnChangeValue = (event) => {
    onChangeValue(event.target.value);
  };

  const getClassNames = () => {
    let classNames = [className, classes.input];
    if (error) classNames.push(classes.error);
    return classNames.join(' ');
  };

  return (
    <>
      <input
        className={getClassNames()}
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
