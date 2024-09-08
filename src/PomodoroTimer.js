import React, { useState, useEffect } from 'react';
import { handleSpotifyLogin, getUserPlaylists } from './spotifyAuth'; // Import Spotify functions

const PomodoroTimer = () => {
  const WORK_TIME = 1500; // 25 minutes
  const SHORT_BREAK_TIME = 300; // 5 minutes
  const LONG_BREAK_TIME = 900; // 15 minutes

  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState('Work');
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const fetchedPlaylists = await getUserPlaylists();
      setPlaylists(fetchedPlaylists || []);
    };
    fetchPlaylists();
  }, []);

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (sessionType === 'Work') {
        setSessionType('Short Break');
        setTimeLeft(SHORT_BREAK_TIME);
      } else if (sessionType === 'Short Break' || sessionType === 'Long Break') {
        setSessionType('Work');
        setTimeLeft(WORK_TIME);
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, sessionType]);

  const handleStartPause = () => setIsRunning(!isRunning);

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(sessionType === 'Work' ? WORK_TIME : sessionType === 'Short Break' ? SHORT_BREAK_TIME : LONG_BREAK_TIME);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>{sessionType} Session</h2>
      <h1 style={{ fontSize: '48px' }}>{formatTime(timeLeft)}</h1>
      <div>
        <button onClick={handleStartPause} style={{ marginRight: '10px' }}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleSpotifyLogin}>Login with Spotify</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Your Playlists:</h3>
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <div key={playlist.id}>
              <img src={playlist.images[0]?.url} alt={playlist.name} width="50" height="50" />
              <p>{playlist.name}</p>
            </div>
          ))
        ) : (
          <p>No playlists found or not logged in.</p>
        )}
      </div>
    </div>
  );
};

export default PomodoroTimer;
