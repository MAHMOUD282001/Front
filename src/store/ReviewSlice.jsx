import { createSlice } from "@reduxjs/toolkit";
import {
  UpdateReview,
  createReview,
  deleteReview,
  getReviews,
} from "./ThunkFunctions/ReviewFunctions";
import { STATUS } from "../utils/status";

const initialState = {
  //Create Review
  createdReview: {},
  createdReviewStatus: STATUS.IDLE,
  createdReviewError: null,

  //Get Reviews
  reviews: [],
  reviewsStatus: STATUS.IDLE,
  reviewsError: null,

  //Delete Review
  deletedReviewStatus: STATUS.IDLE,
  deletedReviewError: null,

  //Delete Review
  updatedReviewStatus: STATUS.IDLE,
  updatedReviewError: null,
};

const ReviewSlice = createSlice({
  name: "Review",
  initialState,
  reducers: {
    reset: (state) => {
      state.createdReviewStatus = STATUS.IDLE;
      state.createdReviewError = null;
      state.reviewsStatus = STATUS.IDLE;
      state.reviewsError = null;
      state.deletedReviewStatus = STATUS.IDLE;
      state.deletedReviewError = null;
      state.updatedReviewStatus = STATUS.IDLE;
      state.updatedReviewError = null;
    },
  },
  extraReducers: (builder) => {
    //Create Review
    builder.addCase(createReview.pending, (state) => {
      state.createdReviewStatus = STATUS.LOADING;
      state.createdReview = {};
      state.createdReviewError = null;
    }),
      builder.addCase(createReview.fulfilled, (state, action) => {
        state.createdReviewStatus = STATUS.SUCCEEDED;
        state.createdReview = action.payload;
        state.createdReviewError = null;
      }),
      builder.addCase(createReview.rejected, (state, action) => {
        state.createdReviewStatus = STATUS.FAILED;
        state.createdReview = {};
        state.createdReviewError = action.payload;
      });

    //Get Reviews
    builder.addCase(getReviews.pending, (state) => {
      state.reviewsStatus = STATUS.LOADING;
      state.reviews = [];
      state.reviewsError = null;
    }),
      builder.addCase(getReviews.fulfilled, (state, action) => {
        state.reviewsStatus = STATUS.SUCCEEDED;
        state.reviews = action.payload;
        state.reviewsError = null;
      }),
      builder.addCase(getReviews.rejected, (state, action) => {
        state.reviewsStatus = STATUS.FAILED;
        state.reviews = [];
        state.reviewsError = action.payload;
      });

    //Delete Review
    builder.addCase(deleteReview.pending, (state) => {
      state.deletedReviewStatus = STATUS.LOADING;
      state.deletedReviewError = null;
    }),
      builder.addCase(deleteReview.fulfilled, (state) => {
        state.deletedReviewStatus = STATUS.SUCCEEDED;
        state.deletedReviewError = null;
      }),
      builder.addCase(deleteReview.rejected, (state, action) => {
        state.deletedReviewStatus = STATUS.FAILED;
        state.deletedReviewError = action.payload;
      });

    //Update Review
    builder.addCase(UpdateReview.pending, (state) => {
      state.updatedReviewStatus = STATUS.LOADING;
      state.updatedReviewError = null;
    }),
      builder.addCase(UpdateReview.fulfilled, (state) => {
        state.updatedReviewStatus = STATUS.SUCCEEDED;
        state.updatedReviewError = null;
      }),
      builder.addCase(UpdateReview.rejected, (state, action) => {
        state.updatedReviewStatus = STATUS.FAILED;
        state.updatedReviewError = action.payload;
      });
  },
});

//Create Review
export const createdReview = (state) => state.review.createdReview;
export const createdReviewStatus = (state) => state.review.createdReviewStatus;
export const createdReviewError = (state) => state.review.createdReviewError;

//Get Reviews
export const reviews = (state) => state.review.reviews;
export const reviewsStatus = (state) => state.review.reviewsStatus;
export const reviewsError = (state) => state.review.reviewsError;

//Delete Review
export const deletedReviewStatus = (state) => state.review.deletedReviewStatus;
export const deletedReviewError = (state) => state.review.deletedReviewError;

//Update Review
export const updatedReviewStatus = (state) => state.review.updatedReviewStatus;
export const updatedReviewError = (state) => state.review.updatedReviewError;

export const { reset } = ReviewSlice.actions;

export default ReviewSlice.reducer;
