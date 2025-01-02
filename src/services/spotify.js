//const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
//const SPOTIFY_CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

export const getPlaylist = (playlist_id) => {
  let existsSecret = process.env.SPOTIFY_CLIENT_ID ? 'EXISTS' : 'NOT exists';
  console.log('SECRET: ', existsSecret);
  console.log('TEST', process.env.REACT_APP_TEST);
  console.log('TEST ON ACTIONS', process.env.REACT_APP_TESTING);
  return [
    { id: 1, name: 'Song 1' },
    { id: 2, name: 'Song 2' },
    { id: 3, name: 'Song 3' },
    { id: 4, name: 'Song 4' },
    { id: 5, name: 'Song 5' },
    { id: 6, name: 'Song 6' },
    { id: 7, name: 'Song 7' },
    { id: 8, name: 'Song 8' },
    { id: 9, name: 'Song 9' },
    { id: 10, name: 'Song 10' },
    { id: 11, name: 'Song 11' },
  ];
};
