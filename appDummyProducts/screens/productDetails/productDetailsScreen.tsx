import React from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { RouteProp, useTheme } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/productNavigation';
import { productDetailsStyle } from '../productDetails/styles/ProdoductDetailsScreenStyle.ts'
import { useTranslation } from 'react-i18next';
import { languageConstants } from '../../loaclization/languageConsts.js'
import { ProductReviewItem } from './productReviewItem.tsx';
import { DarkThemeExtended, LightTheme } from '../../utilis/colors.ts';

type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetailsScreen'>;

const ProductDetailsScreen = ({ route }: { route: ProductDetailsScreenRouteProp }) => {
  const { product } = route.params;

  const { t } = useTranslation();
  const { dark } = useTheme();
  const colors = dark ? DarkThemeExtended.colors : LightTheme.colors;
  const styles = productDetailsStyle(colors);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.rowView}>
          <Text style={styles.price}>{t(languageConstants.price)}: ${product.price.toFixed(2)}</Text>
          <Text style={styles.reviewRating}>{t(languageConstants.rating)}: {product.rating} ⭐</Text>
        </View>

        <Text style={[styles.reviewTitle, { marginTop: 10 }]}>
          {t(languageConstants.reviews)}:
        </Text>
        <FlatList
          data={product.reviews}
          renderItem={({ item }) => < ProductReviewItem
            item={item}
            colors={colors} />
          }
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.reviewsList}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>

  );
};

export default ProductDetailsScreen;
