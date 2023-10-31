import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { STATUS } from "../../../utils/status";
import {
  deletedCartItemError,
  deletedCartItemStatus,
  resetCart,
  updatedCartItemError,
  updatedCartItemStatus,
} from "../../../store/CartSlice";
import {
  deleteCartItem,
  updateCartItemCount,
} from "../../../store/ThunkFunctions/CartFunctions";
import { useState } from "react";
import { toast } from "react-toastify";
import { getSpecificProduct } from "../../../store/ThunkFunctions/ProductsFunctions";
import { specificProduct } from "../../../store/ProductsSlice";

function CartItemLogic(cartItem) {
  let dispatch = useDispatch();

  //Delete Cart Item Variables
  let cartItemStatus = useSelector(deletedCartItemStatus);
  let cartItemError = useSelector(deletedCartItemError);

  //Update Cart Item Count Variables
  let [cartItemCount, setCartItemCount] = useState(cartItem?.count);
  let updatedItemStatus = useSelector(updatedCartItemStatus);
  let updatedItemError = useSelector(updatedCartItemError);

  let product = useSelector(specificProduct);

  useEffect(() => {
    dispatch(getSpecificProduct(cartItem?.product?._id));
  }, []);

  //Update Cart Item Count
  useEffect(() => {
    setCartItemCount(cartItem?.count);
  }, [cartItem]);

  let handleIncreaseCount = () => {
    if (cartItemCount < product?.data?.quantity) {
      setCartItemCount(cartItemCount + 1);
      handleDispatchData(cartItemCount + 1);
    } else {
      setCartItemCount(product?.data?.quantity);
      toast.error("لا يوجد هذا العدد من المنتجات فى المخزن");
    }
  };

  let handleDecreaseCount = () => {
    if (cartItemCount > 1) {
      setCartItemCount(cartItemCount - 1);
      handleDispatchData(cartItemCount - 1);
    } else {
      handleDeleteCartItem(cartItem?._id);
    }
  };

  let handleDispatchData = (count) => {
    let data = {
      count: count,
    };
    dispatch(updateCartItemCount({ id: cartItem?._id, data }));
  };

  useEffect(() => {
    if (updatedItemStatus === STATUS.SUCCEEDED) {
      // window.location.reload();
      dispatch(resetCart());
    }

    if (updatedItemStatus === STATUS.FAILED) {
      if (updatedItemError?.errors) {
        updatedItemError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (updatedItemError?.message) {
        toast.error(updatedItemError?.message);
      }
      dispatch(resetCart());
    }
  }, [updatedItemStatus]);

  //Delete Cart Item
  let handleDeleteCartItem = (id) => {
    Swal.fire({
      title: " هل انت متاكد من حذف المنتج",
      text: "لن تتمكن من التراجع عن هذا!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "نعم، احذفه!",
      cancelButtonText: "تراجع!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCartItem(id));
      }
    });
  };

  let errMsg = "";

  let getErrMsg = () => {
    if (cartItemError?.errors) {
      errMsg = "";
      cartItemError?.errors?.map((err) => {
        errMsg += err.msg;
      });
    } else if (cartItemError?.message) {
      errMsg = "";
      errMsg += cartItemError?.message;
    }
    return errMsg;
  };

  useEffect(() => {
    if (cartItemStatus === STATUS.SUCCEEDED) {
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
    } else if (cartItemStatus === STATUS.FAILED) {
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
  }, [cartItemStatus]);

  return [
    handleDeleteCartItem,
    cartItemCount,
    product,
    handleDecreaseCount,
    handleIncreaseCount,
  ];
}

export default CartItemLogic;
