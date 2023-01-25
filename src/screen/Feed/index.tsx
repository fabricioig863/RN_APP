import React from 'react';
import Button from '@/components/Button';
import * as S from './styles';

const Feed = ({navigation}) => {
  const handleNavigateStories = () => {
    navigation.navigate('Stories');
  };

  return (
    <S.Container>
      <S.Content>
        <Button color="surface" onPress={handleNavigateStories}>
          on click me
        </Button>
      </S.Content>
    </S.Container>
  );
};

export default Feed;
