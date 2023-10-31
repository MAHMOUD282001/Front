import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createCoupon } from "../../../../store/ThunkFunctions/CouponFunctions";
import { useEffect } from "react";
import { STATUS } from "../../../../utils/status";
import {
  createdCouponError,
  createdCouponStatus,
  reset,
} from "../../../../store/CouponSlice";

function AdminAddCouponLogic() {
  let dateRef = useRef();
  let [couponName, setCouponName] = useState("");
  let [couponDate, setCouponDate] = useState("");
  let [couponPercentage, setCouponPercentage] = useState("");

  let dispatch = useDispatch();

  let couponStatus = useSelector(createdCouponStatus);

  let couponError = useSelector(createdCouponError);

  const handleCouponNameChange = (e) => {
    e.preventDefault();
    setCouponName(e.target.value);
  };

  const handleCouponDateChange = (e) => {
    e.preventDefault();
    setCouponDate(e.target.value);
  };

  const handleCouponPercentageChange = (e) => {
    e.preventDefault();
    setCouponPercentage(e.target.value);
  };

  const handleFocus = () => {
    const inputElement = dateRef.current.querySelector("input");
    inputElement.setAttribute("type", "date");
  };

  const handleBlur = () => {
    const inputElement = dateRef.current.querySelector("input");
    inputElement.setAttribute("type", "text");
  };

  let handleCouponSubmit = (e) => {
    e.preventDefault();
    if (couponName === "" || couponDate === "" || couponPercentage === "") {
      toast.error("من فضلك اكمل البيانات");
      return;
    }

    if (couponPercentage <= 0) {
      toast.error("من فضلك ادخل بيانات صحيحه");
      return;
    }

    let today = new Date().toLocaleDateString("en-US");

    couponDate = new Date(couponDate).toLocaleDateString("en-US");

    if (today > couponDate) {
      toast.error("من فضلك ادخل بيانات صحيحه");
      return;
    }

    let data = {
      name: couponName,
      expire: couponDate,
      discount: couponPercentage,
    };

    dispatch(createCoupon(data));
  };

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (couponStatus === STATUS.SUCCEEDED) {
      toast.success("تم اضافه الكوبون بنجاح", {
        onClose: () => window.location.reload(),
      });
      dispatch(reset());
    } else if (couponStatus === STATUS.FAILED) {
      if (couponError?.errors) {
        couponError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (couponError?.message) {
        toast.error(couponError?.message);
      }
      dispatch(reset());
    }
  }, [couponStatus]);

  return [
    dateRef,
    couponName,
    couponDate,
    couponPercentage,
    couponStatus,
    handleFocus,
    handleBlur,
    handleCouponNameChange,
    handleCouponDateChange,
    handleCouponPercentageChange,
    handleCouponSubmit,
  ];
}

export default AdminAddCouponLogic;
