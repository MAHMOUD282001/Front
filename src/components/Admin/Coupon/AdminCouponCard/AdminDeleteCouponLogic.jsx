import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletedCouponError,
  deletedCouponStatus,
} from "../../../../store/CouponSlice";
import Swal from "sweetalert2";
import { deleteCoupon } from "../../../../store/ThunkFunctions/CouponFunctions";
import { useEffect } from "react";
import { STATUS } from "../../../../utils/status";

function AdminDeleteCouponLogic() {
  let dispatch = useDispatch();

  let couponStatus = useSelector(deletedCouponStatus);

  let couponError = useSelector(deletedCouponError);

  let handleDeleteCoupon = (id) => {
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
        dispatch(deleteCoupon(id));
      }
    });
  };

  let errMsg = "";

  let getErrMsg = () => {
    if (couponError?.errors) {
      errMsg = "";
      couponError?.errors?.map((err) => {
        errMsg += err.msg;
      });
    } else if (couponError?.message) {
      errMsg = "";
      errMsg += couponError?.message;
    }
    return errMsg;
  };

  useEffect(() => {
    if (couponStatus === STATUS.SUCCEEDED) {
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
    } else if (couponStatus === STATUS.FAILED) {
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
  }, [couponStatus]);

  return [handleDeleteCoupon];
}

export default AdminDeleteCouponLogic;
