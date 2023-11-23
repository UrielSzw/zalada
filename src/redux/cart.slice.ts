import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CartItem = {
  productId: string;
  name: string;
  price: string;
  quantity: number;
  img: string;
  stock: number;
};

export type CartState = {
  cartItems: CartItem[];
};

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart: (state) => {
      state.cartItems = [];
    },
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const indexProduct: number = state.cartItems.findIndex(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      if (indexProduct >= 0) {
        state.cartItems[indexProduct].quantity += action.payload.quantity;
      } else {
        state.cartItems.push({ ...action.payload });
      }
    },
    removeItemFromCart: (state, action: PayloadAction<CartItem>) => {
      const indexProduct: number = state.cartItems.findIndex(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      state.cartItems.splice(indexProduct, 1);
    },
    incrementItemQty: (state, action: PayloadAction<CartItem>) => {
      const indexProduct: number = state.cartItems.findIndex(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      if (indexProduct >= 0) {
        state.cartItems[indexProduct].quantity++;
      }
    },
    decrementItemQty: (state, action: PayloadAction<CartItem>) => {
      const indexProduct: number = state.cartItems.findIndex(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      if (indexProduct >= 0) {
        state.cartItems[indexProduct].quantity--;
      }
    },
    setItemMaxQty: (state, action: PayloadAction<CartItem>) => {
      const indexProduct: number = state.cartItems.findIndex(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      if (indexProduct >= 0) {
        state.cartItems[indexProduct].quantity = action.payload.stock;
      }
    },
  },
});
export const {
  resetCart,
  addItemToCart,
  removeItemFromCart,
  incrementItemQty,
  decrementItemQty,
  setItemMaxQty,
} = cartSlice.actions;

export default cartSlice.reducer;
