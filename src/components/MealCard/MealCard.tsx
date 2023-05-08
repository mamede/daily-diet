import React from 'react'

// TYPES
import { MealCardProps as Props } from './MealCard.types'

// STYLES
import * as S from "./MealCard.styles";

export function MealCard({ hour, meal, isDiet }: Props) {

  return (
    <S.Container>
      <S.CardHeader>
        <S.Subtitle>{hour}</S.Subtitle>
        <S.Separator />
        <S.Title>{meal}</S.Title>
      </S.CardHeader>
      <S.Status isDiet={isDiet} />
    </S.Container>
  );
}