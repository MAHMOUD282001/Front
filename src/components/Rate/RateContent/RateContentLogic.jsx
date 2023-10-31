import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../../store/ThunkFunctions/ReviewFunctions";
import { reviews, reviewsError, reviewsStatus } from "../../../store/ReviewSlice";
import { useTheme } from "@material-ui/core";

function RateContentLogic(id) {
  let theme = useTheme();
  let dispatch = useDispatch();
  let [page, setPage] = useState(1);
  let limit = 5;

  useEffect(() => {
    dispatch(getReviews({ id, page, limit }));
  }, []);

  let allReviews = useSelector(reviews);
  let allReviewsStatus = useSelector(reviewsStatus);
  let allReviewsError = useSelector(reviewsError);

  //Handle Pagination
  let getPage = (page) => {
    setPage(page);
    dispatch(getReviews({ id, page, limit }));
  };

  return [theme,allReviews, allReviewsStatus, allReviewsError, page, getPage];
}

export default RateContentLogic;
