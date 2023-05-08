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
import { Home } from "@screens/Home/Home";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}