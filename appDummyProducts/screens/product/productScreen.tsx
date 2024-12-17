import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import { fetchProducts } from '../../network/api/fetchProducts.tsx';
import { Product } from '../../network/models/product.js';
import { productListItem } from './productItem.tsx';
import { useNavigation } from '@react-navigation/native';
import { ProductsScreenNavigationProp } from '../../navigation/productNavigation.tsx';
import { productScreenStyle } from './styles/productScreenStyle.js';

export const ProductsScreen = () => {
  const navigation = useNavigation<ProductsScreenNavigationProp>();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <View style={productScreenStyle.loader}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Loading...</Text>
      </View>
    );
  }

  // navigation
   const navigateToProductDetails = (product: Product) => {
    navigation.navigate('ProductDetailsScreen', { product });
  };
  
  

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        productListItem({ item, onPress: navigateToProductDetails })
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={productScreenStyle.list}
    />
  );
};

export default ProductsScreen;
