import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSpecificProduct,
  getSpecificProductsByCategory,
} from "../../../store/ThunkFunctions/ProductsFunctions";
import {
  specificProduct,
  specificProductsByCategory,
  specificProductsByCategoryError,
  specificProductsByCategoryStatus,
} from "../../../store/ProductsSlice";

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
      ? dispatch(getSpecificProductsByCategory({id: product?.data?.category, limit: 5}))
      : "";
  }, [product]);

  let products = useSelector(specificProductsByCategory);
  let productsError = useSelector(specificProductsByCategoryError);
  let productsStatus = useSelector(specificProductsByCategoryStatus);

  return [product, products, productsStatus, productsError];
}

export default ProductDetailsHook;
