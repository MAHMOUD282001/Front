import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allCategories,
  allCategoriesError,
  allCategoriesStatus,
} from "../../../store/CategoriesSlice";
import { getAllCategories } from "../../../store/ThunkFunctions/CategoriesFunctions";

function HomeCategoriesLogic() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories(6));
  }, []);

  let categories = useSelector(allCategories);

  let categoriesStatus = useSelector(allCategoriesStatus);

  let categoriesError = useSelector(allCategoriesError);
  
  return [categories, categoriesStatus, categoriesError];
}

export default HomeCategoriesLogic;
