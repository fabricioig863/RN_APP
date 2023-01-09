import React from 'react';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Input from '@/components/Input';
import Separator from '@/components/Separator';
import {useNavigation} from '@react-navigation/native';
import * as S from './styles';

import {propsStack} from '@/router/types';

const Onboarding = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <S.Container>
      <S.Content>
        <Icon icon="hacker" size={150} />
      </S.Content>
      <Button
        color="error"
        mode="outlined"
        onPress={() => navigation.popToTop()}>
        popTop
      </Button>
      <Button
        color="primary"
        loading={false}
        mode="contained"
        onPress={() => navigation.push('Login')}>
        Push
      </Button>
      <Separator />
    </S.Container>
  );
};

export default Onboarding;
