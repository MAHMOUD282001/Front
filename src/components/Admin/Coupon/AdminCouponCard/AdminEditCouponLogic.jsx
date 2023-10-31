import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  updatedCouponError,
  updatedCouponStatus,
} from "../../../../store/CouponSlice";
import { useEffect } from "react";
import { STATUS } from "../../../../utils/status";
import { toast } from "react-toastify";
import { updateCoupon } from "../../../../store/ThunkFunctions/CouponFunctions";

function AdminEditCouponLogic(coupon) {
  let dateRef = useRef();
  let date = new Date(coupon?.expire).toLocaleDateString();

  const [open, setOpen] = useState(false);
  let [couponName, setCouponName] = useState(coupon?.name);
  let [couponDate, setCouponDate] = useState(date);
  let [couponPercentage, setCouponPercentage] = useState(coupon?.discount);

  let [loading, setLoading] = useState(true);

  let dispatch = useDispatch();

  let couponStatus = useSelector(updatedCouponStatus);

  let couponError = useSelector(updatedCouponError);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

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

  let handleSubmit = async () => {
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

    await dispatch(updateCoupon({ id: coupon?._id, data }));

    setLoading(false);
  };

  useEffect(() => {
    if (loading === false && couponStatus === STATUS.SUCCEEDED) {
      toast.success("تم تعديل الكوبون بنجاح");
      handleClose();
      dispatch(reset());
    } else if (loading === false && couponStatus === STATUS.FAILED) {
      if (couponError?.errors) {
        couponError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (couponError?.message) {
        toast.error(couponError?.message);
      }
      dispatch(reset());
    }
  }, [loading]);

  return [
    open,
    dateRef,
    couponName,
    couponDate,
    couponPercentage,
    couponStatus,
    handleClose,
    handleOpen,
    handleFocus,
    handleBlur,
    handleCouponNameChange,
    handleCouponDateChange,
    handleCouponPercentageChange,
    handleSubmit,
  ];
}

export default AdminEditCouponLogic;
