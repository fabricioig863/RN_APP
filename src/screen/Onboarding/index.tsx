import React from 'react';
import Button from '@/components/Button';
import * as S from './styles';

const Onboarding = ({navigation}) => {
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
