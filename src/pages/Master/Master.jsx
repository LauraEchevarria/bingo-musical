import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import { getGame } from '../../services/games';
import { t } from '../../utils/strings';

import classes from './Master.module.css';

const Master = () => {
  let isMobile = false; // @todo
  const onConnectSpotifyHandler = () => {
    let game = getGame(2);
    if (game && game.list_id) {
      let uri = `playlist/${game.list_id}?go=1&utm_medium=desktop`;
      if (isMobile) {
        window.location.href = `spotify:${uri}`;
      } else {
        uri = `https://open.spotify.com/${uri}`;
        window.open(uri, '_blank');
      }
    }
  };

  return (
    <div className={classes.content}>
      <Text>{t('admin_spotify')}</Text>
      <Button onClick={onConnectSpotifyHandler}>
        {t('admin_connect_spotify')}
      </Button>
    </div>
  );
};
export default Master;
