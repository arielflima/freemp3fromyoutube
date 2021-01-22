import React, { createContext, useState, useContext } from 'react';

interface IContextProps {
  youtubeURL: string;
  setYoutubeURL: React.Dispatch<React.SetStateAction<string>>;
}

interface IInputProviderProps {
  children: JSX.Element;
}

const InputContext = createContext<IContextProps>({
  youtubeURL: 'teste',
  setYoutubeURL: (text) => text,
});

export default function InputProvider({ children }: IInputProviderProps) {
  const [youtubeURL, setYoutubeURL] = useState('test');

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
