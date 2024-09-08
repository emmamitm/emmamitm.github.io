import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState('Work'); // 'Work' or 'Break'

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (sessionType === 'Work') {
        setSessionType('Break');
        setTimeLeft(300); // 5-minute break
      } else {
        setSessionType('Work');
        setTimeLeft(1500); // 25-minute work session
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, sessionType]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(sessionType === 'Work' ? 1500 : 300);
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
      <button onClick={handleStartPause} style={{ marginRight: '10px' }}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default PomodoroTimer;
