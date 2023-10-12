import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getCategoriesPage } from "../../../store/ThunkFunctions/CategoriesFunctions";
import { allCategories, allCategoriesError, allCategoriesStatus } from "../../../store/CategoriesSlice";


function AdminAllCategoriesHook() {
  let [page, setPage] = useState(1);

  let dispatch = useDispatch();
  useEffect(() => {
    scrollTo(0, 0);
    dispatch(getAllCategories(10));
  }, []);

  let categories = useSelector(allCategories);
  let categoriesStatus = useSelector(allCategoriesStatus);
  let categoriesError = useSelector(allCategoriesError);

  let getPage = (page) => {
    setPage(page);
    dispatch(getCategoriesPage({ page, limit: 10 }));
  };

  return [categories, categoriesStatus, categoriesError, page, getPage];
}

export default AdminAllCategoriesHook;
