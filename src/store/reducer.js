import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "getAllProducts/fetchProducts",
  async () => {
    let req = await fetch("https://fakestoreapi.com/products");
    let res = await req.json();
    return res;
  }
);

const productsReducer = createSlice({
  name: "getAllProducts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = productsReducer.actions;

export default productsReducer.reducer;
