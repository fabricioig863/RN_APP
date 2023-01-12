import React from 'react';
import Button from '@/components/Button';
import * as S from './styles';
import {Text} from 'react-native';
import Separator from '@/components/Separator';

const Onboarding = () => {
  return (
    <S.Container>
      <S.Content>
        <Button>Onboarding</Button>
        <S.ContentText>
          <Text>{'Profile'}</Text>
        </S.ContentText>
        <Button>Update state</Button>
        <Separator height={20} />
        <Button>Voltando</Button>
      </S.Content>
    </S.Container>
  );
};

export default Onboarding;
