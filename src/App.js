import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreeting(`Hello ${text}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <button type="submit">Submit</button>
        </form>
        {greeting && <p>{greeting}</p>}
      </header>
    </div>
  );
}

export default App;
