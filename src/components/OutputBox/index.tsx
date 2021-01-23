import React from 'react';

import { Container, Text } from './styles';
import { useButton } from '../../contexts/Button';

const OutputBox: React.FC = () => {
  const { content } = useButton();

  const {
    Download_Size,
    Download_url,
    Full_Video_Link,
    // Status,
    // Status_Code,
    Title,
  } = content;

  return (
    <Container>
      <Text>
        Download Size: {Download_Size ? Download_Size : 'Not provided yet'}
      </Text>
      <Text>
        Download Url: {Download_url ? Download_url : 'Not provided yet'}
      </Text>
      <Text>
        Full_Video_Link:{' '}
        {Full_Video_Link ? Full_Video_Link : 'Not provided yet'}
      </Text>
      <Text>Title: {Title ? Title : 'Not provided yet'}</Text>
    </Container>
  );
};

export default OutputBox;
