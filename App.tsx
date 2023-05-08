import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

// THEME
import theme from "@theme/index";

// FONTS
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

// COMPONENTS
import { Loading } from "@components/Loading/Loading";

// SCREENS
import { MainRoutes } from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <MainRoutes /> : <Loading />}
    </ThemeProvider>
  );
}