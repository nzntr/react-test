import React from 'react';
import './App.css';

function About({ onHideClick }) {

  return (
    <div className="about-info">
      <h2>About</h2>
      <p>Welcome to the about page!</p>
      <button  onClick={onHideClick}>Hide</button>
    </div>
  );
}

export default About;
