import Button from '@/components/Button';
import React from 'react';
import * as S from './styles';

const Stories = ({navigation}) => {
  const handleGoback = () => {
    navigation.goBack();
  };
  return (
    <S.Container>
      <S.Content>
        <Button color="background" onPress={handleGoback}>
          Stories
        </Button>
      </S.Content>
    </S.Container>
  );
};

export default Stories;
