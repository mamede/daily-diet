import React from 'react';

// LIBS
import { NavigationContainer } from "@react-navigation/native";

// ROUTES
import { AppRoutes } from "./app.routes";

export function MainRoutes() {
  return(
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}