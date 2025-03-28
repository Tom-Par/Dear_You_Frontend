// src/pages/SelfCare.jsx
import "./SelfCare.css";

function SelfCare() {
  return (
    <div className="self-care-wrapper">
      <h1>Self Care</h1>
      <p>
        Sometimes life gets tough. Remember, you are not alone. Here are some
        resources and exercises to help you through difficult moments.
      </p>

      <section className="section">
        <h2>Breathing Exercise</h2>
        <p>
          Try this simple breathing exercise: <br />
          <strong>Inhale</strong> for 4 seconds, hold for 7 seconds, and{" "}
          <strong>exhale</strong> for 8 seconds. Repeat until you feel more at
          ease.
        </p>
      </section>

      <section className="section">
        <h2>Helpful Resources</h2>
        <ul>
          <li>
            Mental Health Hotline: <a href="tel:1234567890">123-456-7890</a>
          </li>
          <li>
            <a
              href="https://www.example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find local support and more information here
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SelfCare;
