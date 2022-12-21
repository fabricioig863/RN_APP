import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import {Header} from './components/Header';
import {themeDark} from './constants/styles/themes/dark';
import {themeLight} from './constants/styles/themes/light';
import useAppearence from './hooks/useAppearence';

const App = () => {
  const {theme} = useAppearence();
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={style.container}>
        <Header title="Bem Vindo!" name="Fabricio" />
        <Button onPress={() => {}} />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
