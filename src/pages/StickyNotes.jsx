// src/pages/StickyNotes.jsx
import './StickyNotes.css';

function StickyNotes() {
  // Dummy data for sticky notes
  const notes = [
    { id: 1, text: "You are amazing!", author: "Anonymous" },
    { id: 2, text: "Keep shining bright.", author: "A Friend" },
    { id: 3, text: "Believe in yourself!", author: "Kind Stranger" },
    { id: 4, text: "Every day is a new beginning.", author: "Someone Who Cares" },
    { id: 5, text: "You matter.", author: "A Supportive Soul" },
    { id: 6, text: "Your smile can change the world.", author: "Optimistic Stranger" },
    { id: 7, text: "You are loved.", author: "A Caring Heart" },
    { id: 8, text: "Don't give up!", author: "A Believer" },
    { id: 9, text: "You are not alone.", author: "A Friend" },
    { id: 10, text: "Your story matters.", author: "Someone Who Cares" },
  ];

  // Define your three colors (yellow, blue, red)
  const colors = ['#fff8b5', '#b5d9ff', '#ffb5b5'];

  return (
    <div className="sticky-notes-page">
      <h1>Sticky Notes</h1>
      <p>Short notes of love and encouragement from strangers.</p>
      
      <div className="notes-grid">
        {notes.map(note => {
          // Choose a random color for each note
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div key={note.id} className="sticky-note" style={{ background: randomColor }}>
              <p className="note-text">{note.text}</p>
              <p className="note-author">- {note.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StickyNotes;
