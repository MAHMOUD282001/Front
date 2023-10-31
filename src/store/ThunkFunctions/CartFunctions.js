import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/useInsertData";
import useGetData from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";

//Get Cart Items
export const getCartItems = createAsyncThunk("fetch/cart", async (thunkAPI) => {
  let response = await useGetData(`/api/v1/cart`, undefined, thunkAPI);
  return response;
});

//Add To Cart
export const AddToCart = createAsyncThunk("post/cart", (data, thunkAPI) => {
  let response = useInsertData(`/api/v1/cart`, data, thunkAPI);
  return response;
});

//Clear Cart
export const clearCart = createAsyncThunk("clear/cart", (thunkAPI) => {
  let response = useDeleteData(`/api/v1/cart`, undefined, thunkAPI);
  return response;
});

//Delete Cart Item
export const deleteCartItem = createAsyncThunk(
  "delete/cartItem",
  (id, thunkAPI) => {
    let response = useDeleteData(`/api/v1/cart/${id}`, undefined, thunkAPI);
    return response;
  }
);

//Update Cart Item Cart
export const updateCartItemCount = createAsyncThunk(
  "update/cartItem",
  ({ id, data }, thunkAPI) => {
    let response = useUpdateData(`/api/v1/cart/${id}`, data, thunkAPI);
    return response;
  }
);

//Update Cart Item Cart
export const applyCoupon = createAsyncThunk(
  "update/applyCoupon",
  (data, thunkAPI) => {
    let response = useUpdateData(`/api/v1/cart/applyCoupon`, data, thunkAPI);
    return response;
  }
);
