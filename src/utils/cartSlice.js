import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  //mutating the state
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // what all action we are performing
    addItem: (state, action) => {
      // initialState,action doing
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // state.items.length = 0; //[]
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
