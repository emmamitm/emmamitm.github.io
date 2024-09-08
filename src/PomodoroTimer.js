import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  // Initial timer durations
  const WORK_TIME = 1500; // 25 minutes
  const SHORT_BREAK_TIME = 300; // 5 minutes
  const LONG_BREAK_TIME = 900; // 15 minutes

  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState('Work'); // 'Work', 'Short Break', 'Long Break'

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (sessionType === 'Work') {
        setSessionType('Short Break');
        setTimeLeft(SHORT_BREAK_TIME); // Automatically switch to short break
      } else if (sessionType === 'Short Break' || sessionType === 'Long Break') {
        setSessionType('Work');
        setTimeLeft(WORK_TIME);
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, sessionType]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(sessionType === 'Work' ? WORK_TIME : sessionType === 'Short Break' ? SHORT_BREAK_TIME : LONG_BREAK_TIME);
  };

  const handleWorkSession = () => {
    setIsRunning(false);
    setSessionType('Work');
    setTimeLeft(WORK_TIME);
  };

  const handleShortBreak = () => {
    setIsRunning(false);
    setSessionType('Short Break');
    setTimeLeft(SHORT_BREAK_TIME);
  };

  const handleLongBreak = () => {
    setIsRunning(false);
    setSessionType('Long Break');
    setTimeLeft(LONG_BREAK_TIME);
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
        <button onClick={handleWorkSession} style={{ margin: '5px' }}>Work Timer</button>
        <button onClick={handleShortBreak} style={{ margin: '5px' }}>Short Break</button>
        <button onClick={handleLongBreak} style={{ margin: '5px' }}>Long Break</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleStartPause} style={{ marginRight: '10px' }}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

import { handleSpotifyLogin } from './spotifyAuth'; // Import the login function

const PomodoroTimer = () => {
  return (
    <div>
      {/* Your Pomodoro timer code */}
      
      <button onClick={handleSpotifyLogin}>Login with Spotify</button>
    </div>
  );
};

export default PomodoroTimer;

