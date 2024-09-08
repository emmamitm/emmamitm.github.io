import React, { useEffect } from 'react';
import PomodoroTimer from './PomodoroTimer'; // Import your PomodoroTimer component
import { handleSpotifyCallback } from './spotifyAuth'; // Import Spotify callback handler

const App = () => {
  useEffect(() => {
    // Handle Spotify login callback to extract token and store it
    handleSpotifyCallback();
  }, []);

  return (
    <div>
      {/* Render the PomodoroTimer component */}
      <PomodoroTimer />
    </div>
  );
};

export default App;
