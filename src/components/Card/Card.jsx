import classes from './Card.module.css';

const Card = ({ color, onClick, ...props }) => {
  let contentStyles = [
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
