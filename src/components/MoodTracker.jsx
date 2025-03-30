// src/components/MoodTracker.jsx
import { useState } from 'react';
import './MoodTracker.css';

function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  
  // Define available moods with associated emoji, label, and a supportive message.
  const moods = [
    { id: 1, emoji: "😊", label: "Happy", message: "Great to see you happy! Keep shining your light!" },
    { id: 2, emoji: "😔", label: "Sad", message: "I’m sorry you're feeling down. Remember, it's okay to take a break." },
    { id: 3, emoji: "😐", label: "Neutral", message: "Thanks for sharing. Wishing you moments of peace today." },
    { id: 4, emoji: "😡", label: "Angry", message: "Take a deep breath. Sometimes, a little pause helps ease the tension." },
  ];

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    // Optionally, add further interactive actions here (e.g., change background, display modal, etc.)
  };

  return (
    <div className="mood-tracker">
      <h2>How are you feeling today?</h2>
      <div className="moods">
        {moods.map(mood => (
          <button
            key={mood.id}
            className="mood-button"
            onClick={() => handleMoodClick(mood)}
            aria-label={mood.label}
          >
            <span role="img" aria-hidden="true">{mood.emoji}</span>
          </button>
        ))}
      </div>
      {selectedMood && (
        <div className="mood-message">
          <p>{selectedMood.message}</p>
        </div>
      )}
    </div>
  );
}

export default MoodTracker;
