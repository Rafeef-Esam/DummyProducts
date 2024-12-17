import { StyleSheet } from 'react-native';

export const productDetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00aaff',
    marginBottom: 16,
  },
  reviewsList: {
    paddingVertical: 8,
  },
  reviewContainer: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  reviewComment: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  reviewRating: {
    fontSize: 14,
    color: '#ffaa00',
    marginBottom: 4,
  },
  reviewDate: {
    fontSize: 12,
    color: '#999',
  },
  rowView: {
    flexDirection: "row",
    justifyContent:"space-between"
  }
});