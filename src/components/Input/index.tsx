import React from 'react';

import { Container } from './styles';

const Input: React.FC = () => {
  return (
    <Container
      value="Cole a url do video do youtube aqui"
      onChangeText={(text) => text}
    />
  );
};

export default Input;
