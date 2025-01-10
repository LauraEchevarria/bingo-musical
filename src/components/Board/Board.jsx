import { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Board.module.css';
import BoardCell from './BoardCell';

const Board = ({ data }) => {
  // @todo refactor
  let [combination, setCombination] = useState(data);
  console.log('con', combination);

  const onPressCell = (key) => {
    setCombination((prev) =>
      prev.map((el, index) =>
        index === key ? { ...el, checked: !el.checked } : el,
      ),
    );
  };
  const renderContent = () => {
    return (
      <ol className={classes['board-grid']}>
        {combination.map((item, key) => (
          <BoardCell
            key={key}
            blocked={item.blocked}
            checked={item.checked}
            onClick={() => onPressCell(key)}
          >
            {item.name}
          </BoardCell>
        ))}
      </ol>
    );
  };

  if (!combination) return;
  return <div className={classes.content}>{renderContent()}</div>;
};

export default Board;

Board.propTypes = {
  data: PropTypes.array,
  // Column number
  size: PropTypes.number,
};
