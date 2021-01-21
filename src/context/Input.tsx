import React, { createContext, useState, useContext } from 'react';

const InputContext = createContext('teste');

export default function InputProvider({ children }) {
  const [youtubeURL, setYoutubeURL] = useState('teste');

  return (
    <InputContext.Provider value={{ youtubeURL, setYoutubeURL }}>
      {children}
    </InputContext.Provider>
  );
}

export function useInput() {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error('useInput must be used within a InputProvider');
  }

  const { youtubeURL, setYoutubeURL } = context;
  return { youtubeURL, setYoutubeURL };
}
