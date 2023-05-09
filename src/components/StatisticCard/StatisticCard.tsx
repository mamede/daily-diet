import React from 'react';

// STYLES
import * as S from "./StatisticCard.styles";

// TYPES
import { StatisticCardProps as Props } from './StatisticCard.types';


export function StatisticCard({ title, subtitle, color, size }: Props) {

  return (
    <S.Container color={color} size={size}>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
}