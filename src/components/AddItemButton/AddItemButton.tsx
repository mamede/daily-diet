import React from 'react'

// TYPES
import { ButtonProps as Props } from './AddItemButton.types'

// STYLES
import * as S from './AddItemButton.styles'

export function AddItemButton({ active, isDiet, title, onPress }: Props) {
  return (
    <S.Container 
      active={active} 
      isDiet={isDiet}
      onPress={onPress}
    >
      <S.Status isDiet={isDiet}></S.Status>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
