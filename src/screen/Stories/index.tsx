import Button from '@/components/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import * as S from './styles';

const Stories = () => {
  const route = useRoute<StoriesHomeStackRouteProps>();
  console.log(route.params.name);
  const navigation = useNavigation();

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
