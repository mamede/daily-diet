import React from 'react'
import { Platform, SectionList } from 'react-native';

// ASSETS
import logo from '@assets/Logo.png'

// ICONS
import { ArrowUpRight, Plus } from "phosphor-react-native";

// COMPONENTS
import { Highlight } from '@components/Highlight/Highlight';
import { Button } from '@components/Button/Button';
import { MealCard } from '@components/MealCard/MealCard';

// STYLES
import * as S from "./Home.styles";
import theme from '@theme/index';
import { VirtualizedScrollView } from '@components/VirtualizedListComponent/VirtualizedListComponent';

export function Home() {

  const meals = [
    {
      title: '12.08.22',
      data: [
        {
          hour: '20:00',
          meal: 'X-tudo',
        },
        {
          hour: '16:00',
          meal: 'Whey protein com leite',
        },
        {
          hour: '12:30',
          meal: 'salada cesar com frango',
        },
        {
          hour: '09:30',
          meal: 'Vitamina de banana',
        }
      ]
    },
    {
      title: '11.08.22',
      data: [
        {
          hour: '20:00',
          meal: 'X-tudo',
        },
        {
          hour: '16:00',
          meal: 'Whey protein com leite',
        },
        {
          hour: '12:30',
          meal: 'salada cesar com frango',
        },
        {
          hour: '09:30',
          meal: 'Vitamina de banana',
        }
      ]
    },
  ]

  // TODO: isLow temporario, alterar depois.
  const isLow = true;

  return (
    <S.Container>
      <VirtualizedScrollView>
        <S.HomeContainer>
          <S.Logo source={logo}/>
          <S.ProfileContainer>
            <S.Profile source={{ uri: 'https://github.com/mamede.png'}} />
          </S.ProfileContainer>
        </S.HomeContainer>

        <Highlight 
          title={isLow ? "30,21%"  : "90,86%" }
          subtitle="das refeições dentro da dieta" 
          icon={
            <ArrowUpRight 
              size={20} 
              color={isLow ? theme.colors.red.dark : theme.colors.green.dark}
              weight='bold'
              style={{ marginRight: 8, marginTop: 8 }}
            />
          }
          isLow={isLow}
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

        <S.MealListContainer>
        <SectionList
          sections={meals}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item, index }) => (
            <MealCard 
              key={index}
              hour={item.hour}
              meal={item.meal}
              isDiet={index % 2 === 0}
            />
          )}
          renderSectionHeader={({ section: {title} }) => (
            <S.MealListTitle>{title}</S.MealListTitle>
          )}
        />
        </S.MealListContainer>
      </VirtualizedScrollView>
    </S.Container>
  );
}