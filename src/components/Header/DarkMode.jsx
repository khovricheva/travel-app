import React, { useState, useEffect } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem('DARK_MODE'))
  );
  const addClass = (isDarkMode) => {
    isDarkMode
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode');
  };

  useEffect(() => {
    addClass(isDarkMode);
  }, [isDarkMode]);

  const handleModeChange = () => {
    addClass(isDarkMode);
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('DARK_MODE', !isDarkMode);
  };

  return (
    <DarkModeToggle
      onChange={handleModeChange}
      checked={isDarkMode}
      size={80}
      className='darkMode'
    />
  );
};

export default DarkMode;
