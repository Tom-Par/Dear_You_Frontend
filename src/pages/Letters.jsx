// src/pages/Letters.jsx
import React, { useState } from 'react';
import './Letters.css';
import Modal from '../components/Modal';
import WriteLetter from '../components/WriteLetter';

function Letters() {
  // Example letter data with longer content
  const dummyLetters = [
    {
      id: 1,
      title: "A Message of Hope",
      text: `Dear you,
      
I know life can sometimes feel overwhelming, and the weight of your struggles may seem insurmountable.  
But remember: each new day brings a fresh start, and the strength you need is already within you.  
Let this letter be a reminder that you are never alone, and that your unique light brightens the world.  
Keep holding on.`,
      author: "Someone Caring",
    },
    {
      id: 2,
      title: "Keep Going",
      text: `Dear you,
      
Even on the darkest days, there is a spark of hope waiting to be discovered.  
Take one step at a time, and celebrate even the smallest victories.  
Remember that the journey is long, and every challenge makes you stronger.  
Your resilience inspires others. Keep going, and never lose sight of your inner strength.`,
      author: "A Friend",
    },
    {
      id: 3,
      title: "Believe in Your Journey",
      text: `Dear you,
      
Every moment is a new beginning and an opportunity to start fresh.  
Believe that each step you take, no matter how small, is a step toward your dreams.  
Your struggles today shape the wisdom of tomorrow—never doubt that you possess the power to change your story.  
Keep believing, and keep moving forward.`,
      author: "A Kind Soul",
    },
  ];

  // Manage letters state and the selected letter for modal view
  const [letters, setLetters] = useState(dummyLetters);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [writeModalOpen, setWriteModalOpen] = useState(false);

  // Add new letter to the state (prepend so it's the first letter)
  const handleAddLetter = (newLetter) => {
    setLetters([newLetter, ...letters]);
  };

  // Open modal to view full letter
  const openLetterModal = (letter) => {
    setSelectedLetter(letter);
  };

  // Close letter modal
  const closeLetterModal = () => {
    setSelectedLetter(null);
  };

  return (
    <div className="letters-page">
      <h1>Letters</h1>
      <p>Read heartfelt letters of support and encouragement from strangers.</p>
      
      <button 
        className="open-write-letter-btn" 
        onClick={() => setWriteModalOpen(true)}
      >
        Write a Letter
      </button>
      
      <div className="letters-list">
        {letters.map(letter => (
          <div
            key={letter.id}
            className="letter-card"
            onClick={() => openLetterModal(letter)}
          >
            <h2 className="letter-title">{letter.title}</h2>
            {/* Display the first 100 characters as a preview */}
            <p className="letter-text">{letter.text.substring(0, 100)}...</p>
            <p className="letter-author">- {letter.author}</p>
          </div>
        ))}
      </div>

      {/* Modal to view full letter */}
      {selectedLetter && (
        <Modal isOpen={true} onClose={closeLetterModal}>
          <div className="letter-modal-content">
            <h2>{selectedLetter.title}</h2>
            <div className="letter-full-text">
              <p>{selectedLetter.text}</p>
            </div>
            <p className="letter-author-modal">- {selectedLetter.author}</p>
          </div>
        </Modal>
      )}

      {/* Modal for writing a new letter */}
      {writeModalOpen && (
        <Modal isOpen={true} onClose={() => setWriteModalOpen(false)}>
          <WriteLetter 
            onAddLetter={handleAddLetter} 
            onClose={() => setWriteModalOpen(false)} 
          />
        </Modal>
      )}
    </div>
  );
}

export default Letters;
