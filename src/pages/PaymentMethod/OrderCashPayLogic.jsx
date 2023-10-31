import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartLogic from "../Cart/CartLogic";
import { toast } from "react-toastify";
import {
  cashedOrder,
  cashedOrderError,
  cashedOrderStatus,
  resetCheckout,
} from "../../store/CheckoutSlice";
import { STATUS } from "../../utils/status";
import { createCashOrder } from "../../store/ThunkFunctions/CheckoutFunctions";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../../store/CartSlice";


function OrderCashPayLogic(addressDetails) {
  console.log(Object.keys(addressDetails).length === 0);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [, , , , , cartId, , ,] = CartLogic();

  let order = useSelector(cashedOrder);
  let orderStatus = useSelector(cashedOrderStatus);
  let orderError = useSelector(cashedOrderError);

  let createOrderWithCash = () => {
    if (cartId === "") {
      toast.error("من فضلك اضف منتجات للعربه");
      return;
    } else if (Object.keys(addressDetails).length === 0) {
      toast.error("من فضلك اختر عنوان");
      return;
    }

    let data = {
      shippingAddress: {
        details: addressDetails?.data?.alias,
        phone: addressDetails?.data?.phone,
        city: "",
        postalCode: "",
      },
    };

    dispatch(createCashOrder({ id: cartId, data: data }));
  };

  useEffect(() => {
    if (orderStatus === STATUS.SUCCEEDED) {
      toast.success("تم اضافه الاوردر بنجاح");
      dispatch(resetCart());
      dispatch(resetCheckout());
      navigate("/user/allOrders");
    } else if (orderStatus === STATUS.FAILED) {
      if (orderError?.errors) {
        orderError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (orderError?.message) {
        toast.error(orderError?.message);
      }
      dispatch(resetCart());
    }
  }, [orderStatus]);

  return [orderStatus, createOrderWithCash];
}

export default OrderCashPayLogic;
