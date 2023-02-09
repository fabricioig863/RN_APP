import React from 'react';
import Button from '@/components/Button';
import * as S from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';

const Post = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);

  const handleNavigate = () => {
    navigation.navigate('onboarding');
  };
  return (
    <S.Container>
      <S.Content>
        <Button color="secondary" onPress={handleNavigate}>
          Vai para onboarding
        </Button>
      </S.Content>
    </S.Container>
  );
};

export default Post;
