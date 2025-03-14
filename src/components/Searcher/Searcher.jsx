import React, { useState } from 'react';
import Input from '../Input/Input';
import classes from './Searcher.module.css';

const Searcher = (props) => {
  let { placeholder, value, options, onChange, onSelect } = props;

  const [showOptions, setShowOptions] = useState(false);

  const onChangeValueHandler = (txt) => {
    onChange(txt);
    setShowOptions(true);
  };

  const onSelectHandler = (el) => {
    onSelect(el.value);
    onChange(el.label);
    setShowOptions(false);
  };

  return (
    <div className={classes.searcher}>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeValue={onChangeValueHandler}
      />
      {options && showOptions && (
        <ul className={classes['drop-down']}>
          {options?.map((el) => (
            <li
              key={el.value}
              onClick={() => {
                onSelectHandler(el);
              }}
            >
              {el.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searcher;
