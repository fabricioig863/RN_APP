import React from 'react';
import Button from '@/components/Button';
import * as S from './styles';

const Post = ({navigation}) => {
  const handleNavigate = () => {
    navigation.navigate('Onboarding');
  };
  return (
    <S.Container>
      <S.Content>
        <Button color="secondary" onPress={handleNavigate}>
          Post
        </Button>
      </S.Content>
    </S.Container>
  );
};

export default Post;
