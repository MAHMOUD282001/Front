import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSpecificProduct,
  getSpecificProductsByCategory,
} from "../../store/ThunkFunctions/ProductsFunctions";
import {
  allProducts,
  allProductsError,
  allProductsStatus,
  specificProduct,
} from "../../store/ProductsSlice";

function ProductDetailsHook(id) {
  let dispatch = useDispatch();
  useEffect(() => {
    scrollTo(0, 0);
    dispatch(getSpecificProduct(id));
  }, [id]);

  //Get Product
  let product = useSelector(specificProduct);

  useEffect(() => {
    product?.data?.category !== undefined
      ? dispatch(getSpecificProductsByCategory(product?.data?.category))
      : "";
  }, [product]);

  let products = useSelector(allProducts);
  let productsError = useSelector(allProductsError);
  let productsStatus = useSelector(allProductsStatus);

  return [product, products, productsStatus, productsError];
}

export default ProductDetailsHook;
