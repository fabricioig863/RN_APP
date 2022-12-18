import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import {Header} from './components/Header';

const themeDark = {
  colors: {
    primary: 'black',
    onPrimary: 'white',
    secondary: 'red',
    onSecondary: 'black',
  },
};

const themeLight = {
  colors: {
    primary: 'white',
    onPrimary: 'black',
    secondary: 'blue',
    onSecondary: 'black',
  },
};

const App = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
      <SafeAreaView style={style.container}>
        <Header title="Bem Vindo!" name="Fabricio" />
        <Button
          onPress={() =>
            setTheme(old => {
              if (old === 'light') {
                return 'dark';
              } else {
                return 'light';
              }
            })
          }
        />
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
