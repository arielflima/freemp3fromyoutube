import React from 'react';

import InputProvider from '../../contexts/Input';
import ButtonProvider from '../../contexts/Button';

import Input from '../../components/Input';
import Button from '../../components/SearchButton';
import { Container, InputBar } from './styles';
import OutputBox from '../../components/OutputBox/index';

const Home: React.FC = () => {
  return (
    <ButtonProvider>
      <InputProvider>
        <Container>
          <InputBar>
            <Input />
            <Button />
          </InputBar>

          <OutputBox />
        </Container>
      </InputProvider>
    </ButtonProvider>
  );
};

export default Home;
