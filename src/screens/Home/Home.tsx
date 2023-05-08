import React from 'react'

// ASSETS
import logo from '@assets/Logo.png'

// ICONS
import { ArrowUpRight, Plus } from "phosphor-react-native";

// COMPONENTS
import { Highlight } from '@components/Highlight/Highlight';
import { Button } from '@components/Button/Button';

// STYLES
import * as S from "./Home.styles";
import theme from '@theme/index';
import { Platform } from 'react-native';

export function Home() {

  return (
    <S.Container>
      <S.HomeContainer>
        <S.Logo source={logo}/>
        <S.ProfileContainer>
          <S.Profile source={{ uri: 'https://github.com/mamede.png'}} />
        </S.ProfileContainer>
      </S.HomeContainer>

      <Highlight 
        title="90,86%" 
        subtitle="das refeições dentro da dieta" 
        icon={
          <ArrowUpRight 
            size={20} 
            color={theme.colors.green.dark}
            weight='bold'
            style={{ marginRight: 8, marginTop: 8 }}
          />
        }
      />

      <S.NewMealContianer>
        <S.NewMealTitle>Refeições</S.NewMealTitle>
        <Button 
          title="Nova Refeição"
          onPress={() => console.log('Nova Refeição')}
          icon={
            <Plus 
              size={24}
              color={theme.colors.white}
              weight={Platform.OS === 'ios' ? 'bold' : 'regular'}
              style={{ marginRight: 12 }}
            />
          }
        />
      </S.NewMealContianer>
    </S.Container>
  );
}