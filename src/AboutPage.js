import React, { useContext }  from 'react';
import { AppContext } from './AppContext';
import './App.css';

function About() {
  const { handleHideClick } = useContext(AppContext);

  return (
    <div className="about-info">
      <h2>About</h2>
      <p>Welcome to the about page!</p>
      <button  onClick={handleHideClick}>Hide</button>
    </div>
  );
}

export default About;
