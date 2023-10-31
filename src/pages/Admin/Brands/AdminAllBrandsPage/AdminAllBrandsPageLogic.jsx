import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBrands,
  getBrandsPage,
} from "../../../../store/ThunkFunctions/BrandsFunctions";
import {
  allBrands,
  allBrandsError,
  allBrandsStatus,
} from "../../../../store/BrandsSlice";

function AdminAllBrandsLogic() {
  let [page, setPage] = useState(1);

  let dispatch = useDispatch();
  useEffect(() => {
    scrollTo(0, 0);
    dispatch(getAllBrands(10));
  }, []);

  let brands = useSelector(allBrands);
  let brandsStatus = useSelector(allBrandsStatus);
  let brandsError = useSelector(allBrandsError);

  let getPage = (page) => {
    setPage(page);
    dispatch(getBrandsPage({ page, limit: 10 }));
  };

  return [brands, brandsStatus, brandsError, page, getPage];
}

export default AdminAllBrandsLogic;
