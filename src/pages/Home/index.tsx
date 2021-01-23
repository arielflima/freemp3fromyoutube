import React from 'react';

import InputProvider from '../../contexts/Input';
import ButtonProvider from '../../contexts/Button';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container } from './styles';
import OutputBox from '../../components/OutputBox/index';

const Home: React.FC = () => {
  return (
    <ButtonProvider>
      <InputProvider>
        <Container>
          <Input />
          <Button />
          <OutputBox />
        </Container>
      </InputProvider>
    </ButtonProvider>
  );
};

export default Home;
