import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  specificOrder,
  specificOrderError,
  specificOrderStatus,
} from "../../../../../store/OrdersSlice";
import { getSpecificOrder } from "../../../../../store/ThunkFunctions/OrdersFunctions";
import { useEffect } from "react";
import { STATUS } from "../../../../../utils/status";

function AdminOrderDetailsLogic(id) {
  let dispatch = useDispatch();

  let order = useSelector(specificOrder);
  let orderStatus = useSelector(specificOrderStatus);
  let orderError = useSelector(specificOrderError);

  useEffect(() => {
    dispatch(getSpecificOrder(id));
  }, [id]);

  useEffect(() => {
    if (orderStatus === STATUS.IDLE) {
      dispatch(getSpecificOrder(id));
    }
  }, [orderStatus]);

  var date = new Date(order?.data?.createdAt);

  let updatedDate =
    date?.getDate() +
    "/" +
    (date?.getMonth() + 1) +
    "/" +
    date?.getFullYear() +
    " " +
    date?.getHours() +
    ":" +
    date?.getMinutes() +
    ":" +
    date?.getSeconds();

  return [order, orderStatus, orderError, updatedDate];
}

export default AdminOrderDetailsLogic;
