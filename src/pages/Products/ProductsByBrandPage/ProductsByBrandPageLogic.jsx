import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSpecificProductsByBrand,
  getSpecificProductsByCategory,
} from "../../../store/ThunkFunctions/ProductsFunctions";
import {
  specificProductsByBrand,
  specificProductsByBrandError,
  specificProductsByBrandStatus,
} from "../../../store/ProductsSlice";
import { useState } from "react";

function ProductsByBrandPageLogic(id) {
  let dispatch = useDispatch();
  let limit = 10;
  let [page, setPage] = useState(1);

  let productsByBrand = useSelector(specificProductsByBrand);
  let productsByBrandStatus = useSelector(specificProductsByBrandStatus);
  let productsByBrandError = useSelector(specificProductsByBrandError);

  useEffect(() => {
    dispatch(getSpecificProductsByBrand({ id: id, limit: limit, page: page }));
  }, []);

  //Handle Pagination
  let getPage = (page) => {
    setPage(page);
    dispatch(getSpecificProductsByBrand({ id: id, limit: limit, page: page }));
  };

  return [
    productsByBrand,
    productsByBrandStatus,
    productsByBrandError,
    page,
    getPage,
  ];
}

export default ProductsByBrandPageLogic;
