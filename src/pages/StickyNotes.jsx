// src/pages/StickyNotes.jsx
import { useState } from "react";
import "./StickyNotes.css";

function StickyNotes() {
  const colors = ["#fff8b5", "#b5d9ff", "#ffb5b5"];

  // Dummy data with preset colors for initial notes
  const initialNotesData = [
    { id: 1, text: "You are amazing!", author: "Anonymous", color: "#fff8b5" },
    {
      id: 2,
      text: "Keep shining bright.",
      author: "A Friend",
      color: "#b5d9ff",
    },
    {
      id: 3,
      text: "Believe in yourself!",
      author: "Kind Stranger",
      color: "#ffb5b5",
    },
    {
      id: 4,
      text: "Every day is a new beginning.",
      author: "Someone Who Cares",
      color: "#fff8b5",
    },
  ];

  const [notes, setNotes] = useState(initialNotesData);
  const [newNote, setNewNote] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim() === "") return;
    const newId = notes.length ? notes[notes.length - 1].id + 1 : 1;
    const note = {
      id: newId,
      text: newNote,
      author: newAuthor || "Anonymous",
      color: selectedColor,
    };
    setNotes([note, ...notes]);
    setNewNote("");
    setNewAuthor("");
    // Optionally reset the selected color after submission
    setSelectedColor(colors[0]);
  };

  return (
    <div className="sticky-notes-page">
      <h1>Sticky Notes</h1>
      <p>Short notes of love and encouragement from strangers.</p>

      {/* Form moved above the notes grid */}
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
                className={`color-option ${
                  selectedColor === color ? "selected" : ""
                }`}
                style={{ background: color }}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
        </div>

        <button type="submit">Add Note</button>
      </form>

      <div className="notes-grid">
        {notes.map((note) => (
          <div
            key={note.id}
            className="sticky-note"
            style={{ background: note.color }}
          >
            <p className="note-text">{note.text}</p>
            <p className="note-author">- {note.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StickyNotes;
