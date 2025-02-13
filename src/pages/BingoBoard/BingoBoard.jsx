import { useLoaderData } from 'react-router-dom';

import Board from '../../components/Board/Board';
import Text from '../../components/Text/Text';
import { getGame } from '../../services/games';
import { getPlaylist } from '../../services/spotify';
import { generateRandomArray } from '../../utils/generateMatrix';

//import classes from './BingoBoard.module.css';

const COLS = 4;

const BingoBoard = () => {
  const data = useLoaderData();

  if (data.status === 400 || data.status === 500)
    return <Text color="white">{data.message}</Text>;

  const formatCombination = (data) => {
    data = data.map((el) => {
      return { ...el, checked: false };
    });
    const ROWS = Math.ceil(data.length / COLS);
    const TOTAL_SIZE = COLS * ROWS;
    // Set random empty values if needed
    while (data.length < TOTAL_SIZE) {
      let random_position = Math.ceil(Math.random() * TOTAL_SIZE) - 1;
      data.splice(random_position, 0, {
        name: '-',
        blocked: true,
      });
    }
    return data.map((el, key) => {
      return {
        key: key,
        col: key % COLS,
        row: Math.floor(key / COLS),
        name: el.name,
        blocked: !!el.blocked,
        checked: false,
      };
    });
  };

  return (
    <div>
      <div>
        <Board combination={formatCombination(data)} />
      </div>
    </div>
  );
};
export default BingoBoard;

export const loader = async () => {
  let game_id = '12345'; // @todo GET id
  let game = getGame(game_id);
  if (game?.length < 1) return { status: 400, message: 'Invalid game' };

  return getPlaylist(game.list_id)
    .then((res) => {
      let songs = res.tracks?.items.map((el, key) => {
        return { id: key, name: el.track?.name };
      });
      if (!songs) return { status: 400, message: 'Empty playlist' };
      if (songs?.length < game?.length)
        return { status: 400, message: 'Invalid playlist, songs not enough' };
      return generateRandomArray(game.length, songs);
    })
    .catch((err) => {
      return { status: 500, message: 'Spotify connection failed: ' + err };
    });
};
