import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { STATUS } from "../../../utils/status";
import { useEffect } from "react";
import {
  deletedReviewError,
  deletedReviewStatus,
} from "../../../store/ReviewSlice";
import { deleteReview } from "../../../store/ThunkFunctions/ReviewFunctions";

function DeleteRateLogic() {
  let dispatch = useDispatch();

  let reviewStatus = useSelector(deletedReviewStatus);

  let reviewError = useSelector(deletedReviewError);

  let handleRemoveReview = (id) => {
    Swal.fire({
      title: "هل انت متاكد",
      text: "لن تتمكن من التراجع عن هذا!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "نعم، احذفه!",
      cancelButtonText: "تراجع!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteReview(id));
      }
    });
  };

  let errMsg = "";

  let getErrMsg = () => {
    if (reviewError?.errors) {
      errMsg = "";
      reviewError?.errors?.map((err) => {
        errMsg += err.msg;
      });
    } else if (reviewError?.message) {
      errMsg = "";
      errMsg += reviewError?.message;
    }
    return errMsg;
  };

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (reviewStatus === STATUS.SUCCEEDED) {
      Swal.fire({
        title: "تم الحذف",
        text: "تم حذف المنتج بنجاح",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "تم",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    } else if (reviewStatus === STATUS.FAILED) {
      Swal.fire({
        title: "خطأ!",
        text: getErrMsg(),
        icon: "error",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "تم",
      }).then((result) => {
        if (result.isConfirmed) {
          // window.location.reload();
        }
      });
    }
  }, [reviewStatus]);

  return [handleRemoveReview];
}

export default DeleteRateLogic;
