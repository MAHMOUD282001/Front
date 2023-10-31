import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import {
  changeOrderToDeliver,
  changeOrderToPay,
  getAllOrders,
  getSpecificOrder,
} from "./ThunkFunctions/OrdersFunctions";

const initialState = {
  // Get All Orders
  allOrders: [],
  allOrdersStatus: STATUS.IDLE,
  allOrdersError: null,

  // Get Order
  specificOrder: {},
  specificOrderStatus: STATUS.IDLE,
  specificOrderError: null,

  // Change Order To Pay
  changedOrderPay: {},
  changedOrderPayStatus: STATUS.IDLE,
  changedOrderPayError: null,

  // Change Order To Deliver
  changedOrderDeliver: {},
  changedOrderDeliverStatus: STATUS.IDLE,
  changedOrderDeliverError: null,
  
};

const OrdersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    resetOrders: (state) => {
      state.allOrdersStatus = STATUS.IDLE;
      state.specificOrderStatus = STATUS.IDLE;
      state.changedOrderPayStatus = STATUS.IDLE;
      state.changedOrderDeliverStatus = STATUS.IDLE;
    },
  },
  extraReducers: (builder) => {
    // Get All Orders
    builder.addCase(getAllOrders.pending, (state) => {
      state.allOrdersStatus = STATUS.LOADING;
      state.allOrders = [];
      state.allOrdersError = null;
    }),
      builder.addCase(getAllOrders.fulfilled, (state, action) => {
        state.allOrdersStatus = STATUS.SUCCEEDED;
        state.allOrders = action.payload;
        state.allOrdersError = null;
      }),
      builder.addCase(getAllOrders.rejected, (state, action) => {
        state.allOrdersStatus = STATUS.FAILED;
        state.allOrders = [];
        state.allOrdersError = action.payload;
      });

    //Get Order

    builder.addCase(getSpecificOrder.pending, (state) => {
      state.specificOrderStatus = STATUS.LOADING;
      state.specificOrder = [];
      state.specificOrderError = null;
    }),
      builder.addCase(getSpecificOrder.fulfilled, (state, action) => {
        state.specificOrderStatus = STATUS.SUCCEEDED;
        state.specificOrder = action.payload;
        state.specificOrderError = null;
      }),
      builder.addCase(getSpecificOrder.rejected, (state, action) => {
        state.specificOrderStatus = STATUS.FAILED;
        state.specificOrder = [];
        state.specificOrderError = action.payload;
      });

    // Change Order To Pay

    builder.addCase(changeOrderToPay.pending, (state) => {
      state.changedOrderPayStatus = STATUS.LOADING;
      state.changedOrderPay = {};
      state.changedOrderPayError = null;
    }),
      builder.addCase(changeOrderToPay.fulfilled, (state, action) => {
        state.changedOrderPayStatus = STATUS.SUCCEEDED;
        state.changedOrderPay = action.payload;
        state.changedOrderPayError = null;
      }),
      builder.addCase(changeOrderToPay.rejected, (state, action) => {
        state.changedOrderPayStatus = STATUS.FAILED;
        state.changedOrderPay = {};
        state.changedOrderPayError = action.payload;
      });

    // Change Order To Deliver

    builder.addCase(changeOrderToDeliver.pending, (state) => {
      state.changedOrderDeliverStatus = STATUS.LOADING;
      state.changedOrderDeliver = {};
      state.changedOrderDeliverError = null;
    }),
      builder.addCase(changeOrderToDeliver.fulfilled, (state, action) => {
        state.changedOrderDeliverStatus = STATUS.SUCCEEDED;
        state.changedOrderDeliver = action.payload;
        state.changedOrderDeliverError = null;
      }),
      builder.addCase(changeOrderToDeliver.rejected, (state, action) => {
        state.changedOrderDeliverStatus = STATUS.FAILED;
        state.changedOrderDeliver = {};
        state.changedOrderDeliverError = action.payload;
      });
  },
});

//All Orders
export const allOrders = (state) => state.orders.allOrders;
export const allOrdersStatus = (state) => state.orders.allOrdersStatus;
export const allOrdersError = (state) => state.orders.allOrdersError;

//Get Order
export const specificOrder = (state) => state.orders.specificOrder;
export const specificOrderStatus = (state) => state.orders.specificOrderStatus;
export const specificOrderError = (state) => state.orders.specificOrderError;

//Change Order To Pay
export const changedOrderPay = (state) => state.orders.changedOrderPay;
export const changedOrderPayStatus = (state) =>
  state.orders.changedOrderPayStatus;
export const changedOrderPayError = (state) =>
  state.orders.changedOrderPayError;

//Change Order To Deliver
export const changedOrderDeliver = (state) => state.orders.changedOrderDeliver;
export const changedOrderDeliverStatus = (state) =>
  state.orders.changedOrderDeliverStatus;
export const changedOrderDeliverError = (state) =>
  state.orders.changedOrderDeliverError;

export const { resetOrders } = OrdersSlice.actions;

export default OrdersSlice.reducer;
