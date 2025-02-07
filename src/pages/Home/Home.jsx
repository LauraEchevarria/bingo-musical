import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import classes from './Home.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { t } from '../../utils/strings';

const loginLogic = false;

const initialState = {
  masterKey: { value: null, error: null },
  gameKey: {
    placeholder: t('game_placeholder'),
    value: null,
    error: t('error_5_characters'),
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'onChangeGameKey':
      return {
        ...state,
        gameKey: { ...initialState.gameKey, value: action.value },
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

  const handleGameKeyChange = (key) => {
    dispatch({ type: 'onChangeGameKey', value: key });
  };
  const validGameKey = (text) => {
    // Validate length
    if (text?.length !== 5) return false;
    // Validate if exists
    // @todo
    return true;
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
        <Card color="green">
          Play your board
          <Input
            placeholder={state.gameKey.placeholder}
            value={state.gameKey.value}
            onChangeValue={handleGameKeyChange}
            validate={validGameKey}
            errorText={state.gameKey.error}
          />
          {validGameKey(state.gameKey.value) && (
            <Button onClick={() => navigate('/board')}>Play</Button>
          )}
        </Card>
      </div>
    </div>
  );
};
export default Home;
