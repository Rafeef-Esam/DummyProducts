import React from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/productNavigation';
import { productDetailsStyle } from '../productDetails/styles/ProdoductDetailsScreenStyle.js'
import { useTranslation } from 'react-i18next';
import {languageConstants} from '../../loaclization/languageConsts.js'
import { productReviewItem } from './productReviewItem.tsx';

type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetailsScreen'>;

const ProductDetailsScreen = ({ route }: { route: ProductDetailsScreenRouteProp }) => {
  const { product } = route.params;

  const {t} = useTranslation();


  return (
    <ScrollView>
      <View style={productDetailsStyle.container}>
        <Image source={{ uri: product.thumbnail }} style={productDetailsStyle.image} />
        <Text style={productDetailsStyle.title}>{product.title}</Text>
        <Text style={productDetailsStyle.description}>{product.description}</Text>
        <View style={productDetailsStyle.rowView}>
          <Text style={productDetailsStyle.price}>{t(languageConstants.price)}: ${product.price.toFixed(2)}</Text>
          <Text style={productDetailsStyle.reviewRating}>{t(languageConstants.rating)}: {product.rating} ⭐</Text>
        </View>

        <Text style={[productDetailsStyle.reviewTitle, { marginTop: 10 }]}>
          {t(languageConstants.reviews)}:
        </Text>
        <FlatList
          data={product.reviews}
          renderItem={productReviewItem}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={productDetailsStyle.reviewsList}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>

  );
};

export default ProductDetailsScreen;
