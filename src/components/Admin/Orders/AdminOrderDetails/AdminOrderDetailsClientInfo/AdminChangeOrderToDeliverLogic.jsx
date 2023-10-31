import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changedOrderDeliver,
  changedOrderDeliverError,
  changedOrderDeliverStatus,
  resetOrders,
} from "../../../../../store/OrdersSlice";
import { changeOrderToDeliver } from "../../../../../store/ThunkFunctions/OrdersFunctions";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { STATUS } from "../../../../../utils/status";

function AdminChangeOrderToDeliverLogic(id, order) {
  let dispatch = useDispatch();

  // Change Order To Deliver Variables
  let [isOrderDelivered, setIsOrderDelivered] = useState("");
  let changedDeliveredOrder = useSelector(changedOrderDeliver);
  let changedDeliveredOrderStatus = useSelector(changedOrderDeliverStatus);
  let changedDeliveredOrderError = useSelector(changedOrderDeliverError);

  useEffect(() => {
    if (order) {
      setIsOrderDelivered(order?.data?.isDelivered);
    }
  }, [order]);

  // Change Order To Deliver
  let handleOrderDeliverChange = (e) => {
    setIsOrderDelivered(e.target.value);
  };

  let handleOrderToDeliver = () => {
    if (isOrderDelivered === true) {
      dispatch(changeOrderToDeliver(id));
    }
  };

  useEffect(() => {
    if (changedDeliveredOrderStatus === STATUS.SUCCEEDED) {
      toast.success("تم تعديل حاله التوصيل بنجاح");
      dispatch(resetOrders());
    } else if (changedDeliveredOrderStatus === STATUS.FAILED) {
      if (changedDeliveredOrderError?.errors) {
        changedDeliveredOrderError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (changedDeliveredOrderError?.message) {
        toast.error(changedDeliveredOrderError?.message);
      }
      dispatch(resetOrders());
    }
  }, [changedDeliveredOrderStatus]);

  return [
    isOrderDelivered,
    changedDeliveredOrder,
    changedDeliveredOrderStatus,
    changedDeliveredOrderError,
    handleOrderDeliverChange,
    handleOrderToDeliver,
  ];
}

export default AdminChangeOrderToDeliverLogic;
