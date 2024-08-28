import React, { useState } from 'react';
import './App.css';
import Home from './HomePage';
import Profile from './ProfilePage';
import About from './AboutPage';
import Admin from './Admin';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [pages, setPages] = useState([{name: 'Home', details:''},      
    {name: 'Profile', details:''}, 
    {name: 'About', details:''}, 
    {name: 'Admin', details:''}]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleHideClick = () => {
    setSelectedItem(null);
  };

  const addPage = (newPageName, newPageDetails) => {
    setPages([...pages, {name: newPageName, details: newPageDetails}]);
  };

  return (
    <div className="App">
      <h1>Hello !!</h1>
      <header className="App-header">
        <ul className="menu-list">
          {pages.map((page) => (
            <li key={page.name} onClick={() => handleItemClick(page.name)}>{page.name}</li>
          ))}
        </ul>
        <div className="content-area">
          {selectedItem === 'Home' && <Home onHideClick={handleHideClick} />}
          {selectedItem === 'Profile' && <Profile onHideClick={handleHideClick} />}
          {selectedItem === 'About' && <About onHideClick={handleHideClick} />}
          {selectedItem === 'Admin' && <Admin onHideClick={handleHideClick} addPage={addPage} />}
          {pages.map(page => page.name).includes(selectedItem) && !['Home', 'Profile', 'About', 'Admin'].includes(selectedItem) && (
            <div>
              <h2>{selectedItem}</h2>
              <p>{pages.find(page => page.name === selectedItem)?.details}</p>
              <button onClick={handleHideClick}>Hide</button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
