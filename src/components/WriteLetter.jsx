// src/components/WriteLetter.jsx
import React, { useState } from 'react';
import './WriteLetter.css';

function WriteLetter({ onAddLetter, onClose }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !text.trim()) return; // require title and letter text
    const newLetter = {
      id: Date.now(), // generates a unique id
      title,
      text,
      author: author || "Anonymous",
    };
    onAddLetter(newLetter);
    // Reset form fields
    setTitle('');
    setText('');
    setAuthor('');
    onClose();
  };

  return (
    <form className="write-letter-form" onSubmit={handleSubmit}>
      <h2>Write a Letter</h2>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Write your letter here..." 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        rows="8"
      />
      <input 
        type="text" 
        placeholder="Your name (optional)" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
      />
      <button type="submit">Submit Letter</button>
    </form>
  );
}

export default WriteLetter;
