import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  allOrders,
  allOrdersError,
  allOrdersStatus,
} from "../../../../../store/OrdersSlice";
import { getAllOrders } from "../../../../../store/ThunkFunctions/OrdersFunctions";

function AdminAllOrdersLogic() {
  let [page, setPage] = useState(1);

  let limit = 2;

  let dispatch = useDispatch();

  let orders = useSelector(allOrders);
  let ordersStatus = useSelector(allOrdersStatus);
  let ordersError = useSelector(allOrdersError);

  useEffect(() => {
    dispatch(getAllOrders({ limit: limit, page: page }));
  }, [page]);

  //Handle Pagination
  let getPage = (page) => {
    setPage(page);
  };

  return [orders, ordersStatus, ordersError, page, getPage];
}

export default AdminAllOrdersLogic;
