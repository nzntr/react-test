import React from 'react';
import './App.css';

function Home({ onHideClick }) {
  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div className="home-info">
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
      <button style={buttonStyle} onClick={onHideClick}>Hide</button>
    </div>
  );
}

export default Home;
