import React, { useState } from 'react';
import './App.css';

const initialItems = [
  { id: 1, text: 'Item 1', info: 'Information about Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3', info: 'Information about Item 3' },
  { id: 4, text: 'Item 4' },
  { id: 5, text: 'Item 5', info: 'Information about Item 5' },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [newItemText, setNewItemText] = useState('');
  const [clickedItems, setClickedItems] = useState([]);

  const handleInputChange = (event) => {
    setNewItemText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  };

  const handleAdd = () => {
    if (newItemText.trim() !== '') {
      const newItem = {
        id: items.length + 1, 
        text: newItemText.trim(),
        info: '', 
      };
      setItems([...items, newItem]);
      setNewItemText('');
    }
  };

  const handleItemClick = (itemId) => {
    const clickedItem = items.find(item => item.id === itemId);
    if (clickedItem && !clickedItems.includes(clickedItem)) {
      setClickedItems([...clickedItems, clickedItem]);
    }
  };

  const getItemInfo = (item) => {
    return item.info ? item.info : 'Default information';
  };

  const handleHideInfo = (itemId) => {
    setClickedItems(clickedItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="App">
      <h1>List</h1>
      <header className="App-header">
        <div className="add-item">
          <input
            type="text"
            value={newItemText}
            onKeyPress={handleKeyPress}
            onChange={handleInputChange}
            placeholder="Enter new item"
          />
          <button onClick={handleAdd}>Add Item</button>
          <ul>
            {items.map((item) => (
              <li key={item.id} onClick={() => handleItemClick(item.id)}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {clickedItems.map((item) => (
            <div key={item.id} className="item-info">
              <p>{getItemInfo(item)}</p>
              <button onClick={() => handleHideInfo(item.id)}>Hide</button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
