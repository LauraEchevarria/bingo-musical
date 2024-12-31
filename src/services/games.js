import games from '../data/games.json';

export const getGame = (id) => {
  let test = games.filter((game) => game.id === id)[0];
  return test;
};
