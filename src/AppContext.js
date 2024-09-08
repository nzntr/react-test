import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pages, setPages] = useState([{ title: 'Home', details: '' },
    { title: 'Profile', details: '' },
    { title: 'About', details: '' },
    { title: 'Admin', details: '' }]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleHideClick = () => {
    setSelectedItem(null);
  };

  const addPage = (newPageName, newPageDetails) => {
    setPages([...pages, { title: newPageName, details: newPageDetails }]);
  };

  const handleInputSubmit = (nameInput, addressInput) => {
    setName(nameInput);
    setAddress(addressInput);
  };

  return (
    <AppContext.Provider value={{
      selectedItem, handleItemClick, handleHideClick,
      name, address, handleInputSubmit,
      pages, addPage
    }}>
      {children}
    </AppContext.Provider>
  );
};
