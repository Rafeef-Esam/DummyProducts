import { Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../network/models/product";
import { productScreenStyle } from "./styles/productScreenStyle";
import { ThemeColors } from "../../utilis/colors.ts";

interface productItemPros {
  item: Product,
  onPress: (product: Product) => void,
  colors: ThemeColors
}

export const ProductListItem: React.FC<productItemPros> = ({
  item, onPress, colors
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={productScreenStyle(colors).productCard}>
        <Image source={{ uri: item.thumbnail }} style={productScreenStyle(colors).thumbnail} />
        <View style={productScreenStyle(colors).title_price_col}>
          <Text style={productScreenStyle(colors).title}>{item.title}</Text>
          <Text style={productScreenStyle(colors).price}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

