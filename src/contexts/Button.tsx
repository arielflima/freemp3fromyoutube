import React, { createContext, useState, useContext } from 'react';

interface IContentProps {
  Download_Size: string;
  Download_url: string;
  Full_Video_Link: string;
  Status: string;
  Status_Code: number;
  Title: string;
}

interface IContextProps {
  content: IContentProps;
  setContent: (Content: IContentProps) => void;
}

interface IButtonProviderProps {
  children: React.ReactElement;
}

const ButtonContext = createContext<IContextProps>({
  content: {
    Download_Size: '',
    Download_url: '',
    Full_Video_Link: '',
    Status: '',
    Status_Code: 0,
    Title: '',
  },
  setContent: (content: IContentProps) =>
    console.warn(`you're not using context! : ${content}`),
});

export default function ButtonProvider({ children }: IButtonProviderProps) {
  const [content, setContent] = useState<IContentProps>({
    Download_Size: '',
    Download_url: '',
    Full_Video_Link: '',
    Status: '',
    Status_Code: 0,
    Title: '',
  });

  return (
    <ButtonContext.Provider value={{ content, setContent }}>
      {children}
    </ButtonContext.Provider>
  );
}

export function useButton() {
  const context = useContext(ButtonContext);

  if (!context) {
    throw new Error('useInput must be used within a ButtonProvider');
  }

  const { content, setContent } = context;
  return { content, setContent };
}
