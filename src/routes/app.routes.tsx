import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

// COMPONENTS
import { Home } from "@screens/Home/Home"; 
import { AddMeal } from "@screens/AddMeal/AddMeal";
import { Stats } from "@screens/Stats/Stats";

export function AppRoutes() {
  return (
    <Navigator 
      initialRouteName="Stats" 
      screenOptions={{ headerShown: false }}
    >
      <Screen 
        name="Home" 
        component={Home} 
      />
      <Screen 
        name="AddMeal" 
        component={AddMeal} 
      />
      <Screen 
        name="Stats" 
        component={Stats} 
      />
    </Navigator>
  )
}