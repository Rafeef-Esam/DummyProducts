import { Product } from "../models/product";

export const fetchProducts = async (): Promise<Product[]>  => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    console.log('Rafeef API Response:', response);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Rafeef Error fetching products:', error);
    throw error;
  }
};
