import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import {
  addToWishlist,
  deleteFromWishlist,
  getProductWishlist,
} from "./ThunkFunctions/WishlistFunctions";

const initialState = {
  //All Wishlist
  wishlistItems: [],
  wishlistItemsStatus: STATUS.IDLE,
  wishlistItemsError: null,

  //Add To Wishlist
  addedWishlistItem: {},
  addedWishlistItemStatus: STATUS.IDLE,
  addedWishlistItemError: null,

  //Remove From Wishlist
  removedWishlistItemStatus: STATUS.IDLE,
  removedWishlistItemError: null,
};

const WishlistSlice = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {
    resetWishlist: (state) => {
      state.wishlistItemsStatus = STATUS.IDLE;
      state.addedWishlistItemStatus = STATUS.IDLE;
      state.removedWishlistItemStatus = STATUS.IDLE;
    },
  },

  extraReducers: (builder) => {
    //Add To Wishlist
    builder.addCase(getProductWishlist.pending, (state) => {
      state.wishlistItemsStatus = STATUS.LOADING;
      state.wishlistItems = [];
      state.wishlistItemsError = null;
    }),
      builder.addCase(getProductWishlist.fulfilled, (state, action) => {
        state.wishlistItemsStatus = STATUS.SUCCEEDED;
        state.wishlistItems = action.payload;
        state.wishlistItemsError = null;
      }),
      builder.addCase(getProductWishlist.rejected, (state, action) => {
        state.wishlistItemsStatus = STATUS.FAILED;
        state.wishlistItems = {};
        state.wishlistItemsError = action.payload;
      });

    //Add To Wishlist
    builder.addCase(addToWishlist.pending, (state) => {
      state.addedWishlistItemStatus = STATUS.LOADING;
      state.addedWishlistItem = {};
      state.addedWishlistItemError = null;
    }),
      builder.addCase(addToWishlist.fulfilled, (state, action) => {
        state.addedWishlistItemStatus = STATUS.SUCCEEDED;
        state.addedWishlistItem = action.payload;
        state.addedWishlistItemError = null;
      }),
      builder.addCase(addToWishlist.rejected, (state, action) => {
        state.addedWishlistItemStatus = STATUS.FAILED;
        state.addedWishlistItem = {};
        state.addedWishlistItemError = action.payload;
      });

    //Remove From Wishlist
    builder.addCase(deleteFromWishlist.pending, (state) => {
      state.removedWishlistItemStatus = STATUS.LOADING;
      state.addedWishlistItemError = null;
    }),
      builder.addCase(deleteFromWishlist.fulfilled, (state) => {
        state.removedWishlistItemStatus = STATUS.SUCCEEDED;
        state.removedWishlistItemError = null;
      }),
      builder.addCase(deleteFromWishlist.rejected, (state, action) => {
        state.removedWishlistItemStatus = STATUS.FAILED;
        state.removedWishlistItemError = action.payload;
      });
  },
});

//Get Wishlist
export const wishlistItems = (state) => state.wishlist.wishlistItems;
export const wishlistItemsStatus = (state) =>
  state.wishlist.wishlistItemsStatus;
export const wishlistItemsError = (state) => state.wishlist.wishlistItemsError;

//Add To Wishlist

export const addedWishlistItem = (state) => state.wishlist.addedWishlistItem;

export const addedWishlistItemStatus = (state) =>
  state.wishlist.addedWishlistItemStatus;

export const addedWishlistItemError = (state) =>
  state.wishlist.addedWishlistItemError;

//Remove From Wishlist

export const removedWishlistItemStatus = (state) =>
  state.wishlist.removedWishlistItemStatus;

export const removedWishlistItemError = (state) =>
  state.wishlist.removedWishlistItemError;

export const { resetWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;
