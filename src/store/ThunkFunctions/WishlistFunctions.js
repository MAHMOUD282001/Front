import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/useInsertData";


//Create Review

export const createWishlist = createAsyncThunk(
  "post/wishlist",
  (data, thunkAPI) => {
    let response = useInsertData(`/api/v1/wishlist`, data, thunkAPI);
    return response;
  }
);
