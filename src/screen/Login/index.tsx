import React, {useRef} from 'react';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Input from '@/components/Input';
import Separator from '@/components/Separator';

import * as S from './styles';
import {InputValueRef} from '@/components/Input/types';
import {Alert} from 'react-native';

const Login = () => {
  const refEmail = useRef<InputValueRef>({value: ''});
  const refPassword = useRef<InputValueRef>({value: ''});

  const handlePress = () => {
    Alert.alert(
      refEmail.current?.value || 'nao tinha',
      refPassword.current?.value || 'nao tinha',
    );
  };

  return (
    <S.Container>
      <S.Container>
        <S.Content>
          <Icon icon="hacker" size={150} />
        </S.Content>
        <S.ContainerInput>
          <Input
            ref={refEmail}
            placeholder="jhondoe@gmail.com"
            icon="skull"
            label="E-mail"
          />
          <Separator height={10} />
          <Input
            ref={refPassword}
            placeholder="Digite sua senha"
            secureTextEntry
            label="Password"
          />
        </S.ContainerInput>
        <Button
          onPress={handlePress}
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
