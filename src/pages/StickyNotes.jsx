// src/pages/StickyNotes.jsx
import React, { useState } from 'react';
import './StickyNotes.css';
import Modal from '../components/Modal';

function StickyNotes() {
  const colors = ['#fff8b5', '#b5d9ff', '#ffb5b5'];
  
  // Dummy data with preset colors for initial notes
  const initialNotesData = [
    { id: 1, text: "You are amazing!", author: "Anonymous", color: '#fff8b5' },
    { id: 2, text: "Keep shining bright.", author: "A Friend", color: '#b5d9ff' },
    { id: 3, text: "Believe in yourself!", author: "Kind Stranger", color: '#ffb5b5' },
    { id: 4, text: "Every day is a new beginning.", author: "Someone Who Cares", color: '#fff8b5' },
  ];

  const [notes, setNotes] = useState(initialNotesData);
  const [newNote, setNewNote] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim() === '') return;
    const newId = notes.length ? notes[0].id + 1 : 1;
    const note = {
      id: newId,
      text: newNote,
      author: newAuthor || "Anonymous",
      color: selectedColor,
    };
    // Prepend the new note so it appears first
    setNotes([note, ...notes]);
    setNewNote('');
    setNewAuthor('');
    setSelectedColor(colors[0]);
    setModalOpen(false);
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
        <form className="sticky-note-form" onSubmit={handleSubmit}>
          <textarea 
            placeholder="Write your note here..." 
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            rows="3"
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
          <div key={note.id} className="sticky-note" style={{ background: note.color }}>
            <p className="note-text">{note.text}</p>
            <p className="note-author">- {note.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StickyNotes;
