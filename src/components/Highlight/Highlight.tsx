import React from 'react';

// STYLES
import * as S from "./Highlight.styles";

// TYPES
import { HighlightProps as Props } from './Highlight.types';

export function Highlight({ title, subtitle, icon }: Props) {
  return (
    <S.Container>
      <S.Content>
        {icon}
      </S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
}