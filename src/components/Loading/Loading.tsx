import React from 'react';

import * as S from "./Loading.styles";

export function Loading(){
  return(
    <S.Container>
      <S.LoadIndicator size="large" />
    </S.Container>
  )
}