import React from 'react';
import './App.css';

function Profile({ onHideClick, name, address }) {


  return (
    <div className="profile-info">
      <h2>Profile</h2>
      <p>Welcome to the profile page!</p>
      <p>Name:{name}</p>
      <p>Address: {address}</p>
      <button  onClick={onHideClick}>Hide</button>
    </div>
  );
}

export default Profile;
