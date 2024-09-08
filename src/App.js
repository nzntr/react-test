import React from 'react';
import './App.css';
import Home from './HomePage';
import Profile from './ProfilePage';
import About from './AboutPage';
import Admin from './Admin';
import { AppProvider, AppContext } from './AppContext';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header className="App-header">
          <AppContext.Consumer>
            {({ pages, selectedItem, handleItemClick, handleHideClick }) => (
              <>
                <ul className="menu-list">
                  {pages.map((page) => (
                    <li key={page.title} onClick={() => handleItemClick(page.title)}>{page.title}</li>
                  ))}
                </ul>
                {selectedItem && (
                  <div className="content-area">
                    {selectedItem === 'Home' && <Home />}
                    {selectedItem === 'Profile' && <Profile />}
                    {selectedItem === 'About' && <About />}
                    {selectedItem === 'Admin' && <Admin />}
                    {pages.map(page => page.title).includes(selectedItem) && !['Home', 'Profile', 'About', 'Admin'].includes(selectedItem) && (
                      <div>
                        <h2>{selectedItem}</h2>
                        <p>{pages.find(page => page.title === selectedItem)?.details}</p>
                        <button onClick={handleHideClick}>Hide</button>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </AppContext.Consumer>
        </header>
      </div>
    </AppProvider>
  );
}

export default App;
