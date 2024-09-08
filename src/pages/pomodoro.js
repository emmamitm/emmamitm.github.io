import React from 'react';
import Layout from '@theme/Layout';
import PomodoroTimer from '../components/PomodoroTimer'; // Import Pomodoro Timer

export default function PomodoroPage() {
  return (
    <Layout title="Pomodoro Timer" description="Stay productive with the Pomodoro Timer">
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h1>Pomodoro Timer</h1>
        <PomodoroTimer /> {/* Render the Pomodoro Timer */}
      </div>
    </Layout>
  );
}
