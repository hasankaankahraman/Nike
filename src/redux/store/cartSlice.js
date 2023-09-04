import {createSelector, createSlice} from '@reduxjs/toolkit';
import products from '../../data/products';

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartSliceItem: (state, action) => {
      const newProduct = action.payload.product;
      const cartItem = state.items.find(
        item => item.product.id === newProduct.id,
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({product: newProduct, quantity: 1});
      }
    },
    changeQuantity: (state, action) => {
      const {productko, amount} = action.payload;
      const cartItem = state.items.find(item => item.product.id === productko);
      if (cartItem) {
        cartItem.quantity += amount;
      }
      if (cartItem.quantity <= 0) {
        state.items = state.items.filter(item => item !== cartItem);
      }
    },
  },
});

export const selectNumberOfItems = state => state.cart.items.length;

export const selectSubtotal = state =>
  state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0,
  );

const cartSelector = state => state.cart;

export const selectDeliveryPrice = createSelector(
  cartSelector,
  selectSubtotal,
  (cart, subtotal) => (subtotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee),
);

export const selectTotal = createSelector(
  selectSubtotal,
  selectDeliveryPrice,
  (subtotal, delivery) => subtotal + delivery,
);
