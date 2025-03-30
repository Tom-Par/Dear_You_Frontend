// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import StickyNotes from './pages/StickyNotes';
import Letters from './pages/Letters';
import SelfCare from './pages/SelfCare';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/sticky-notes" element={<StickyNotes />} />
        <Route path="/letters" element={<Letters />} />
        <Route path="/self-care" element={<SelfCare />} />
        <Route path="/" element={<SelfCare />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;