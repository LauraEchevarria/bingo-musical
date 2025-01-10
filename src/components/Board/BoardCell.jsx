import classes from './BoardCell.module.css';

const BoardCell = ({ checked, blocked, ...props }) => {
  if (blocked) return <div className={classes.cell}>{props.children}</div>;

  return (
    <div
      className={checked ? `${classes.checked} ${classes.cell}` : classes.cell}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default BoardCell;
