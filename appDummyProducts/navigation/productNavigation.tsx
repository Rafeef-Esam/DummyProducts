import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import ProductScreen from '../screens/product/productScreen';
import ProductDetailsScreen from '../screens/productDetails/productDetailsScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Product } from '../network/models/product';

export type RootStackParamList = {
  ProductsScreen: undefined;
  ProductDetailsScreen: { product: Product };
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
  return (
    <Stack.Navigator initialRouteName="ProductsScreen">
      <Stack.Screen name="ProductsScreen" component={ProductScreen} />
      <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export default ProductNavigation;

