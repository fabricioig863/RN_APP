import React from 'react';
import Button from '@/components/Button';
import * as S from './styles';
import Separator from '@/components/Separator';
import {useNavigation} from '@react-navigation/native';

const Feed = ({}) => {
  const navigation = useNavigation();

  const handlePressToPost = () => {
    navigation.navigate('Stories', {
      name: 'Fabricio',
    });
  };

  return (
    <S.Container>
      <S.Content>
        <Separator height={20} />
        <Button color="background" onPress={handlePressToPost}>
          Vai para a Stories
        </Button>
        <S.Title></S.Title>
      </S.Content>
    </S.Container>
  );
};

export default Feed;
