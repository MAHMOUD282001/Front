import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { STATUS } from "../../../utils/status";
import {
  reset,
  specificBrandError,
  specificBrandStatus,
} from "../../../store/BrandsSlice";
import { createBrand } from "../../../store/thunkFunctions/brandsFunctions";
import uploadImg from "../../../assets/avatar.png";

function AddBrandHook() {
  let [img, setImg] = useState(uploadImg);
  let [name, setName] = useState("");
  let [selectedFile, setSelectedFile] = useState("");

  let dispatch = useDispatch();

  let brandStatus = useSelector(specificBrandStatus);

  let brandError = useSelector(specificBrandError);

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
  let handleBrandSubmit = (e) => {
    e.preventDefault();

    if (name === "" || selectedFile === "") {
      toast.error("من فضلك اكمل البيانات");
      return;
    }

    let formData = new FormData();

    formData.append("name", name);
    formData.append("image", selectedFile);

    dispatch(createBrand(formData));
  };

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (brandStatus === STATUS.SUCCEEDED) {
      toast.success("تم اضافه التصنيف بنجاح");
      setImg(uploadImg);
      setSelectedFile("");
      setName("");
      dispatch(reset());
    } else if (brandStatus === STATUS.FAILED) {
      toast.error(brandError.message);
      dispatch(reset());
    }
  }, [brandStatus]);

  return [
    img,
    name,
    brandStatus,
    handleNameChange,
    handleImgChange,
    handleBrandSubmit,
  ];
}

export default AddBrandHook;
