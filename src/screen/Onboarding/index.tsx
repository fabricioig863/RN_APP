import React from 'react';
import Button from '@/components/Button';
import * as S from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route);

  const handleNavigate = () => {
    navigation.goBack();
  };
  return (
    <S.Container>
      <S.Content>
        <Button color="error" onPress={handleNavigate}>
          Voltando
        </Button>
      </S.Content>
    </S.Container>
  );
};

export default Onboarding;
