import React from 'react';

// STYLES
import * as S from "./Highlight.styles";

// TYPES
import { HighlightProps as Props } from './Highlight.types';

// TODO: isLow temporario, alterar depois.

export function Highlight({ title, subtitle, icon, isLow }: Props) {

  return (
    <S.Container isLow={isLow}>
      <S.Content>
        {icon}
      </S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
}