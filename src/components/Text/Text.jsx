import PropTypes from 'prop-types';
import classes from './Text.module.css';

const Text = (props) => {
  let { type, children } = props;
  let className;

  let content =
    type === 'header' ? (
      <h1 className={className}>{children}</h1>
    ) : (
      <p>{children}</p>
    );

  return (
    <div className={type ? classes[type] : classes['default']}>{content}</div>
  );
};
export default Text;

Text.propTypes = {
  type: PropTypes.oneOf(['header', 'default']),
};
