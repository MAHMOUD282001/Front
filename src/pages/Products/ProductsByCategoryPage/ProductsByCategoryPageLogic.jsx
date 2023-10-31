import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificProductsByCategory } from "../../../store/ThunkFunctions/ProductsFunctions";
import {
  specificProductsByCategory,
  specificProductsByCategoryError,
  specificProductsByCategoryStatus,
} from "../../../store/ProductsSlice";
import { useState } from "react";

function ProductsByCategoryPageLogic(id) {
  let dispatch = useDispatch();
  let limit = 10;
  let [page, setPage] = useState(1);

  let productsByCategory = useSelector(specificProductsByCategory);
  let productsByCategoryStatus = useSelector(specificProductsByCategoryStatus);
  let productsByCategoryError = useSelector(specificProductsByCategoryError);

  useEffect(() => {
    dispatch(
      getSpecificProductsByCategory({ id: id, limit: limit, page: page })
    );
  }, []);

  //Handle Pagination
  let getPage = (page) => {
    setPage(page);
    dispatch(
      getSpecificProductsByCategory({ id: id, limit: limit, page: page })
    );
  };

  return [
    productsByCategory,
    productsByCategoryStatus,
    productsByCategoryError,
    page,
    getPage,
  ];
}

export default ProductsByCategoryPageLogic;
