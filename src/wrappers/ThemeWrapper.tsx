import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from '../theme';

interface Props {
  children: React.ReactNode;
}

const ThemeWrapper = ({children}: Props): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
