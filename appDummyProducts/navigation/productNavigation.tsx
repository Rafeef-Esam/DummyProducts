import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteProp, useTheme } from '@react-navigation/native';
import ProductScreen from '../screens/product/productScreen';
import ProductDetailsScreen from '../screens/productDetails/productDetailsScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Product } from '../network/models/product';
import SettingScreen from '../screens/setting/settingScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';
import {languageConstants} from '../loaclization/languageConsts.js'
import { DarkThemeExtended, LightTheme } from '../utilis/colors.ts';


export type RootStackParamList = {
  ProductsScreen: undefined;
  ProductDetailsScreen: { product: Product };
  SettingScreen: undefined;
};

export type ProductsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductsScreen'
>;

export type ProductDetailsRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetailsScreen'
>;

const Stack = createStackNavigator<RootStackParamList>();

const ProductNavigation = () => {

    const { dark } = useTheme();
    const colors = dark ? DarkThemeExtended.colors : LightTheme.colors;
  
  
  const {t} = useTranslation();
  
  return (
    <Stack.Navigator initialRouteName="ProductsScreen">
      <Stack.Screen name="ProductsScreen"
        component={ProductScreen}
        options={({ navigation }) => ({
          title: t(languageConstants.products),
          headerRight: () => (
            <Icon
              name="settings"
              size={30}
              style={{ marginHorizontal: 20 }}
              color={colors.black}
              onPress={() => navigation.navigate('SettingScreen')}
            />
          ),
        })}
      />

      {/* product details stack */}
      <Stack.Screen name="ProductDetailsScreen"
       component={ProductDetailsScreen} 
       options={{
        title: t(languageConstants.product_details)
       }}/>

      {/* setting screen stack  */}
      <Stack.Screen name="SettingScreen"
       component={SettingScreen} 
       options={{
        title: t(languageConstants.app_setting)
       }}/>
    </Stack.Navigator>
  );
};

export default ProductNavigation;