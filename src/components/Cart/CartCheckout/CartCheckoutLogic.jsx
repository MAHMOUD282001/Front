import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { clearCart } from "../../../store/ThunkFunctions/CartFunctions";
import {
  clearedCart,
  clearedCartError,
  clearedCartStatus,
} from "../../../store/CartSlice";
import { STATUS } from "../../../utils/status";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CartCheckoutLogic(cartItemsNum) {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  // HandlePayment
  let handlePayment = () => {
    if (cartItemsNum > 0) {
      navigate("/order/paymethod");
    } else {
      toast.error("من فضلك اضف منتجات للعربه");
    }
  };

  let cart = useSelector(clearedCart);
  let cartStatus = useSelector(clearedCartStatus);
  let cartError = useSelector(clearedCartError);

  //UseEffect To Get Coupon Name in Input Of Coupon

  let handleClearCart = () => {
    Swal.fire({
      title: " هل انت متاكد من حذف منتجات العربه",
      text: "لن تتمكن من التراجع عن هذا!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "نعم، احذفه!",
      cancelButtonText: "تراجع!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
      }
    });
  };

  let errMsg = "";

  let getErrMsg = () => {
    if (cartError?.errors) {
      errMsg = "";
      cartError?.errors?.map((err) => {
        errMsg += err.msg;
      });
    } else if (cartError?.message) {
      errMsg = "";
      errMsg += cartError?.message;
    }
    return errMsg;
  };

  useEffect(() => {
    if (cartStatus === STATUS.SUCCEEDED) {
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
    } else if (cartStatus === STATUS.FAILED) {
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
  }, [cartStatus]);

  return [cartStatus, handleClearCart, handlePayment];
}

export default CartCheckoutLogic;
