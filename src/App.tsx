import React from 'react';
import {SafeAreaView} from 'react-native';
import {Home} from './screen/Home';
import {ThemeWrapper} from './wrappers';

const App = () => {
  return (
    <ThemeWrapper>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </ThemeWrapper>
  );
};

export default App;
