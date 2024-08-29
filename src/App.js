import React, { useState } from 'react';
import './App.css';
import Home from './HomePage';
import Profile from './ProfilePage';
import About from './AboutPage';
import Admin from './Admin';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pages, setPages] = useState([{title: 'Home', details:''},      
    {title: 'Profile', details:''}, 
    {title: 'About', details:''}, 
    {title: 'Admin', details:''}]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleHideClick = () => {
    setSelectedItem(null);
  };

  const addPage = (newPageName, newPageDetails) => {
    setPages([...pages, {title: newPageName, details: newPageDetails}]);
  };

  const handleInputSubmit = (nameInput, addressInput) => {
    setName(nameInput);
    setAddress(addressInput);
  };

  return (
    <div className="App">
      <h1>Hello !!</h1>
      <header className="App-header">
        <ul className="menu-list">
          {pages.map((page) => (
            <li key={page.title} onClick={() => handleItemClick(page.title)}>{page.title}</li>
          ))}
        </ul>
        <div className="content-area">
          {selectedItem === 'Home' && <Home onHideClick={handleHideClick} onInputSubmit={handleInputSubmit}/>}
          {selectedItem === 'Profile' && <Profile onHideClick={handleHideClick} name={name} address={address}/>}
          {selectedItem === 'About' && <About onHideClick={handleHideClick} />}
          {selectedItem === 'Admin' && <Admin onHideClick={handleHideClick} addPage={addPage} />}
          {pages.map(page => page.title).includes(selectedItem) && !['Home', 'Profile', 'About', 'Admin'].includes(selectedItem) && (
            <div>
              <h2>{selectedItem}</h2>
              <p>{pages.find(page => page.title === selectedItem)?.details}</p>
              <button onClick={handleHideClick}>Hide</button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
