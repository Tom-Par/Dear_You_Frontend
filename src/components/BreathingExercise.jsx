// src/components/BreathingExercise.jsx
import React, { useState, useEffect } from 'react';
import './BreathingExercise.css';

function BreathingExercise() {
  const totalCycle = 19; // Total duration of the breathing cycle in seconds (4 + 7 + 8)
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return; // Don't start timer if exercise is not active
    const interval = setInterval(() => {
      setTime(prevTime => (prevTime + 1) % totalCycle);
    }, 1000);
    return () => clearInterval(interval);
  }, [started]);

  // Determine the current phase and remaining time based on 'time'
  let phase = "";
  let remaining = "";
  if (!started) {
    phase = "Click Me";
  } else if (time < 4) {
    phase = "Inhale";
    remaining = 4 - time;
  } else if (time < 11) {
    phase = "Hold";
    remaining = 11 - time;
  } else {
    phase = "Exhale";
    remaining = 19 - time;
  }

  // Toggle start/stop on click: stop and reset if already started; start if not
  const handleClick = () => {
    if (started) {
      // Stop the exercise and reset state
      setStarted(false);
      setTime(0);
    } else {
      // Start the exercise
      setStarted(true);
      setTime(0);
    }
  };

  return (
    <div className="breathing-container">
      <div 
        className={`breathing-circle ${started ? 'active' : ''}`} 
        onClick={handleClick}
      >
        <div className="circle-content">
          <div className="phase-text">{phase}</div>
          {started && <div className="timer-text">{remaining}s</div>}
        </div>
      </div>
    </div>
  );
}

export default BreathingExercise;
