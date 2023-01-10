import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import useAppearence from './hooks/useAppearence';
import Router from './router/Navigation';

const App = () => {
  const {theme} = useAppearence();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
