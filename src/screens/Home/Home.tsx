import React from 'react'

// ASSETS
import logo from '@assets/Logo.png'

// ICONS
import { ArrowUpRight } from "phosphor-react-native";

// COMPONENTS
import { Highlight } from '@components/Highlight/Highlight';

// STYLES
import * as S from "./Home.styles";
import theme from '@theme/index';

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

      <S.Text>Hello Home page</S.Text>
    </S.Container>
  );
}