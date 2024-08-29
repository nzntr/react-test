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



  return (
    <div className="admin-info">
      <h2>Admin</h2>
      <p>Add new pages</p>
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
        <button onClick={handleAddPage}>Add New Page</button>
      <button  onClick={onHideClick}>Hide</button>
    </div>
  );
}

export default Admin;
