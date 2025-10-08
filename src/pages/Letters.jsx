// src/pages/Letters.jsx
import React, { useState, useEffect } from 'react';
import './Letters.css';
import Modal from '../components/Modal';
import WriteLetter from '../components/WriteLetter';

function Letters() {
  const [letters, setLetters] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [writeModalOpen, setWriteModalOpen] = useState(false);

const API_URL = 'https://dear-you-backend.onrender.com';

  // Fetch letters from backend
  useEffect(() => {
    fetch(`${API_URL}/api/letters`)
      .then(res => res.json())
      .then(data => setLetters(data))
      .catch(err => console.error('Error fetching letters:', err));
  }, []);

  // Add new letter to backend and update state
  const handleAddLetter = (newLetter) => {
    fetch(`${API_URL}/api/letters`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLetter),
    })
      .then(res => res.json())
      .then(savedLetter => {
        setLetters([savedLetter, ...letters]); // prepend new letter
      })
      .catch(err => console.error('Error adding letter:', err));
  };

  const openLetterModal = (letter) => {
    setSelectedLetter(letter);
  };

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
            key={letter._id}
            className="letter-card"
            onClick={() => openLetterModal(letter)}
          >
            <h2 className="letter-title">{letter.title}</h2>
            <p className="letter-text">{letter.text.substring(0, 100)}...</p>
            <p className="letter-author">- {letter.author}</p>
          </div>
        ))}
      </div>

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
