import React from 'react';

import { Container } from './styles';
import { useInput } from '../../contexts/Input';
// import { Keyboard } from 'react-native';

const Input: React.FC = () => {
  const { youtubeURL, setYoutubeURL } = useInput();

  return (
    <Container
      // onFocus={() => Keyboard.dismiss()}
      clearTextOnFocus={true}
      // value={youtubeURL}
      onChangeText={(text) => setYoutubeURL(text)}
    />
  );
};

export default Input;
