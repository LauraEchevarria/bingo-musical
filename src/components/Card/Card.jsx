import classes from './Card.module.css';

const Card = ({ color, onClick, className, ...props }) => {
  let contentStyles = [
    className,
    classes.box,
    classes[color] ? classes[color] : classes['default'],
  ];
  return (
    <button className={contentStyles.join(' ')} onClick={onClick}>
      {props.children}
    </button>
  );
};
export default Card;
