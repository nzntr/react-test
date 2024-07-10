import React from 'react';
import './App.css';

function About({ onHideClick }) {
  const buttonStyle = {
    backgroundColor: 'orange',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '100px',
    cursor: 'pointer'
  };

  return (
    <div className="about-info">
      <h2>About</h2>
      <p>Welcome to the about page! Welcome to the about page!Welcome to the about page!Welcome to the about page!Welcome to the about page!</p>
      <p>Welcome to the about page!</p>
      <p>Welcome to the about page!</p>
      <button style={buttonStyle} onClick={onHideClick}>Hide</button>
    </div>
  );
}

export default About;
