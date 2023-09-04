import {createSlice} from '@reduxjs/toolkit';
import products from '../../data/products';

const initialState = {
  //   products: [], 1.
  products: products, // 2.
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productId = action.payload;
      state.selectedProduct = state.products.find(p => p.id === productId);
    },
  },
});
