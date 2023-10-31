import React from "react";
import { getAllProductsSearch } from "../../store/ThunkFunctions/ProductsFunctions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  allProducts,
  allProductsError,
  allProductsStatus,
} from "../../store/ProductsSlice";

function TopSoldProductsLogic() {
  let dispatch = useDispatch();
  let limit = 4;
  let sort = "-sold";
  let getProducts = async () => {
    await dispatch(getAllProductsSearch(`limit=${limit}&sort=${sort}`));
  };

  useEffect(() => {
    scrollTo(0, 0);
    getProducts();
  }, []);

  let topSoldProducts = useSelector(allProducts);
  let topSoldProductsStatus = useSelector(allProductsStatus);
  let topSoldProductsError = useSelector(allProductsError);
  
  return [topSoldProducts, topSoldProductsStatus, topSoldProductsError];
}

export default TopSoldProductsLogic;
