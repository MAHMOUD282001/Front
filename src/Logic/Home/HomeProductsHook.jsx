import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/ThunkFunctions/ProductsFunctions";
import {
  allProducts,
  allProductsError,
  allProductsStatus,
} from "../../store/ProductsSlice";

function HomeProductsHook() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  let products = useSelector(allProducts)?.data?.slice(0, 5);
  let productsStatus = useSelector(allProductsStatus);
  let productsError = useSelector(allProductsError);
  

  return [products, productsStatus, productsError];
}

export default HomeProductsHook;
