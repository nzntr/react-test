import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import About from './About';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleHideClick = () => {
    setSelectedItem(null);
  };

  return (
    <div className="App">
      <h1>Menu</h1>
      <header className="App-header">
        <ul className="menu-list">
          <li onClick={() => handleItemClick('Home')}>Home</li>
          <li onClick={() => handleItemClick('Profile')}>Profile</li>
          <li onClick={() => handleItemClick('About')}>About</li>
        </ul>
        <div className="content-area">
          {selectedItem === 'Home' && <Home onHideClick={handleHideClick} />}
          {selectedItem === 'Profile' && <Profile onHideClick={handleHideClick} />}
          {selectedItem === 'About' && <About onHideClick={handleHideClick} />}
        </div>
      </header>
    </div>
  );
}

export default App;
