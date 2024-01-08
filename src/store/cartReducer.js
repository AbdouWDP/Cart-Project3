import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const cartReducer = createSlice({
  name: "addToCart",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.find(
        (product) => product.id == action.payload.id
      );
      if (findProduct) {
        findProduct.quantity++;
      } else {
        let productClone = { ...action.payload, quantity: 1 };
        state.unshift(productClone);
        Swal.fire("", "Product added to cart", "success");
      }
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id != action.payload.id);
    },
    clearAllProducts: (state, action) => {
      return (state = []);
    },
  },
});

export const { addProduct, deleteProduct, clearAllProducts } =
  cartReducer.actions;

export default cartReducer.reducer;
