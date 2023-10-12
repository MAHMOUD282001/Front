import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  getCategoriesPage,
} from "../../store/thunkFunctions/categoriesFunctions";
import {
  allCategories,
  allCategoriesStatus,
} from "../../store/CategoriesSlice";
import { useState } from "react";

function AllCategoryPageHook() {
  let [page, setPage] = useState(1);

  let dispatch = useDispatch();
  useEffect(() => {
    scrollTo(0, 0);
    dispatch(getAllCategories(10));
  }, []);

  let categories = useSelector(allCategories);
  let categoriesStatus = useSelector(allCategoriesStatus);

  let getPage = (page) => {
    setPage(page);
    dispatch(getCategoriesPage({page, limit: 10}));
  };

  return [categories, categoriesStatus, page, getPage];
}

export default AllCategoryPageHook;
