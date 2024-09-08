// src/pages/callback.js

import React, { useEffect } from 'react';
import { handleSpotifyCallback } from '../components/spotifyAuth'; // Import the function to handle the callback

export default function Callback() {
  useEffect(() => {
    // This function handles the callback, extracts the token, and stores it
    handleSpotifyCallback();
    // Redirect the user to the Pomodoro Timer page after handling the callback
    window.location.href = '/pomodoro';
  }, []);

  return (
    <div>
      <p>Logging in...</p>
    </div>
  );
}
