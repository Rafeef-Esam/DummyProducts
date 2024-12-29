import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../utilis/colors';

export const productDetailsStyle  = (colors: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: colors.darkGray,
    marginBottom: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.blue,
    marginBottom: 16,
  },
  reviewsList: {
    paddingVertical: 8,
  },
  reviewContainer: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.lightGray,
    borderWidth: 1,
    borderColor: colors.lightOrange,
  },
  reviewTitle: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  reviewComment: {
    fontSize: 16,
    color: colors.darkGray,
    fontWeight: 'medium',
    marginBottom: 8,
  },
  reviewRating: {
    fontSize: 16,
    color: colors.orange,
    marginBottom: 4,
  },
  reviewDate: {
    fontSize: 14,
    color: colors.darkGrayText,
  },
  rowView: {
    flexDirection: "row",
    justifyContent:"space-between"
  }
});