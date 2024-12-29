import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { fetchProducts } from '../../network/api/fetchProducts';
import { Product } from '../../network/models/product';
import { ProductListItem } from './productItem';
import { useNavigation, useTheme } from '@react-navigation/native';
import { ProductsScreenNavigationProp } from '../../navigation/productNavigation';
import { productScreenStyle } from './styles/productScreenStyle';
import { DarkThemeExtended, LightTheme } from '../../utilis/colors';

export const ProductsScreen = () => {
  const navigation = useNavigation<ProductsScreenNavigationProp>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const { dark } = useTheme();
  const colors = dark ? DarkThemeExtended.colors : LightTheme.colors;
  const styles = productScreenStyle(colors);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const navigateToProductDetails = (product: Product) => {
    navigation.navigate('ProductDetailsScreen', { product });
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductListItem item={item} onPress={navigateToProductDetails} colors={colors} />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

export default ProductsScreen;
