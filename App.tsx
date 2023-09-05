import Navigation from "./src/components/Navigation";
import TopBar from "./src/components/TopBar";
import SafeAreaContainer from "./src/components/SafeAreaContainer";
import ColorSchemeProvider from "./src/contexts/ThemeContext";

export default function App() {
  return (
    <ColorSchemeProvider>
      <SafeAreaContainer>
        <TopBar />
        <Navigation />
      </SafeAreaContainer>
    </ColorSchemeProvider>
  );
}
