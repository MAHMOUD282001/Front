import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../store/ThunkFunctions/CategoriesFunctions";
import { allCategories } from "../../store/CategoriesSlice";
import { useState } from "react";
import { createSubCategory } from "../../store/ThunkFunctions/SubCategoriesFunctions";
import { toast } from "react-toastify";
import { STATUS } from "../../utils/status";
import {
  addedSubCategoryError,
  addedSubCategoryStatus,
} from "../../store/SubCategoriesSlice";

function AddSubCategoryHook() {
  const [catName, setCatName] = useState("");
  const [subCatName, setSubCatName] = useState("");

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  //Handle Inputs Change
  const handleCatChange = (event) => {
    setCatName(event.target.value);
  };

  const handleSubCatChange = (event) => {
    setSubCatName(event.target.value);
  };



  let categories = useSelector(allCategories);

  let subCategoryStatus = useSelector(addedSubCategoryStatus);

  let subCategoryError = useSelector(addedSubCategoryError);

  //Handle Submit
  let handleSubCategorySubmit = (e) => {
    e.preventDefault();

    if (catName === "" || subCatName === "") {
      toast.error("من فضلك اكمل البيانات");
      return;
    }
    
    
    dispatch(createSubCategory({ name: subCatName, category: catName }));
    
  };

  useEffect(() => {
    if (subCategoryStatus === STATUS.SUCCEEDED) {
      toast.success("تم اضافه التصنيف بنجاح");
      setCatName("");
      setSubCatName("");
    } else if (subCategoryStatus === STATUS.FAILED) {
      toast.error(subCategoryError.message);
    }
  }, [subCategoryStatus]);

  return [
    catName,
    subCatName,
    categories,
    handleCatChange,
    handleSubCatChange,
    handleSubCategorySubmit,
    subCategoryStatus,
  ];
}

export default AddSubCategoryHook;
