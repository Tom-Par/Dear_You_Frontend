// src/pages/Letters.jsx
import './Letters.css';

function Letters() {
  // Dummy data for letters
  const letters = [
    {
      id: 1,
      title: "A Message of Hope",
      text: "Dear you, I know life sometimes feels overwhelming, but remember that every challenge you face is shaping you into a stronger, more compassionate person. You are worthy of love and support.",
      author: "Someone Caring",
    },
    {
      id: 2,
      title: "Keep Going",
      text: "Dear you, when the days feel dark, remember that there is always light waiting at the end of the tunnel. Trust in yourself, take one step at a time, and never lose sight of your inner strength.",
      author: "A Friend",
    },
    {
      id: 3,
      title: "Believe in Your Journey",
      text: "Dear you, every moment is a new beginning. No matter where you are right now, know that you have the power to create change, to grow, and to build the life you dream of.",
      author: "A Kind Soul",
    },
  ];

  return (
    <div className="letters-page">
      <h1>Letters</h1>
      <p>Read heartfelt letters of support and encouragement from strangers.</p>
      
      <div className="letters-list">
        {letters.map(letter => (
          <div key={letter.id} className="letter-card">
            <h2 className="letter-title">{letter.title}</h2>
            <p className="letter-text">{letter.text}</p>
            <p className="letter-author">- {letter.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Letters;
