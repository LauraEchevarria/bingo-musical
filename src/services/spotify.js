const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const SPOTIFY_URL = 'https://api.spotify.com/v1';

const auth = () => {
  if (!CLIENT_ID || !CLIENT_SECRET) throw Error('Invalid SPOTIFY keys');
  // @todo token on cache
  return fetch('https://accounts.spotify.com/api/token', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  })
    .then((res) => res.json())
    .then((response) => response.access_token);
};

export const getPlaylist = (id) => {
  let url = `${SPOTIFY_URL}/playlists/${id}`;
  return new Promise((resolve, reject) => {
    auth()
      .then((token) => {
        if (!token) throw new Error('No token found');
        return fetch(url, {
          method: 'get',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      })
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
};
