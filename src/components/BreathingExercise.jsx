// src/components/BreathingExercise.jsx
import React, { useState, useEffect } from 'react';
import './BreathingExercise.css';

function BreathingExercise() {
  const totalCycle = 19; // Total duration in seconds (4 + 7 + 8)
  const [time, setTime] = useState(0);

  // Update the timer every second, resetting after the cycle ends
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => (prevTime + 1) % totalCycle);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Determine the current phase and the remaining seconds in that phase
  let phase = '';
  let remaining = 0;

  if (time < 4) {
    phase = 'Inhale';
    remaining = 4 - time;
  } else if (time < 11) {
    phase = 'Hold';
    remaining = 11 - time;
  } else {
    phase = 'Exhale';
    remaining = 19 - time;
  }

  return (
    <div className="breathing-container">
      <div className="breathing-circle">
        <div className="circle-content">
          <div className="phase-text">{phase}</div>
          <div className="timer-text">{remaining}s</div>
        </div>
      </div>
    </div>
  );
}

export default BreathingExercise;
