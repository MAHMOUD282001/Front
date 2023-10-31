import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import {
  createCashOrder,
  createVisaOrder,
} from "./ThunkFunctions/CheckoutFunctions";

const initialState = {
  // Cash Order
  cashedOrder: {},
  cashedOrderStatus: STATUS.IDLE,
  cashedOrderError: null,

  // Visa Order
  visaOrder: {},
  visaOrderStatus: STATUS.IDLE,
  visaOrderError: null,
};

const CheckoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    resetCheckout: (state) => {
      state.cashedOrderStatus = STATUS.IDLE;
      state.visaOrderStatus = STATUS.IDLE;
    },
  },
  extraReducers: (builder) => {
    //Create Cash Order
    builder.addCase(createCashOrder.pending, (state) => {
      state.cashedOrderStatus = STATUS.LOADING;
      state.cashedOrder = {};
      state.cashedOrderError = null;
    }),
      builder.addCase(createCashOrder.fulfilled, (state, action) => {
        state.cashedOrderStatus = STATUS.SUCCEEDED;
        state.cashedOrder = action.payload;
        state.cashedOrderError = null;
      }),
      builder.addCase(createCashOrder.rejected, (state, action) => {
        state.cashedOrderStatus = STATUS.FAILED;
        state.cashedOrder = {};
        state.cashedOrderError = action.payload;
      });

    //Create Visa Order
    builder.addCase(createVisaOrder.pending, (state) => {
      state.visaOrderStatus = STATUS.LOADING;
      state.visaOrder = {};
      state.visaOrderError = null;
    }),
      builder.addCase(createVisaOrder.fulfilled, (state, action) => {
        state.visaOrderStatus = STATUS.SUCCEEDED;
        state.visaOrder = action.payload;
        state.visaOrderError = null;
      }),
      builder.addCase(createVisaOrder.rejected, (state, action) => {
        state.visaOrderStatus = STATUS.FAILED;
        state.visaOrder = {};
        state.visaOrderError = action.payload;
      });
  },
});

//Create Cash Order
export const cashedOrder = (state) => state.checkout.cashedOrder;
export const cashedOrderStatus = (state) => state.checkout.cashedOrderStatus;
export const cashedOrderError = (state) => state.checkout.cashedOrderError;

//Create Visa Order
export const visaOrder = (state) => state.checkout.visaOrder;
export const visaOrderStatus = (state) => state.checkout.visaOrderStatus;
export const visaOrderError = (state) => state.checkout.visaOrderError;

export const { resetCheckout } = CheckoutSlice.actions;

export default CheckoutSlice.reducer;
