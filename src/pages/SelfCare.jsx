// src/pages/SelfCare.jsx
import './SelfCare.css';
import BreathingExercise from '../components/BreathingExercise';
import MoodTracker from '../components/MoodTracker';
import HelpfulResources from '../components/HelpfulResources';

function SelfCare() {
  return (
    <div className="self-care-wrapper">
      <h1>Self Care</h1>
      <p>
        Sometimes life gets tough. Remember, you are not alone.
        Take a moment to breathe, check in with your feelings, and explore some supportive resources below.
      </p>
      
      <section className="breathing-exercise-section">
        <h2>Breathing Exercise</h2>
        <BreathingExercise />
        <p>
          Try this simple breathing cycle: inhale for 4 seconds, hold for 7, and exhale for 8. 
          Repeat until you feel more at ease.
        </p>
      </section>
      
      <section className="mood-tracker-section">
        <h2>How Are You Feeling?</h2>
        <MoodTracker />
      </section>
      
      <section className="resources-section">
        <HelpfulResources />
      </section>
    </div>
  );
}

export default SelfCare;
