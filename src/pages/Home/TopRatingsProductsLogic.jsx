import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsSearch } from "../../store/ThunkFunctions/ProductsFunctions";
import {
  allProducts,
  allProductsError,
  allProductsStatus,
} from "../../store/ProductsSlice";

function TopRatingsProductsLogic() {
  let dispatch = useDispatch();
  let limit = 4;
  let sort = "-ratingsQuantity";

  let getProducts = async () => {
    await dispatch(getAllProductsSearch(`limit=${limit}&sort=${sort}`));
  };

  useEffect(() => {
    scrollTo(0, 0);
    getProducts();
  }, []);

  let topRatingsProducts = useSelector(allProducts);
  let topRatingsProductsStatus = useSelector(allProductsStatus);
  let topRatingsProductsError = useSelector(allProductsError);
  
  
  return [
    topRatingsProducts,
    topRatingsProductsStatus,
    topRatingsProductsError,
  ];
}

export default TopRatingsProductsLogic;
