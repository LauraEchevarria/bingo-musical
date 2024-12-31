import classes from './Board.module.css';

const Board = ({ combination }) => {
  const renderContent = () => {
    return combination.map((item) => (
      <li className={classes.cell} key={item}>
        {item}
      </li>
    ));
  };
  return <ol className={classes.board}>{renderContent()}</ol>;
};

export default Board;
