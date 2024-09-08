// src/components/spotifyAuth.js

const CLIENT_ID = '17dbe410e3354ecba1b79ebd3410e4eb'; // Your Client ID
const REDIRECT_URI = 'https://emmamitm.github.io/callback'; // Your Redirect URI
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';
const SCOPE = 'user-modify-playback-state user-read-playback-state'; // Add any additional scopes you need

export const handleSpotifyLogin = () => {
  const url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPE)}`;
  window.location.href = url;
};
