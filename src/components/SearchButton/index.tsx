import React, { useCallback, useState } from 'react';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

import { Container, Text } from './styles';
import { useInput } from '../../contexts/Input';
import { useButton } from '../../contexts/Button';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface IResponseOptionsProps {
  method: string;
  url: string;
  params: { video_id: string };
  headers: { 'x-rapidapi-key': string; 'x-rapidapi-host': string };
}

const SearchButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { setContent } = useButton();
  const { youtubeURL } = useInput();

  const videoId = youtubeURL.slice(32);

  const handleSearchUrl = useCallback(async () => {
    setLoading(true);

    const options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://youtube-to-mp32.p.rapidapi.com/yt_to_mp3',
      params: { video_id: videoId },
      headers: {
        'x-rapidapi-key': '7cccad90bamsh45584317dd21412p17ec88jsn040d66bda2be',
        'x-rapidapi-host': 'youtube-to-mp32.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options).then((conteudo) => {
        return conteudo;
      });

      setContent(response.data);

      const { Status, Status_Code, Warining } = response.data;

      if (Status == 'Fail') {
        Alert.alert(
          'Error with your requisition',
          `${Warining}, check if URL is correct and try again.`,
        );
      }

      setLoading(false);

      console.log(response.data);
    } catch (err) {
      console.warn(`happens something wrong with your requisition! ${err}`);

      setLoading(false);
    }
  }, [videoId, setContent]);

  return (
    <Container onPress={handleSearchUrl}>
      <Icon name="search" color="white" size={32} />
    </Container>
  );
};

export default SearchButton;
