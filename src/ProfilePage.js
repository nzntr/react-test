import React, { useContext }  from 'react';
import { AppContext } from './AppContext';
import './App.css';

function Profile() {
  const { name, address, handleHideClick } = useContext(AppContext);


  return (
    <div className="profile-info">
      <h2>Welcome to the profile page!</h2>
      <p>Name:    {name}</p>
      <p>Address:    {address}</p>
      <button  onClick={handleHideClick}>Hide</button>
    </div>
  );
}

export default Profile;
