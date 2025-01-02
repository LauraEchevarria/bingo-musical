import { useLoaderData } from 'react-router-dom';

import Board from '../../components/Board/Board';
import Text from '../../components/Text/Text';
import { getGame } from '../../services/games';
import { getPlaylist } from '../../services/spotify';
import { generateRandomArray } from '../../utils/generateMatrix';

//import classes from './BingoBoard.module.css';

const BingoBoard = () => {
  console.log('BINGO BOARD');
  const data = useLoaderData();

  if (data.status === 400) return <Text>{data.message}</Text>;

  return (
    <div>
      <div>
        <Board combination={data.map((el) => el.id)} />
      </div>
    </div>
  );
};
export default BingoBoard;

export const loader = async () => {
  let playlist_id = 2; // @todo GET id
  let game = getGame(playlist_id);
  if (game?.length < 1) return { status: 400, message: 'Invalid game' };

  let songs = getPlaylist();
  if (songs?.length < game?.length)
    return { status: 400, message: 'Invalid playlist, songs not enough' };

  let randomSongs = generateRandomArray(game.length, songs);
  return randomSongs;
};
