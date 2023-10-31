import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCoupons,
  getCouponsPage,
} from "../../../../store/ThunkFunctions/CouponFunctions";
import {
  allCoupons,
  allCouponsError,
  allCouponsStatus,
} from "../../../../store/CouponSlice";
import { STATUS } from "../../../../utils/status";

function AdminAllCouponsLogic() {
  let [page, setPage] = useState(1);
  let dispatch = useDispatch();

  let limit = 10;

  let coupons = useSelector(allCoupons);
  let couponsStatus = useSelector(allCouponsStatus);
  let couponsError = useSelector(allCouponsError);

  useEffect(() => {
    if (couponsStatus === STATUS.IDLE) {
      dispatch(getCoupons(limit));
    }
  }, [couponsStatus]);

  let getPage = (page) => {
    setPage(page);
    dispatch(getCouponsPage({ page, limit }));
  };

  return [coupons, couponsStatus, couponsError, page, getPage];
}

export default AdminAllCouponsLogic;
