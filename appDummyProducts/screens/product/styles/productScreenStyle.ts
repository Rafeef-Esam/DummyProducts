import { StyleSheet } from 'react-native';
import {ThemeColors} from '../../../utilis/colors.ts'

export const productScreenStyle = (colors: ThemeColors) => StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: colors.background
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: colors.card,
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 2,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderColor: colors.blue
  },
  thumbnail: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 8,
  },
  title: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title_price_col :{
    width: '100%',
    paddingEnd: 70
  },
  price: {
    fontSize: 14,
    color: colors.grey,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
