import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../utils/status";
import { toast } from "react-toastify";
import {
  reset,
  updatedReviewError,
  updatedReviewStatus,
} from "../../store/ReviewSlice";
import { UpdateReview } from "../../store/ThunkFunctions/ReviewFunctions";

function EditRateHook(review) {
  const [open, setOpen] = useState(false);
  let [rateText, setRateText] = useState(review?.review);
  let [rateValue, setRateValue] = useState(review?.rating);

  const handleClose = () => setOpen(false);

  let handleRateTextChange = (e) => {
    setRateText(e.target.value);
  };

  let handleRateValueChange = (newRating) => {
    setRateValue(newRating);
  };

  let handleEditReview = (id) => {
    setOpen(true);
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

    dispatch(UpdateReview({ id: review?._id, data }));
  };

  let dispatch = useDispatch();
  let reviewStatus = useSelector(updatedReviewStatus);
  let reviewError = useSelector(updatedReviewError);

  useEffect(() => {
    if (reviewStatus === STATUS.SUCCEEDED) {
      toast.success("تم تعديل التقييم بنجاح", {
        onClose: () => window.location.reload(),
      });
      setRateText("");
      setRateValue(0);
      handleClose();
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
    open,
    rateText,
    rateValue,
    handleClose,
    handleRateTextChange,
    handleRateValueChange,
    handleEditReview,
    handleSubmit,
  ];
}

export default EditRateHook;
