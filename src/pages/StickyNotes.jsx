// src/pages/StickyNotes.jsx
import './StickyNotes.css';

function StickyNotes() {
  // Dummy data for sticky notes
  const notes = [
    { id: 1, text: "You are amazing!", author: "Anonymous" },
    { id: 2, text: "Keep shining bright.", author: "A Friend" },
    { id: 3, text: "Believe in yourself!", author: "Kind Stranger" },
    { id: 4, text: "Every day is a new beginning.", author: "Someone Who Cares" },
  ];
  
  return (
    <div className="sticky-notes-page">
      <h1>Sticky Notes</h1>
      <p>Short notes of love and encouragement from strangers.</p>
      
      <div className="notes-grid">
        {notes.map(note => (
          <div key={note.id} className="sticky-note">
            <p className="note-text">{note.text}</p>
            <p className="note-author">- {note.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StickyNotes;
