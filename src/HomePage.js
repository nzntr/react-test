import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';
import './App.css';

function HomePage() {
  const { handleInputSubmit, handleHideClick } = useContext(AppContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = () => {
    handleInputSubmit(name, address);
    setName('');
    setAddress('');
  };


  return (
    <div className="home-info">
      <h3>Welcome to the Home page!</h3>
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
      <button  onClick={handleSubmit}>Submit</button>
      <button  onClick={handleHideClick}>Hide</button>
    </div>
  );
}

export default HomePage;
