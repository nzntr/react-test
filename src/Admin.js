import React, { useState } from 'react';

function Admin({ onHideClick, addPage }) {
  const [newPageName, setNewPageName] = useState('');
  const [newPageDetails, setNewPageDetails] = useState('');

  const handleInputChange = (e) => {
    setNewPageName(e.target.value);
  };
  const handleInputChangeDetails = (e) => {
    setNewPageDetails(e.target.value);
  };

  const handleAddPage = () => {
    if (newPageName.trim() !== '') {
      addPage(newPageName.trim(), newPageDetails.trim());
      setNewPageName(''); 
      setNewPageDetails('');
    }
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px'
  };

  return (
    <div className="admin-info">
      <h2>Admin</h2>
      <p>Welcome to the admin page!</p>
        <div className="home-info">
        <input
          type="text"
          value={newPageName}
          onChange={handleInputChange}
          placeholder="Enter new page name"
        />

          <input
          type="text"
          value={newPageDetails}
          onChange={handleInputChangeDetails}
          placeholder="Add Details"
        /></div>
        <button style={buttonStyle} onClick={handleAddPage}>Add New Page</button>
      <button style={buttonStyle} onClick={onHideClick}>Hide</button>
    </div>
  );
}

export default Admin;
