import React from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

// ICONS
import { ArrowLeft } from "phosphor-react-native";


// STYLES

import theme from '@theme/index';
import * as S from "./Stats.styles";


export function Stats() {
  const navigation = useNavigation()
 
  const isDiet = true
  return (
    <S.Container>
      
      <S.HeaderStaticContainer isDiet={isDiet}>
        <S.Button onPress={()=>{navigation.goBack()}}>
          <ArrowLeft 
            size={24}
            color={isDiet ? theme.colors.green.dark : theme.colors.red.dark}
            weight={Platform.OS === 'ios' ? 'bold' : 'regular'}
            style={{ marginRight: 12 }}
          />
        </S.Button> 
        <S.Title>90%</S.Title>
        <S.HeaderStaticSubTitle>das refeições dentro da dieta</S.HeaderStaticSubTitle>
      </S.HeaderStaticContainer>
    </S.Container>
  );
}