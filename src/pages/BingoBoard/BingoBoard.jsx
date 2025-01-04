import { useLoaderData } from 'react-router-dom';

import Board from '../../components/Board/Board';
import Text from '../../components/Text/Text';
import { getGame } from '../../services/games';
import { getPlaylist } from '../../services/spotify';
import { generateRandomArray } from '../../utils/generateMatrix';

//import classes from './BingoBoard.module.css';

const BingoBoard = () => {
  const data = useLoaderData();

  if (data.status === 400 || data.status === 500)
    return <Text color="white">{data.message}</Text>;

  return (
    <div>
      <div>
        <Board combination={data.map((el) => el.name)} />
      </div>
    </div>
  );
};
export default BingoBoard;

export const loader = async () => {
  let game_id = 2; // @todo GET id
  let game = getGame(game_id);
  if (game?.length < 1) return { status: 400, message: 'Invalid game' };

  return getPlaylist(game.list_id)
    .then((res) => {
      let songs = res.tracks?.items;
      console.log('songs', songs);
      if (!songs) return { status: 400, message: 'Empty playlist' };
      if (songs?.length < game?.length)
        return { status: 400, message: 'Invalid playlist, songs not enough' };
      return generateRandomArray(game.length, songs);
    })
    .catch((err) => {
      return { status: 500, message: 'Spotify connection failed: ' + err };
    });
};
