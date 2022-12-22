import React from 'react';
import {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import {Header} from './components/Header';
import useAppearence from './hooks/useAppearence';
import * as S from './styles';

const App = () => {
  const {theme} = useAppearence();
  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <Header title="Bem Vindo!" name="Fabricio" />
        <Button onPress={() => {}} />
      </S.Container>
    </ThemeProvider>
  );
};

export default App;
