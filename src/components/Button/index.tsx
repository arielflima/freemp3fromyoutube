import React, { useCallback, useState } from 'react';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

import { Container, Text } from './styles';
import { useInput } from '../../contexts/Input';
import { useButton } from '../../contexts/Button';

interface IResponseOptionsProps {
  method: string;
  url: string;
  params: { video_id: string };
  headers: { 'x-rapidapi-key': string; 'x-rapidapi-host': string };
}

const Button: React.FC = () => {
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

      setLoading(false);
      console.log(response.data);
    } catch (err) {
      console.warn(`happens something wrong with your requisition! ${err}`);

      setLoading(false);
    }
  }, [videoId, setContent]);

  return (
    <Container onPress={handleSearchUrl}>
      <Text>{loading ? 'Loading' : 'Download'}</Text>
    </Container>
  );
};

export default Button;
