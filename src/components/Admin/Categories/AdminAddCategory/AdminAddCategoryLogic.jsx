import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import uploadImg from "../../../../assets/avatar.png";
import {
  createdCategoryError,
  createdCategoryStatus,
  reset,
} from "../../../../store/CategoriesSlice";
import { createCategory } from "../../../../store/ThunkFunctions/CategoriesFunctions";
import { STATUS } from "../../../../utils/status";

function AddCategoryHook() {
  let [img, setImg] = useState(uploadImg);
  let [name, setName] = useState("");
  let [selectedFile, setSelectedFile] = useState("");

  let dispatch = useDispatch();

  let categoryStatus = useSelector(createdCategoryStatus);

  let categoryError = useSelector(createdCategoryError);

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  //Handle Img Change
  let handleImgChange = (e) => {
    if (e.target.files.length > 0) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };
  
  
  //Handle Submit
  let handleCategorySubmit = (e) => {
    e.preventDefault();

    if (name === "" || selectedFile === "") {
      toast.error("من فضلك اكمل البيانات");
      return;
    }

    let formData = new FormData();

    formData.append("name", name);
    formData.append("image", selectedFile);

    dispatch(createCategory(formData));
  };

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (categoryStatus === STATUS.SUCCEEDED) {
      toast.success("تم اضافه التصنيف بنجاح");
      setImg(uploadImg);
      setSelectedFile("");
      setName("");
      dispatch(reset());
    } else if (categoryStatus === STATUS.FAILED) {
      toast.error(categoryError.message);
      dispatch(reset());
    }
  }, [categoryStatus]);

  return [
    img,
    name,
    categoryStatus,
    handleNameChange,
    handleImgChange,
    handleCategorySubmit,
  ];
}

export default AddCategoryHook;
