import React from 'react'

// TYPES
import { ButtonProps as Props } from './Button.types'

// STYLES
import * as S from './Button.styles'

export function Button({ title, onPress, icon }: Props) {
  return (
    <S.Container onPress={onPress}>
      {icon}
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}