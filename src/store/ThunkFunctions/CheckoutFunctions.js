import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/useInsertData";
import useGetData from "../../hooks/useGetData";

//Create Address

export const createCashOrder = createAsyncThunk(
  "post/order cash",
  ({ id, data }, thunkAPI) => {
    let response = useInsertData(`/api/v1/orders/${id}`, data, thunkAPI);
    return response;
  }
);

export const createVisaOrder = createAsyncThunk(
  "post/order visa",
  ({ id, data }, thunkAPI) => {
    let response = useGetData(
      `/api/v1/orders/checkout-session/${id}`,
      data,
      thunkAPI
    );
    return response;
  }
);
