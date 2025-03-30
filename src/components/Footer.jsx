// src/components/Footer.jsx
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Dear You. All rights reserved.</p>
      <p>Made with ☕, ❤️, and a keyboard.</p>
    </footer>
  );
}

export default Footer;
