import classes from './Button.module.css';

const Button = ({ type = 'primary', ...props }) => {
  let className = [classes.button, classes[type]];

  return (
    <button className={className.join(' ')} {...props}>
      {props.children}
    </button>
  );
};
export default Button;
