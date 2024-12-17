import React from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/productNavigation';
import {productDetailsStyle} from '../productDetails/styles/ProdoductDetailsScreenStyle.js'
import { productReviewItem } from './productReviewItem.tsx';

type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetailsScreen'>;

const ProductDetailsScreen = ({ route }: { route: ProductDetailsScreenRouteProp }) => {
  const { product } = route.params;

  return (
    <ScrollView>
      <View style={productDetailsStyle.container}>
          <Image source={{ uri: product.thumbnail }} style={productDetailsStyle.image} />
          <Text style={productDetailsStyle.title}>{product.title}</Text>
          <Text style={productDetailsStyle.description}>{product.description}</Text>
          <View style = {productDetailsStyle.rowView}>
              <Text style={productDetailsStyle.price}>Price: ${product.price.toFixed(2)}</Text>
              <Text style={productDetailsStyle.reviewRating}>Rating: {product.rating} ⭐</Text>
          </View>
          
          <Text style={[productDetailsStyle.reviewTitle, { marginTop: 10 }]}>
            Reviews:</Text>
          <FlatList
            data={product.reviews}
            renderItem={productReviewItem}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={productDetailsStyle.reviewsList}
            scrollEnabled = {false}
          />
       </View>
    </ScrollView>
    
  );
};
    
export default ProductDetailsScreen;
