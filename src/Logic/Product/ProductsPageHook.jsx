import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsSearch } from "../../store/ThunkFunctions/ProductsFunctions";
import {
  allProducts,
  allProductsError,
  allProductsStatus,
} from "../../store/ProductsSlice";

function ProductsPageHook() {
  let limit = 10;
  let [page, setPage] = useState(1);
  let dispatch = useDispatch();

  //Get All Products
  let getProducts = async (page) => {
    let sort = handleSortBy();

    let [
      word,
      queryCatString,
      queryBrandString,
      priceFrom,
      priceTo,
      priceFromString,
      priceToString,
    ] = getFromLocalStorage();

    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&page=${page}&${queryCatString}&${queryBrandString}${priceFromString}${priceToString}`
      )
    );
  };

  useEffect(() => {
    scrollTo(0, 0);
    getProducts();
  }, []);

  let products = useSelector(allProducts);
  let productsStatus = useSelector(allProductsStatus);
  let productsError = useSelector(allProductsError);

  //Handle Pagination
  let getPage = (page) => {
    setPage(page);
    getProducts(page);
  };

  //Handle Sort By

  let handleSortBy = () => {
    let sortType = localStorage.getItem("sortKey") || "";

    if (sortType === "السعر من الاقل الى الاعلى") {
      return "+price";
    } else if (sortType === "السعر من الاعلى الى الاقل") {
      return "-price";
    } else if (sortType === "") {
      return "";
    } else if (sortType === "الاكثر مبيعا") {
      return "-sold";
    } else if (sortType === "الاعلى تقييما") {
      return "-ratingQuantity";
    }
  };

  //Get From Local Storage

  let getFromLocalStorage = () => {
    let word = localStorage.getItem("searchedWord");
    let queryCatString = localStorage.getItem("catChecked");
    let queryBrandString = localStorage.getItem("brandChecked");
    let priceFrom = localStorage.getItem("priceFrom");
    let priceTo = localStorage.getItem("priceTo");

    let priceFromString = "";
    if (priceFrom === "" || priceFrom <= 0 || priceFrom === null) {
      priceFromString = "";
    } else {
      priceFromString = `&price[gt]=${priceFrom}`;
    }

    let priceToString = "";
    if (priceTo === "" || priceTo <= 0 || priceTo === null) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }

    return [
      word,
      queryCatString,
      queryBrandString,
      priceFrom,
      priceTo,
      priceFromString,
      priceToString,
    ];
  };

  return [products, productsStatus, productsError, page, getPage, getProducts];
}

export default ProductsPageHook;
