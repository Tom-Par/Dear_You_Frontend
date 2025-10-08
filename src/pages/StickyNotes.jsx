// src/pages/StickyNotes.jsx
import React, { useState, useEffect } from 'react';
import './StickyNotes.css';
import Modal from '../components/Modal';

function StickyNotes() {
  const colors = ['#fff8b5', '#b5d9ff', '#ffb5b5'];

  const API_URL = 'https://dear-you-backend.onrender.com'; // backend z Render

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [modalOpen, setModalOpen] = useState(false);

  // Pobierz notatki z backendu
  useEffect(() => {
    fetch(`${API_URL}/api/notes`)
      .then(res => res.json())
      .then(data => setNotes(data))
      .catch(err => console.error('Error fetching notes:', err));
  }, []);

  // Dodaj nową notatkę
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const note = {
      text: newNote,
      author: newAuthor || 'Anonymous',
      color: selectedColor,
    };

    fetch(`${API_URL}/api/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    })
      .then(res => res.json())
      .then(savedNote => {
        setNotes([savedNote, ...notes]);
        setNewNote('');
        setNewAuthor('');
        setSelectedColor(colors[0]);
        setModalOpen(false);
      })
      .catch(err => console.error('Error adding note:', err));
  };

  return (
    <div className="sticky-notes-page">
      <h1>Sticky Notes</h1>
      <p>Short notes of love and encouragement from strangers.</p>

      <button className="open-modal-btn" onClick={() => setModalOpen(true)}>
        Add A Note
      </button>

      {/* Modal for adding a new note */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <form className="sticky-note-form" onSubmit={handleFormSubmit}>
          <textarea
            placeholder="Write your note here..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            rows="3"
            required
          />
          <div className="input-row">
            <input
              type="text"
              placeholder="Your name (optional)"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
            />
            <div className="color-options">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                  style={{ background: color }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select color ${color}`}
                />
              ))}
            </div>
          </div>
          <button type="submit">Add Note</button>
        </form>
      </Modal>

      <div className="notes-grid">
        {notes.map(note => (
          <div key={note._id} className="sticky-note" style={{ background: note.color }}>
            <p className="note-text">{note.text}</p>
            <p className="note-author">- {note.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StickyNotes;
