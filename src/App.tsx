import React from 'react';
import {SafeAreaView} from 'react-native';
import {Header} from './components/Header';

const App = () => {
  return (
    <SafeAreaView>
      <Header name="Fabricio" title="Welcome to RN" />
      <Header name="Ignacio" title="Olá," />
    </SafeAreaView>
  );
};

export default App;
