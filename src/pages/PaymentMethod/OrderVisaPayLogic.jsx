import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificAddress } from "../../store/ThunkFunctions/AddressesFunctions";
import { specificAddress } from "../../store/AddressesSlice";
import CartLogic from "../Cart/CartLogic";
import { toast } from "react-toastify";
import {
  resetCheckout,
  visaOrder,
  visaOrderError,
  visaOrderStatus,
} from "../../store/CheckoutSlice";
import { STATUS } from "../../utils/status";
import { createVisaOrder } from "../../store/ThunkFunctions/CheckoutFunctions";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../../store/CartSlice";

function OrderVisaPayLogic(addressDetails) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [, , , , , cartId, , ,] = CartLogic();

  let orderWithVisa = useSelector(visaOrder);
  let orderWithVisaStatus = useSelector(visaOrderStatus);
  let orderWithVisaError = useSelector(visaOrderError);

  let createOrderWithVisa = () => {
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

    dispatch(createVisaOrder({ id: cartId, data: data }));
  };

  useEffect(() => {
    if (orderWithVisaStatus === STATUS.SUCCEEDED) {
      toast.success("تم اضافه الاوردر بنجاح");
      dispatch(resetCart());
      dispatch(resetCheckout());
      window.open(orderWithVisa.session.url);
    } else if (orderWithVisaStatus === STATUS.FAILED) {
      if (orderWithVisaError?.errors) {
        orderWithVisaError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (orderWithVisaError?.message) {
        toast.error(orderWithVisaError?.message);
      }
      dispatch(resetCart());
    }
  }, [orderWithVisaStatus]);

  return [orderWithVisaStatus, createOrderWithVisa];
}

export default OrderVisaPayLogic;
