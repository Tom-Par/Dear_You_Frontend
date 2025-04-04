import { useState } from 'react';
import './MoodTracker.css';

function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  
  const moods = [
    { id: 1, emoji: "😊", label: "Happy", message: "It’s wonderful to see you happy! Keep shining!" },
    { id: 2, emoji: "😔", label: "Sad", message: "I’m sorry you’re feeling down. It’s okay to feel this way sometimes." },
    { id: 3, emoji: "😐", label: "Neutral", message: "Thanks for checking in. Wishing you a balanced day." },
    { id: 4, emoji: "😡", label: "Angry", message: "Take a deep breath. These feelings will pass." },
  ];

  return (
    <div className="mood-tracker-container">
      <div className="mood-options">
        {moods.map(mood => (
          <button
            key={mood.id}
            className={`mood-btn ${selectedMood?.id === mood.id ? 'active' : ''}`}
            onClick={() => setSelectedMood(mood)}
            aria-label={mood.label}
          >
            <span role="img" aria-hidden="true">{mood.emoji}</span>
          </button>
        ))}
      </div>
      {selectedMood && (
        <div className="mood-feedback">
          <p>{selectedMood.message}</p>
        </div>
      )}
    </div>
  );
}

export default MoodTracker;
