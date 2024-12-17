import { Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../network/models/product";
import { productScreenStyle } from "./styles/productScreenStyle";
 
export const productListItem = ({ item, onPress }: { item: Product, onPress: (product: Product) => void }) => (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={productScreenStyle.productCard}>
        <Image source={{ uri: item.thumbnail }} style={productScreenStyle.thumbnail} />
        <View>
             <Text style={productScreenStyle.title}>{item.title}</Text>
             <Text style={productScreenStyle.price}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );