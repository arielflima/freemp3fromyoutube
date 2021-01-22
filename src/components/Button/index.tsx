import React from 'react';

import { Container, Text } from './styles';

interface IButtonProps {
  youtubeURL: string;
}

const Button: React.FC<IButtonProps> = ({ youtubeURL }) => {
  return (
    <Container onPress={() => console.log(youtubeURL)}>
      <Text>Baixar</Text>
    </Container>
  );
};

export default Button;
