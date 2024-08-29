import React, { useState } from 'react';
import './App.css';

function HomePage({ onHideClick, onInputSubmit }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = () => {
    onInputSubmit(name, address);
    setName('');
    setAddress('');
  };

  const buttonStyle = {
    backgroundColor: 'darkgreen',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px'
  };

  return (
    <div className="home-info">
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Enter your address"
        value={address}
        onChange={handleAddressChange}
      />
      <button style={buttonStyle} onClick={handleSubmit}>Submit</button>
      <button style={buttonStyle} onClick={onHideClick}>Hide</button>
    </div>
  );
}

export default HomePage;
