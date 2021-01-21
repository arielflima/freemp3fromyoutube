import React, { useContext } from 'react';

import InputProvider from '../../context/Input';

import { useInput } from '../../context/Input';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container } from './styles';

const Home: React.FC = () => {
  const { youtubeURL, setYoutubeURL } = useInput();

  return (
    <InputProvider>
      <Container>
        <Input />
        <Button />
      </Container>
    </InputProvider>
  );
};

export default Home;
