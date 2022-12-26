import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Button} from './components/Button';
import {Icon} from './components/Icon';
import useAppearence from './hooks/useAppearence';
import * as S from './styles';

const App = () => {
  const {theme} = useAppearence();
  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          <Icon icon="skull" size={150} />
          <Icon icon="hacker" size={150} />
        </View>
        <Button color="primary" loading mode="contained">
          Change icons
        </Button>
      </S.Container>
    </ThemeProvider>
  );
};

export default App;
