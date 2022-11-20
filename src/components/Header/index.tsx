import React from 'react';
import * as S from './styles';
import {HeaderProps} from './types';

export function Header({name, title}: HeaderProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{name}</S.SubTitle>
    </S.Container>
  );
}
