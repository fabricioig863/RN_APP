import React from 'react';
import {RooStackParamList} from '@/router/types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Input from '@/components/Input';
import Separator from '@/components/Separator';

import * as S from './styles';

type homeScreenProp = NativeStackScreenProps<RooStackParamList, 'Login'>;

type Props = {
  navigation: homeScreenProp;
};

const Login = ({navigation}: Props) => {
  return (
    <S.Container>
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
          onPress={() => navigation.navigate('Onboarding')}
          color="primary"
          loading={false}
          mode="contained">
          Login
        </Button>
        <Separator />
      </S.Container>
    </S.Container>
  );
};

export default Login;
