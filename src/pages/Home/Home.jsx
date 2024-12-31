import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import classes from './Home.module.css';

const Home = () => {
  const loginLogic = false;
  const navigate = useNavigate();

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
        <Card color="green" onClick={() => navigate('/board')}>
          Play your board
        </Card>
      </div>
    </div>
  );
};
export default Home;
