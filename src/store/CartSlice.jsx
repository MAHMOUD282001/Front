import { createSlice } from "@reduxjs/toolkit";
import {
  AddToCart,
  applyCoupon,
  clearCart,
  deleteCartItem,
  getCartItems,
  updateCartItemCount,
} from "./ThunkFunctions/CartFunctions";
import { STATUS } from "../utils/status";

const initialState = {
  //Add To Cart
  addedItem: {},
  addedItemStatus: STATUS.IDLE,
  addedItemError: null,

  //Get Cart
  cartItems: [],
  cartItemsStatus: STATUS.IDLE,
  cartItemsError: null,

  //Clear Cart
  clearedCart: [],
  clearedCartStatus: STATUS.IDLE,
  clearedCartError: null,

  //Delete Cart Item
  deletedCartItem: {},
  deletedCartItemStatus: STATUS.IDLE,
  deletedCartItemError: null,

  //Updated Cart Item
  updatedCartItem: {},
  updatedCartItemStatus: STATUS.IDLE,
  updatedCartItemError: null,

  //Updated Cart Item
  appliedCoupon: [],
  appliedCouponStatus: STATUS.IDLE,
  appliedCouponError: null,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.addedItemStatus = STATUS.IDLE;
      state.cartItemsStatus = STATUS.IDLE;
      // state.clearedCartStatus = STATUS.IDLE;
      // state.deletedCartItem = STATUS.IDLE;
      state.updatedCartItemStatus = STATUS.IDLE;
      state.appliedCouponStatus = STATUS.IDLE;
    },
  },

  extraReducers: (builder) => {
    //Get Cart
    builder.addCase(getCartItems.pending, (state) => {
      state.cartItemsStatus = STATUS.LOADING;
      state.cartItems = [];
      state.cartItemsError = null;
    }),
      builder.addCase(getCartItems.fulfilled, (state, action) => {
        state.cartItemsStatus = STATUS.SUCCEEDED;
        state.cartItems = action.payload;
        state.cartItemsError = null;
      }),
      builder.addCase(getCartItems.rejected, (state, action) => {
        state.cartItemsStatus = STATUS.FAILED;
        state.cartItems = [];
        state.cartItemsError = action.payload;
      });

    //Add To Cart
    builder.addCase(AddToCart.pending, (state) => {
      state.addedItemStatus = STATUS.LOADING;
      state.addedItem = {};
      state.addedItemError = null;
    }),
      builder.addCase(AddToCart.fulfilled, (state, action) => {
        state.addedItemStatus = STATUS.SUCCEEDED;
        state.addedItem = action.payload;
        state.addedItemError = null;
      }),
      builder.addCase(AddToCart.rejected, (state, action) => {
        state.addedItemStatus = STATUS.FAILED;
        state.addedItem = {};
        state.addedItemError = action.payload;
      });

    //Clear Cart
    builder.addCase(clearCart.pending, (state) => {
      state.clearedCartStatus = STATUS.LOADING;
      state.clearedCart = [];
      state.clearedCartError = null;
    }),
      builder.addCase(clearCart.fulfilled, (state, action) => {
        state.clearedCartStatus = STATUS.SUCCEEDED;
        state.clearedCart = action.payload;
        state.clearedCartError = null;
      }),
      builder.addCase(clearCart.rejected, (state, action) => {
        state.clearedCartStatus = STATUS.FAILED;
        state.clearedCart = [];
        state.clearedCartError = action.payload;
      });

    //Delete Cart Item

    builder.addCase(deleteCartItem.pending, (state) => {
      state.deletedCartItemStatus = STATUS.LOADING;
      state.deletedCartItem = {};
      state.deletedCartItemError = null;
    }),
      builder.addCase(deleteCartItem.fulfilled, (state, action) => {
        state.deletedCartItemStatus = STATUS.SUCCEEDED;
        state.deletedCartItem = action.payload;
        state.deletedCartItemError = null;
      }),
      builder.addCase(deleteCartItem.rejected, (state, action) => {
        state.deletedCartItemStatus = STATUS.FAILED;
        state.deletedCartItem = {};
        state.deletedCartItemError = action.payload;
      });

    //Update Cart Item Count

    builder.addCase(updateCartItemCount.pending, (state) => {
      state.updatedCartItemStatus = STATUS.LOADING;
      state.updatedCartItem = {};
      state.updatedCartItemError = null;
    }),
      builder.addCase(updateCartItemCount.fulfilled, (state, action) => {
        state.updatedCartItemStatus = STATUS.SUCCEEDED;
        state.updatedCartItem = action.payload;
        state.updatedCartItemError = null;
      }),
      builder.addCase(updateCartItemCount.rejected, (state, action) => {
        state.updatedCartItemStatus = STATUS.FAILED;
        state.updatedCartItem = {};
        state.updatedCartItemError = action.payload;
      });

    //Apply Coupon

    builder.addCase(applyCoupon.pending, (state) => {
      state.appliedCouponStatus = STATUS.LOADING;
      state.appliedCoupon = [];
      state.appliedCouponError = null;
    }),
      builder.addCase(applyCoupon.fulfilled, (state, action) => {
        state.appliedCouponStatus = STATUS.SUCCEEDED;
        state.appliedCoupon = action.payload;
        state.appliedCouponError = null;
      }),
      builder.addCase(applyCoupon.rejected, (state, action) => {
        state.appliedCouponStatus = STATUS.FAILED;
        state.appliedCoupon = [];
        state.appliedCouponError = action.payload;
      });
  },
});

//Get Cart
export const cartItems = (state) => state.cart.cartItems;

export const cartItemsStatus = (state) => state.cart.cartItemsStatus;

export const cartItemsError = (state) => state.cart.cartItemsError;

//Add To Cart
export const addedItem = (state) => state.cart.addedItem;

export const addedItemStatus = (state) => state.cart.addedItemStatus;

export const addedItemError = (state) => state.cart.addedItemError;

//Clear Cart
export const clearedCart = (state) => state.cart.clearedCart;

export const clearedCartStatus = (state) => state.cart.clearedCartStatus;

export const clearedCartError = (state) => state.cart.clearedCartError;

//Delete Cart Item
export const deletedCartItem = (state) => state.cart.deletedCartItem;

export const deletedCartItemStatus = (state) =>
  state.cart.deletedCartItemStatus;

export const deletedCartItemError = (state) => state.cart.deletedCartItemError;

//Update Cart Item
export const updatedCartItem = (state) => state.cart.updatedCartItem;

export const updatedCartItemStatus = (state) =>
  state.cart.updatedCartItemStatus;

export const updatedCartItemError = (state) => state.cart.updatedCartItemError;

//Apply Coupon
export const appliedCoupon = (state) => state.cart.appliedCoupon;

export const appliedCouponStatus = (state) => state.cart.appliedCouponStatus;

export const appliedCouponError = (state) => state.cart.appliedCouponError;

export const { resetCart } = CartSlice.actions;

export default CartSlice.reducer;
