'use client'

import React, { useState } from 'react';
import TextWidget from './TextWidget';
import Clock from 'react-live-clock'; 
// import Player from './player'

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark');
  };
  

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark bg-white' : 'bg-black'}`}>
      <Clock 
          format={'h:mm:ssa'} 
          style={{fontSize: '1.5em'}} 
          ticking={true} className='text-white text-center my-2'/> 
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className={`text-4xl mb-4 font-bold  align-top ${isDarkMode ? 'text-black' : 'text-white'}`}>Welcome to Studently</h1>
        <div className='flex gap-4'>
          <div className={`border border-blue-300 rounded-lg p-4 shadow-md ${isDarkMode ? 'text-black' : 'text-white'}`}>
            <p>Made by Students, for Students</p>
          </div>
        </div>
          <TextWidget/>
          {/* <Player/> */}
          
      </div>
      {/* <button
        className={`bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded m-4 ${isDarkMode ? 'dark:bg-gray-800' : ''}`}
        onClick={toggleTheme}
      >
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button> */}
      <footer className={`text-sm align-middle text-center text-gray-500 ${isDarkMode ? 'dark:text-gray-400' : ''}`}>
        &copy; 2023 Studently Inc. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
