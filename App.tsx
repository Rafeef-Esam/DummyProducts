import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import ProductNavigation from "./appDummyProducts/navigation/productNavigation";
import { I18nextProvider } from "react-i18next";
import i18n from "./appDummyProducts/loaclization/i18nSetup";
import { useColorScheme } from "react-native";
import { DarkThemeExtended, LightTheme } from "./appDummyProducts/utilis/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      setLoading(false);
    };

    loadTheme();
  }, []);

  if (loading) {
    return null;
  }

  const MyTheme = theme === "dark" ? DarkThemeExtended : LightTheme;

  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer theme={MyTheme}>
        <ProductNavigation />
      </NavigationContainer>
    </I18nextProvider>
  );
};

export default App;