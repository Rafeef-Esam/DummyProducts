import { View, Text } from "react-native";
import { Product } from "../../network/models/product";
import { productDetailsStyle } from "./styles/ProdoductDetailsScreenStyle";
import { ThemeColors } from "../../utilis/colors";
import { useTranslation } from "react-i18next";
import { languageConstants } from "../../loaclization/languageConsts";

interface productDetailsItemPros{
    item: Product['reviews'][0],
    colors: ThemeColors
}

export const ProductReviewItem : React.FC<productDetailsItemPros> = ({
  item, colors
}) => {
   
  const { t } = useTranslation();
  
  return(
    <View style={productDetailsStyle(colors).reviewContainer}>
    <Text style={productDetailsStyle(colors).reviewTitle}>{t(languageConstants.review_by)} {item.reviewerName}</Text>
    <Text style={productDetailsStyle(colors).reviewComment}>{item.comment}</Text>
    <Text style={productDetailsStyle(colors).reviewRating}>{t(languageConstants.rating)} : {item.rating}⭐</Text>
    <Text style={productDetailsStyle(colors).reviewDate}>{t(languageConstants.reviewed_on)}: {item.date}</Text>
  </View>
  )
}


  