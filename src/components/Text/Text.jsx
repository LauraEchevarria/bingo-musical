import PropTypes from 'prop-types';
import classes from './Text.module.css';

const Text = (props) => {
  let { type, color, children } = props;
  let styles = [
    type ? classes[type] : '',
    classes[color] ? classes[color] : classes.default,
  ];

  let content = type === 'header' ? <h1>{children}</h1> : <p>{children}</p>;
  return <div className={styles.join(' ')}>{content}</div>;
};
export default Text;

Text.propTypes = {
  type: PropTypes.oneOf(['header', 'default']),
};
