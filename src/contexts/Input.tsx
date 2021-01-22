import React, { createContext, useState, useContext } from 'react';

interface IContextProps {
  youtubeURL: string;
  setYoutubeURL: (Text: string) => void;
}

interface IInputProviderProps {
  children: React.ReactElement;
}

const InputContext = createContext<IContextProps>({
  youtubeURL: '',
  setYoutubeURL: (text) => console.warn(`you're not using context! : ${text}`),
});

export default function InputProvider({ children }: IInputProviderProps) {
  const [youtubeURL, setYoutubeURL] = useState(
    'Paste Youtube URL to convert to MP3',
  );

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
