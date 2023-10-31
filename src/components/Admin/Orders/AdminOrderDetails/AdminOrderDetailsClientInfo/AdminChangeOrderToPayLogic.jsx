import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changedOrderDeliver,
  changedOrderDeliverError,
  changedOrderDeliverStatus,
  changedOrderPay,
  changedOrderPayError,
  changedOrderPayStatus,
  resetOrders,
} from "../../../../../store/OrdersSlice";
import { changeOrderToPay } from "../../../../../store/ThunkFunctions/OrdersFunctions";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { STATUS } from "../../../../../utils/status";

function AdminChangeOrderToPayLogic(id, order) {
  let dispatch = useDispatch();

  // Change Order To Pay Variables
  let [isOrderPaid, setIsOrderPaid] = useState("");
  let changedPaidOrder = useSelector(changedOrderPay);
  let changedPaidOrderStatus = useSelector(changedOrderPayStatus);
  let changedPaidOrderError = useSelector(changedOrderPayError);
  
  
  useEffect(()=>{
    setIsOrderPaid(order?.data?.isPaid)
  }, [order])

  // Change Order To Pay
  let handleOrderPayChange = (e) => {
    setIsOrderPaid(e.target.value);
  };

  let handleOrderToPay = () => {
    if (isOrderPaid === true) {
      dispatch(changeOrderToPay(id));
    }
  };

  useEffect(() => {
    if (changedPaidOrderStatus === STATUS.SUCCEEDED) {
      toast.success("تم تعديل حاله الدفع بنجاح");
      dispatch(resetOrders());
    } else if (changedPaidOrderStatus === STATUS.FAILED) {
      if (changedPaidOrderError?.errors) {
        changedPaidOrderError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (changedPaidOrderError?.message) {
        toast.error(changedPaidOrderError?.message);
      }
      dispatch(resetOrders());
    }
  }, [changedPaidOrderStatus]);


  return [
    isOrderPaid,
    changedPaidOrder,
    changedPaidOrderStatus,
    changedPaidOrderError,
    handleOrderPayChange,
    handleOrderToPay,
  ];
}

export default AdminChangeOrderToPayLogic;
