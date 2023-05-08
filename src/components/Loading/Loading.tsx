import React from 'react';

// STYLES
import * as S from "./Loading.styles";

export function Loading(){
  return(
    <S.Container>
      <S.LoadIndicator size="large" />
    </S.Container>
  )
}