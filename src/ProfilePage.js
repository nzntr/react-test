import React from 'react';
import './App.css';

function Profile({ onHideClick, name, address }) {
  const buttonStyle = {
    backgroundColor: 'darkblue',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px'
  };

  return (
    <div className="profile-info">
      <h2>Profile</h2>
      <p>Welcome to the profile page!</p>
      <p>Name:{name}</p>
      <p>Address: {address}</p>
      <button style={buttonStyle} onClick={onHideClick}>Hide</button>
    </div>
  );
}

export default Profile;
