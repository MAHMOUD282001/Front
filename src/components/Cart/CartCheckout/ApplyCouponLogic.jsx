import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  appliedCoupon,
  appliedCouponError,
  appliedCouponStatus,
  resetCart,
} from "../../../store/CartSlice";
import { applyCoupon } from "../../../store/ThunkFunctions/CartFunctions";
import { STATUS } from "../../../utils/status";
import { toast } from "react-toastify";

function ApplyCouponLogic() {
  let dispatch = useDispatch();
  let [couponName, setCouponName] = useState("");

  let coupon = useSelector(appliedCoupon);
  let couponStatus = useSelector(appliedCouponStatus);
  let couponError = useSelector(appliedCouponError);

  let handleCouponNameChange = (value) => {
    setCouponName(value);
  };

  let handleSubmitCoupon = () => {
    if (couponName.trim() === "") {
      toast.error("من فضلك ادخل كوبون");
      return;
    }

    let data = {
      couponName: couponName,
    };

    dispatch(applyCoupon(data));
  };

  useEffect(() => {
    if (couponStatus === STATUS.SUCCEEDED) {
      toast.success("تم تطبيق الكوبون بنجاح");
      dispatch(resetCart());
    } else if (couponStatus === STATUS.FAILED) {
      if (couponError?.errors) {
        couponError?.errors?.map((err) => {
          toast.error(err.msg, {
            onClose: () => window.location.reload(),
          });
        });
      } else if (couponError?.message) {
        toast.error(couponError?.message, {
          onClose: () => window.location.reload(),
        });
      }
      dispatch(resetCart());
    }
  }, [couponStatus]);

  return [couponStatus, couponName, handleCouponNameChange, handleSubmitCoupon];
}

export default ApplyCouponLogic;
