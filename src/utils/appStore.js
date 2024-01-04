import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //here all the data will be stored
  reducer: {
    // this 5th line reduce is the main reducer of whole cart which consists of small small slices reducers inside it

    cart: cartReducer, //this is one of the small small reducers of every slice
  },
});

export default appStore;
