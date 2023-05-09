import React, { useCallback, useState } from "react";
import { useTheme } from "styled-components/native";
import { Platform } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

// ICONS
import { ArrowLeft } from "phosphor-react-native";

// COMPONENTS
import { StatisticCard } from "@components/StatisticCard/StatisticCard";

// STORAGE
// import StorageMeals from '@storage/Meals'

// STYLES
import theme from '@theme/index';
import * as S from "./Stats.styles";

export function Stats() {
  const { colors } = useTheme();
  const navigation = useNavigation()
 
  const isDiet = true
  return (
    <S.Container isDiet={isDiet}>
      <S.HeaderStaticContainer isDiet={isDiet}>
        <S.ButtonContainer>
          <S.Button onPress={()=>{navigation.goBack()}}>
            <ArrowLeft 
              size={24}
              color={isDiet ? theme.colors.green.dark : theme.colors.red.dark}
              weight={Platform.OS === 'ios' ? 'bold' : 'regular'}
              style={{ marginRight: 12 }}
            />
          </S.Button> 
        </S.ButtonContainer>
        <S.HeaderStaticContent>
          <S.HeaderStaticTitle>90%</S.HeaderStaticTitle>
          <S.HeaderStaticSubTitle>das refeições dentro da dieta</S.HeaderStaticSubTitle>
        </S.HeaderStaticContent>
      </S.HeaderStaticContainer>

      <S.Content>
        <S.Title>Estatísticas gerais</S.Title>
        <StatisticCard
          title='22'
          subtitle="melhor sequência de pratos dentro da dieta"
          color={colors.gray[600]}
        />
        <StatisticCard
          title='109'
          subtitle="refeições registradas"
          color={colors.gray[600]}
        />
        <S.ContainerHighAndLowLights>
          <StatisticCard
            size={48}
            title='99'
            subtitle="refeições dentro da dieta"
            color={colors.green.light}
          />
          <StatisticCard
            size={48}
            title='10'
            subtitle="refeições fora da dieta"
            color={colors.red.light}
          />
        </S.ContainerHighAndLowLights>
      </S.Content>
    </S.Container>
  );
}