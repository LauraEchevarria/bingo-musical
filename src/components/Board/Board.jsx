import { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Board.module.css';
import BoardCell from './BoardCell';

const Board = ({ combination }) => {
  let [currentCombination, setCombination] = useState(combination);

  const onPressCell = (key) => {
    currentCombination.map((el) => {
      return el;
    });
    setCombination((prev) =>
      prev.map((el) => (el.key === key ? { ...el, checked: !el.checked } : el)),
    );
  };

  const renderRows = () => {
    const max_rows = Math.max(...currentCombination.map((x) => x.row));
    let rows = [];
    for (let i = 0; i <= max_rows; i++) {
      let row_elements = currentCombination.filter((x) => x.row === i);
      let row = (
        <li key={i} className={classes.row}>
          {row_elements.map((item) => (
            <BoardCell
              key={item.key}
              blocked={item.blocked}
              checked={item.checked}
              onClick={() => onPressCell(item.key)}
            >
              {item.name}
            </BoardCell>
          ))}
        </li>
      );
      rows.push(row);
    }
    return rows;
  };

  if (!currentCombination) return;
  return <div className={classes.board}>{renderRows()}</div>;
};

export default Board;

Board.propTypes = {
  combination: PropTypes.arrayOf(
    PropTypes.shape({
      col: PropTypes.number.isRequired,
      row: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      checked: PropTypes.bool,
      blocked: PropTypes.bool,
    }),
  ),
};
