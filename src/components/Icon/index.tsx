import React from 'react';
import * as S from './styles';
import {IconProps} from './types';
import Icons from '../../constants/icons';
import {useTheme} from 'styled-components';

export const Icon = ({
  icon,
  size = 20,
  activeColor,
  style,
}: Omit<IconProps, 'source'>) => {
  const {colors} = useTheme();
  if (activeColor) {
    return (
      <S.Container
        size={size}
        source={Icons[icon]}
        style={[{tintColor: colors[activeColor].main}, style]}
      />
    );
  }
  return <S.Container size={size} source={Icons[icon]} style={style} />;
};
