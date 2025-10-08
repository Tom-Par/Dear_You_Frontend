// src/components/HelpfulResources.jsx
import React from 'react';
import './HelpfulResources.css';

function HelpfulResources() {
  const resources = [
    {
      id: 1,
      title: "Find a Helpline",
      link: "https://findahelpline.com",
      description: "Locate help and support in your area across Europe and beyond."
    },
    {
      id: 2,
      title: "European Emergency Number",
      link: "tel:112",
      description: "Dial 112 for immediate emergency assistance across Europe."
    },
    {
      id: 3,
      title: "National Alliance on Mental Illness (NAMI)",
      link: "https://www.nami.org",
      description: "Visit NAMI for comprehensive mental health resources and support."
    }
  ];

  return (
    <div className="helpful-resources">
      <h2>Helpful Resources</h2>
      <ul>
        {resources.map(resource => (
          <li key={resource.id} className="resource-item">
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </a>
          </li>
        ))}
      </ul>
      <p className="disclaimer">
        These resources are provided for informational purposes only and do not constitute professional advice.
      </p>
    </div>
  );
}

export default HelpfulResources;
