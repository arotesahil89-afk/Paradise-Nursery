import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of items in the cart
  },
  reducers: {
    addItem: (state, action) => {
      const { id, name, image, price } = action.payload;
      const existingItem = state.items.find(item => item.name === name || item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload && item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name || item.id === id);
      if (itemToUpdate && quantity >= 0) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
