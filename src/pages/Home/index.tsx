import React from 'react';

import InputProvider from '../../contexts/Input';
import ButtonProvider from '../../contexts/Button';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <ButtonProvider>
      <InputProvider>
        <Container>
          <Input />
          <Button />
        </Container>
      </InputProvider>
    </ButtonProvider>
  );
};

export default Home;
