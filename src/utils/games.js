import games from '../data/games.json';

export const validate = (game_id) => {
  let ids = games.map((game) => game.id);
  return ids.includes(game_id);
};
