import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/useInsertData";
import useDeleteData from "../../hooks/useDeleteData";
import useGetData from "../../hooks/useGetData";

//Get Wishlist
export const getProductWishlist = createAsyncThunk(
  "fetch/wishlist",
  async (thunkAPI) => {
    let response = await useGetData(`/api/v1/wishlist`, undefined, thunkAPI);
    return response;
  }
);

//Create Wishlist

export const addToWishlist = createAsyncThunk(
  "post/wishlist",
  (data, thunkAPI) => {
    let response = useInsertData(`/api/v1/wishlist`, data, thunkAPI);
    return response;
  }
);

//Delete Wishlist

export const deleteFromWishlist = createAsyncThunk(
  "delete/wishlist",
  (id, thunkAPI) => {
    let response = useDeleteData(`/api/v1/wishlist/${id}`, undefined, thunkAPI);
    return response;
  }
);
