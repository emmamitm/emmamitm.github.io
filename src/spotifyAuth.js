
// spotifyAuth.js

import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();
const clientId = '17dbe410e3354ecba1b79ebd3410e4eb';
const redirectUri = 'http://localhost:3000/callback'; // Adjust this to your callback URL
const scopes = 'user-read-private user-read-email playlist-read-private';

export const handleSpotifyLogin = () => {
  const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}&show_dialog=true`;
  window.location.href = authUrl;
};

export const handleSpotifyCallback = () => {
  const hash = window.location.hash;
  if (hash) {
    const token = hash.split('&')[0].split('=')[1];
    window.localStorage.setItem('spotifyToken', token);
    spotifyApi.setAccessToken(token);
    return token;
  }
  return null;
};

export const getUserPlaylists = async () => {
  const token = window.localStorage.getItem('spotifyToken');
  if (!token) return null;

  spotifyApi.setAccessToken(token);
  try {
    const playlists = await spotifyApi.getUserPlaylists();
    return playlists.items;
  } catch (error) {
    console.error('Error fetching playlists:', error);
    return [];
  }
};
