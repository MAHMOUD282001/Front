import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import uploadImg from "../../../assets/avatar.png";
import {
  reset,
  specificCategory,
  updatedCategory,
  updatedCategoryError,
  updatedCategoryStatus,
} from "../../../store/CategoriesSlice";
import {
  getSpecificCategory,
  updateCategory,
} from "../../../store/ThunkFunctions/CategoriesFunctions";
import { STATUS } from "../../../utils/status";

function AdminEditCategoryHook(id) {
  let [img, setImg] = useState(uploadImg);
  let [name, setName] = useState("");
  let [selectedFile, setSelectedFile] = useState("");

  let dispatch = useDispatch();

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

  useEffect(() => {
    scrollTo(0, 0);
    dispatch(getSpecificCategory(id));
  }, []);

  let category = useSelector(specificCategory);

  //convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url?.split(".").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  useEffect(() => {
    if (category) {
      setName(category?.data?.name);
      setImg(category?.data?.image);
      convertURLtoFile(category?.data?.image).then((img) => setSelectedFile(img));
    }
  }, [category]);

  //Handle Submit
  let handleCategorySubmit = (e) => {
    e.preventDefault();

    if (name === "" || selectedFile === "") {
      toast.error("من فضلك اكمل البيانات");
      return;
    }

    console.log(name, selectedFile);

    let formData = new FormData();

    formData.append("name", name);
    formData.append("image", selectedFile);

    dispatch(updateCategory({id, formData}));
  };

  let categoryStatus = useSelector(updatedCategoryStatus);
  let categoryError = useSelector(updatedCategoryError);

  useEffect(() => {
    if (categoryStatus === STATUS.SUCCEEDED) {
      toast.success("تم تعديل التصنيف بنجاح");
      dispatch(reset());
    } else if (categoryStatus === STATUS.FAILED) {
      toast.error(categoryError);
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

export default AdminEditCategoryHook;
