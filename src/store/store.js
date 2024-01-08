import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./reducer";
import cartReducer from "./cartReducer";

export const myStore = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: cartReducer,
  },
});
