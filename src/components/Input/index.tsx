import React from 'react';

import { Container } from './styles';
import { useInput } from '../../contexts/Input';

const Input: React.FC = () => {
  const { youtubeURL, setYoutubeURL } = useInput();

  return (
    <Container
      value={youtubeURL}
      onChangeText={(text) => setYoutubeURL(text)}
    />
  );
};

export default Input;
