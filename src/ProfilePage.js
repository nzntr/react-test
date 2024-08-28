import React from 'react';
import './App.css';

function Profile({ onHideClick }) {
  const buttonStyle = {
    backgroundColor: 'darkblue ',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div className="profile-info">
      <h2>Profile</h2>
      <p>Welcome to the profile page!</p>
      <button style={buttonStyle} onClick={onHideClick}>Hide</button>
    </div>
  );
}

export default Profile;
