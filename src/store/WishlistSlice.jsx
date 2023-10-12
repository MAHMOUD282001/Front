import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import { createWishlist } from "./ThunkFunctions/WishlistFunctions";

const initialState = {
  //All Wishlist
  wishlistItems: [],
  wishlistItemsStatus: STATUS.IDLE,
  wishlistItemsError: null,

  //Added Wishlist
  addedWishlistItem: {},
  addedWishlistItemStatus: STATUS.IDLE,
  addedWishlistItemError: null,
};

const WishlistSlice = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {
    reset: (state) => {
      state.addedWishlistItemStatus = STATUS.IDLE;
      state.addedWishlistItemError = null;
    },
  },

  extraReducers: (builder) => {
    //Get Categories
    builder.addCase(createWishlist.pending, (state) => {
      state.addedWishlistItemStatus = STATUS.LOADING;
      state.addedWishlistItem = {};
      state.addedWishlistItemError = null;
    }),
      builder.addCase(createWishlist.fulfilled, (state, action) => {
        state.addedWishlistItemStatus = STATUS.SUCCEEDED;
        state.addedWishlistItem = action.payload;
        state.addedWishlistItemError = null;
      }),
      builder.addCase(createWishlist.rejected, (state, action) => {
        state.addedWishlistItemStatus = STATUS.FAILED;
        state.addedWishlistItem = {};
        state.addedWishlistItemError = action.payload;
      });
  },
});

//Added Wishlist

export const addedWishlistItem = (state) => state.wishlist.addedWishlistItem;

export const addedWishlistItemStatus = (state) =>
  state.wishlist.addedWishlistItemStatus;

export const addedWishlistItemError = (state) =>
  state.wishlist.addedWishlistItemError;

export const {reset} = WishlistSlice.actions

export default WishlistSlice.reducer;
