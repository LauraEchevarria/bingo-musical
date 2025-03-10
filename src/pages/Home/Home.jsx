import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import classes from './Home.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { t } from '../../utils/strings';
import { validate } from '../../utils/games';

const loginLogic = false;

const initialState = {
  masterKey: { value: null, error: null },
  gameKey: {
    placeholder: t('game_placeholder'),
    value: null,
    error: null,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'onChangeGameKey':
      return {
        ...state,
        gameKey: {
          ...initialState.gameKey,
          value: action.value,
          error: action.error,
        },
      };
    case 'onChangeMasterKey':
      return {
        ...state,
        masterKey: { ...initialState.masterKey, value: action.value },
      };
    default:
      return initialState;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const onChangeGameKeyhandler = (key) => {
    let error;
    if (key?.length === 0) error = null;
    else if (key?.length !== 5) error = t('error_5_characters');
    else if (!validate(key)) error = t('error_key_invalid');
    dispatch({ type: 'onChangeGameKey', value: key, error: error });
  };
  const validGameKey = (text) => {
    if (text?.length !== 5) return false;
    return validate(text);
  };

  const onStartGameHandler = () => {
    localStorage.setItem('gameKey', state.gameKey.value);
    navigate('/board');
  };

  return (
    <div>
      <div className={classes.select}>
        {loginLogic && (
          <Card
            color="gray-900"
            onClick={() => navigate('/admin')}
            inputText=""
          >
            Create new one
          </Card>
        )}
        <Card color="gray-600" onClick={() => navigate('/master')}>
          Master game
        </Card>
        <Card className={classes.card} color="green">
          Play your board
          <Input
            placeholder={state.gameKey.placeholder}
            value={state.gameKey.value}
            onChangeValue={onChangeGameKeyhandler}
            validate={validGameKey}
            error={state.gameKey.error}
          />
          {validGameKey(state.gameKey.value) && (
            <Button onClick={onStartGameHandler}>Play</Button>
          )}
        </Card>
      </div>
    </div>
  );
};
export default Home;
