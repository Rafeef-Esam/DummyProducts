import { View, Text } from "react-native";
import { Product } from "../../network/models/product";
import { productDetailsStyle } from "./styles/ProdoductDetailsScreenStyle";

export const productReviewItem = ({ item }: { item: Product['reviews'][0] }) => (
    <View style={productDetailsStyle.reviewContainer}>
      <Text style={productDetailsStyle.reviewTitle}>Review by {item.reviewerName}</Text>
      <Text style={productDetailsStyle.reviewComment}>{item.comment}</Text>
      <Text style={productDetailsStyle.reviewRating}>Rating: {item.rating}⭐</Text>
      <Text style={productDetailsStyle.reviewDate}>Reviewed on: {item.date}</Text>
    </View>
  );