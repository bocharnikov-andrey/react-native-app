import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Navigation from "./src/components/Navigation";
import ColorSchemeProvider from "./src/contexts/ThemeContext";
import SafeAreaContainer from "./src/components/layout/SafeAreaContainer";

export default function App() {
  const [loaded, error] = useFonts({
    DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
    DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    const prepareFonts = async () => {
      await SplashScreen.preventAutoHideAsync();
    };

    prepareFonts();
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ColorSchemeProvider>
      <SafeAreaContainer>
        <Navigation />
      </SafeAreaContainer>
    </ColorSchemeProvider>
  );
}
