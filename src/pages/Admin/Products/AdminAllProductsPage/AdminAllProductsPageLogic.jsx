import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductsPage,
} from "../../../../store/ThunkFunctions/ProductsFunctions";
import {
  allProducts,
  allProductsError,
  allProductsStatus,
} from "../../../../store/ProductsSlice";

function AdminAllProductsPageLogic() {
  let [page, setPage] = useState(1);

  let dispatch = useDispatch();
  useEffect(() => {
    scrollTo(0, 0);
    dispatch(getAllProducts(10));
  }, []);

  let products = useSelector(allProducts);
  let productsStatus = useSelector(allProductsStatus);
  let productsError = useSelector(allProductsError);

  let getPage = (page) => {
    setPage(page);
    dispatch(getProductsPage({ page, limit: 10 }));
  };

  return [products, productsStatus, productsError, page, getPage];
}

export default AdminAllProductsPageLogic;
