import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import {Header} from './components/Header';
import {Icon} from './components/Icon';
import TextRN from './components/Text';
import useAppearence from './hooks/useAppearence';
import * as S from './styles';

const App = () => {
  const {theme} = useAppearence();
  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <Header title="Bem Vindo!" name="Fabricio" />
        <Button onPress={() => {}} />
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Icon icon="skull" size={150} />
          <Icon icon="hacker" size={150} />
          <Icon icon="money" size={150} activeColor="primary" />
        </View>
        <TextRN typography="h3" color="primary">
          Texto
        </TextRN>
      </S.Container>
    </ThemeProvider>
  );
};

export default App;
