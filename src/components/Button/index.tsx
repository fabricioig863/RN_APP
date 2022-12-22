import React from 'react';
import {Button as ButtonRN, useColorScheme} from 'react-native';
import {useTheme} from 'styled-components';
import {ButtonProps} from './types';

const Button = ({onPress}: ButtonProps) => {
  const theme = useTheme();
  return (
    <ButtonRN
      title="change theme"
      color={theme.colors.primary.main}
      onPress={onPress}
    />
  );
};

export default Button;
