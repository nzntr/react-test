import React, { useState } from 'react';
import './App.css';

function AppTodo() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  };

  const handleAdd = () => {
    if (text.trim() !== '') {
      setItems([...items, { text, isStrikedThrough: false }]);
      setText('');
    }
  };

  const handleStrikeThrough = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isStrikedThrough = !updatedItems[index].isStrikedThrough;
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={text}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {items.map((item, index) => (
            <li 
              key={index}
              className={item.isStrikedThrough ? 'striked-through' : ''}
              onClick={() => handleStrikeThrough(index)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default AppTodo;
