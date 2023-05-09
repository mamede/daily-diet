import React from 'react'

// STYLES
import * as S from "./Input.styles";

// TYPES
import { InputProps as Props } from './Input.types'

export function Input({ title, ...rest}: Props) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.InputText
        {...rest}
      />
    </S.Container>
  )
}