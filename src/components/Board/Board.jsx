import { useState } from 'react';
import classes from './Board.module.css';

const Board = ({ data }) => {
  // @todo refactor
  let [combination, setCombination] = useState(
    data.map((el) => {
      return { ...el, ckecked: false };
    }),
  );

  const onPressCell = (key) => {
    setCombination((prev) =>
      prev.map((el) => (el.id === key ? { ...el, ckecked: !el.ckecked } : el)),
    );
  };

  const renderContent = () => {
    return combination.map((item) => (
      <li
        className={
          item.ckecked ? `${classes.checked} ${classes.cell}` : classes.cell
        }
        key={item.id}
        onClick={() => onPressCell(item.id)}
      >
        {item.name}
      </li>
    ));
  };
  return <ol className={classes.board}>{renderContent()}</ol>;
};

export default Board;
