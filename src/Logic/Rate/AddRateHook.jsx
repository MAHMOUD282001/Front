import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createReview } from "../../store/ThunkFunctions/ReviewFunctions";
import { useEffect } from "react";
import {
  createdReviewError,
  createdReviewStatus,
  reset,
} from "../../store/ReviewSlice";
import { STATUS } from "../../utils/status";

function AddRateHook(id) {
  let dispatch = useDispatch();
  let [rateText, setRateText] = useState("");
  let [rateValue, setRateValue] = useState(0);

  let user = JSON.parse(localStorage.getItem("user"));

  let handleRateTextChange = (e) => {
    setRateText(e.target.value);
  };

  let handleRateValeChange = (newRating) => {
    setRateValue(newRating);
  };

  let handleSubmit = () => {
    if (rateText.trim() === "" || rateText.trim() === " " || rateValue === 0) {
      toast.error("من فضلك ادخل بيانات صحيحه");
      return;
    }
    if (rateValue < 1) {
      toast.error("من فضلك ادخل تقييم اعلى من 1");
      return;
    }

    let data = {
      review: rateText,
      rating: rateValue,
    };

    dispatch(createReview({ id, data }));
  };

  let reviewStatus = useSelector(createdReviewStatus);
  let reviewError = useSelector(createdReviewError);

  useEffect(() => {
    if (reviewStatus === STATUS.SUCCEEDED) {
      toast.success("تم اضافه التقييم بنجاح", {
        onClose: () => window.location.reload(),
      });
      setRateText("");
      setRateValue(0);
      dispatch(reset());
    } else if (reviewStatus === STATUS.FAILED) {
      if (reviewError?.errors) {
        reviewError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (reviewError?.message) {
        toast.error(reviewError?.message);
      }
      dispatch(reset());
    }
  }, [reviewStatus]);

  return [
    rateText,
    rateValue,
    user,
    handleRateTextChange,
    handleRateValeChange,
    reviewStatus,
    handleSubmit,
  ];
}

export default AddRateHook;
