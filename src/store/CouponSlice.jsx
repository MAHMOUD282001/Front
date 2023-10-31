import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import {
  createCoupon,
  deleteCoupon,
  getCoupons,
  getCouponsPage,
  updateCoupon,
} from "./ThunkFunctions/CouponFunctions";

const initialState = {
  //All Coupons
  allCoupons: [],
  allCouponsStatus: STATUS.IDLE,
  allCouponsError: null,

  //Create Coupon
  createdCoupon: {},
  createdCouponStatus: STATUS.IDLE,
  createdCouponError: null,

  //Delete Coupon
  deletedCoupon: {},
  deletedCouponStatus: STATUS.IDLE,
  deletedCouponError: null,

  //Delete Coupon
  updatedCoupon: {},
  updatedCouponStatus: STATUS.IDLE,
  updatedCouponError: null,
};

const CouponSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: {
    reset: (state) => {
      state.createdCouponStatus = STATUS.IDLE;
      state.createdCouponError = null;
      state.allCouponsStatus = STATUS.IDLE;
      state.allCouponsError = null;
      state.updatedCouponStatus = STATUS.IDLE;
      state.updatedCouponError = null;
      state.updatedCouponStatus = STATUS.IDLE;
      state.updatedCouponError = null;
    },
  },

  extraReducers: (builder) => {
    //All Coupons
    builder.addCase(getCoupons.pending || getCouponsPage.pending, (state) => {
      state.allCouponsStatus = STATUS.LOADING;
      state.allCoupons = [];
      state.allCouponsError = null;
    }),
      builder.addCase(
        getCoupons.fulfilled || getCouponsPage.fulfilled,
        (state, action) => {
          state.allCouponsStatus = STATUS.SUCCEEDED;
          state.allCoupons = action.payload;
          state.allCouponsError = null;
        }
      ),
      builder.addCase(
        getCoupons.rejected || getCouponsPage.rejected,
        (state, action) => {
          state.allCouponsStatus = STATUS.FAILED;
          state.allCoupons = [];
          state.allCouponsError = action.payload;
        }
      );

    //Create Coupon
    builder.addCase(createCoupon.pending, (state) => {
      state.createdCouponStatus = STATUS.LOADING;
      state.createdCoupon = {};
      state.createdCouponError = null;
    }),
      builder.addCase(createCoupon.fulfilled, (state, action) => {
        state.createdCouponStatus = STATUS.SUCCEEDED;
        state.createdCoupon = action.payload;
        state.createdCouponError = null;
      }),
      builder.addCase(createCoupon.rejected, (state, action) => {
        state.createdCouponStatus = STATUS.FAILED;
        state.createdCoupon = {};
        state.createdCouponError = action.payload;
      });

    //Create Coupon
    builder.addCase(deleteCoupon.pending, (state) => {
      state.deletedCouponStatus = STATUS.LOADING;
      state.deletedCoupon = {};
      state.deletedCouponError = null;
    }),
      builder.addCase(deleteCoupon.fulfilled, (state, action) => {
        state.deletedCouponStatus = STATUS.SUCCEEDED;
        state.deletedCoupon = action.payload;
        state.deletedCouponError = null;
      }),
      builder.addCase(deleteCoupon.rejected, (state, action) => {
        state.deletedCouponStatus = STATUS.FAILED;
        state.deletedCoupon = {};
        state.deletedCouponError = action.payload;
      });

    //Update Coupon
    builder.addCase(updateCoupon.pending, (state) => {
      state.updatedCouponStatus = STATUS.LOADING;
      state.updatedCoupon = {};
      state.updatedCouponError = null;
    }),
      builder.addCase(updateCoupon.fulfilled, (state, action) => {
        state.updatedCouponStatus = STATUS.SUCCEEDED;
        state.updatedCoupon = action.payload;
        state.updatedCouponError = null;
      }),
      builder.addCase(updateCoupon.rejected, (state, action) => {
        state.updatedCouponStatus = STATUS.FAILED;
        state.updatedCoupon = {};
        state.updatedCouponError = action.payload;
      });
  },
});

//All Coupons
export const allCoupons = (state) => state.coupons.allCoupons;
export const allCouponsStatus = (state) => state.coupons.allCouponsStatus;
export const allCouponsError = (state) => state.coupons.allCouponsError;

//Create Coupon
export const createdCoupon = (state) => state.coupons.createdCoupon;
export const createdCouponStatus = (state) => state.coupons.createdCouponStatus;
export const createdCouponError = (state) => state.coupons.createdCouponError;

//Delete Coupon
export const deletedCoupon = (state) => state.coupons.deletedCoupon;
export const deletedCouponStatus = (state) => state.coupons.deletedCouponStatus;
export const deletedCouponError = (state) => state.coupons.deletedCouponError;

//Delete Coupon
export const updatedCoupon = (state) => state.coupons.updatedCoupon;
export const updatedCouponStatus = (state) => state.coupons.updatedCouponStatus;
export const updatedCouponError = (state) => state.coupons.updatedCouponError;

export const { reset } = CouponSlice.actions;

export default CouponSlice.reducer;
