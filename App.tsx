import { NavigationContainer } from "@react-navigation/native";
import ProductNavigation from "./appDummyProducts/navigation/productNavigation";
import { I18nextProvider } from "react-i18next";
import i18n from "./appDummyProducts/loaclization/i18nSetup";

const App = () => (
  <I18nextProvider i18n={i18n}>
    <NavigationContainer>
      <ProductNavigation />
    </NavigationContainer>
  </I18nextProvider>
)

export default App