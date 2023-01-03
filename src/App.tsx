import React, {useRef} from 'react';
import {Alert} from 'react-native';
import {ThemeProvider} from 'styled-components';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Input from '@/components/Input';
import Separator from '@/components/Separator';
import useAppearence from './hooks/useAppearence';

import {InputValueRef} from './components/Input/types';
import * as S from './styles';

const App = () => {
  const {theme} = useAppearence();

  const refEmail = useRef<InputValueRef>({value: ''});
  const refPassword = useRef<InputValueRef>({value: ''});

  const handlePress = () => {
    Alert.alert(
      refEmail.current?.value || 'nao tinha',
      refPassword.current?.value || 'nao tinha',
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <S.Content>
          <Icon icon="hacker" size={150} />
        </S.Content>
        <S.ContainerInput>
          <Input
            placeholder="jhondoe@gmail.com"
            ref={refEmail}
            icon="skull"
            label="E-mail"
          />
          <Separator height={10} />
          <Input
            placeholder="Digite sua senha"
            ref={refPassword}
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
    </ThemeProvider>
  );
};

export default App;
