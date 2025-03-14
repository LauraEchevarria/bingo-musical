import { useState } from 'react';

import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import { t } from '../../utils/strings';

import classes from './Master.module.css';
import { searchPlaylist } from '../../services/spotify';
import Searcher from '../../components/Searcher/Searcher';

const Master = () => {
  const [playlist, setPlaylist] = useState(); // playlist selected
  const [playlistInput, setPlaylistInput] = useState(); // text introduced by the user
  const [playlistOptions, setPlaylistOptions] = useState(); // options found from playlistInput

  let isMobile = false; // @todo

  /* 
    Next steps:
    - generate a random game_id onSelectPlaylistHandler 
    - onConnectSpotifyHandler --> save game_id + playlist_id on json 
  */

  const onConnectSpotifyHandler = () => {
    if (!playlist) return;
    let uri = `playlist/${playlist}?si=random&play=true`;
    if (isMobile) {
      window.location.href = `spotify:${uri}`;
    } else {
      uri = `https://open.spotify.com/${uri}`;
      window.open(uri, '_blank');
    }
  };

  const onChangePlaylistHandler = (name) => {
    if (!name || name.trim() === '') setPlaylistOptions(null);

    setPlaylistInput(name);

    searchPlaylist(name)
      .then((res) => {
        setPlaylistOptions(playlistOptionsFormatter(res?.playlists?.items));
      })
      .catch((err) => console.error(err));
  };

  const playlistOptionsFormatter = (searchedPlaylists) => {
    return searchedPlaylists
      ?.filter((el) => el)
      .map((el) => ({ value: el.id, label: el.name }));
  };

  const onSelectPlaylistHandler = (playlist) => {
    setPlaylist(playlist);
  };

  return (
    <div className={classes.content}>
      <Text>{t('admin_spotify')}</Text>
      <Searcher
        placeholder="Search your list"
        value={playlistInput ?? ''}
        onChange={onChangePlaylistHandler}
        onSelect={onSelectPlaylistHandler}
        error=""
        options={playlistOptions}
      ></Searcher>
      {playlist && (
        <Button onClick={onConnectSpotifyHandler}>{t('start_spotify')}</Button>
      )}
    </div>
  );
};
export default Master;
