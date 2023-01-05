import React from 'react';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Input from '@/components/Input';
import Separator from '@/components/Separator';
import {useNavigation} from '@react-navigation/native';
import * as S from './styles';

import {propsStack} from '@/router/types';

const Login = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <S.Container>
      <S.Content>
        <Icon icon="hacker" size={150} />
      </S.Content>
      <S.ContainerInput>
        <Input placeholder="jhondoe@gmail.com" icon="skull" label="E-mail" />
        <Separator height={10} />
        <Input
          placeholder="Digite sua senha"
          secureTextEntry
          label="Password"
        />
      </S.ContainerInput>
      <Button
        color="primary"
        loading={false}
        mode="contained"
        onPress={() => navigation.navigate('Onboarding')}>
        Login
      </Button>
      <Separator />
    </S.Container>
  );
};

export default Login;
