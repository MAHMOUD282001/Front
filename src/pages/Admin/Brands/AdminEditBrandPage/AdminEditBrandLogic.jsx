import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import uploadImg from "../../../../assets/avatar.png";
import { STATUS } from "../../../../utils/status";
import {
  getSpecificBrand,
  updateBrand,
} from "../../../../store/ThunkFunctions/BrandsFunctions";
import {
  reset,
  specificBrand,
  updatedBrandError,
  updatedBrandStatus,
} from "../../../../store/BrandsSlice";
import { useNavigate } from "react-router-dom";

function AdminEditBrandLogic(id) {
  let [img, setImg] = useState(uploadImg);
  let [name, setName] = useState("");
  let [selectedFile, setSelectedFile] = useState("");

  let navigate = useNavigate();

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
    dispatch(getSpecificBrand(id));
  }, []);

  let brand = useSelector(specificBrand);

  //convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url?.split(".").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  useEffect(() => {
    if (brand) {
      setName(brand?.data?.name);

      //Solve Error Of Image In Backend When Update
      let firstPart = brand?.data?.image.slice(0, 29);
      let secondPart = brand?.data?.image.slice(29, 58);

      if (firstPart == secondPart) {
        setImg(brand?.data?.image.slice(29));
        convertURLtoFile(brand?.data?.image.slice(29)).then((image) =>
          setSelectedFile(image)
        );
      } else {
        setImg(brand?.data?.image);
        convertURLtoFile(brand?.data?.image).then((image) =>
          setSelectedFile(image)
        );
      }
    }
  }, [brand]);

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

    dispatch(updateBrand({ id, formData }));
  };

  let brandStatus = useSelector(updatedBrandStatus);
  let brandError = useSelector(updatedBrandError);

  useEffect(() => {
    if (brandStatus === STATUS.SUCCEEDED) {
      toast.success("تم تعديل الماركه بنجاح");
      dispatch(reset());
      navigate("/admin/allBrands");
    } else if (brandStatus === STATUS.FAILED) {
      toast.error(brandError);
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

export default AdminEditBrandLogic;
