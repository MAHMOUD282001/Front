import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllCategories } from "../../../../store/ThunkFunctions/CategoriesFunctions";
import { getAllBrands } from "../../../../store/thunkFunctions/brandsFunctions";
import { allCategories } from "../../../../store/CategoriesSlice";
import { allBrands } from "../../../../store/BrandsSlice";
import { getAllSubCategories } from "../../../../store/ThunkFunctions/SubCategoriesFunctions";
import { allSubCategories } from "../../../../store/SubCategoriesSlice";
import {
  editProduct,
  getSpecificProduct,
} from "../../../../store/ThunkFunctions/ProductsFunctions";
import {
  reset,
  specificProduct,
  updatedProductError,
  updatedProductStatus,
} from "../../../../store/ProductsSlice";
import { STATUS } from "../../../../utils/status";
import { useNavigate } from "react-router-dom";

function AdminEditProductLogic(id) {
  const [images, setImages] = useState([]);

  const [productName, setProductName] = useState("");

  const [productDesc, setProductDesc] = useState("");

  const [priceBefore, setPriceBefore] = useState();

  const [priceAfter, setPriceAfter] = useState();

  const [qty, setQty] = useState();

  const [catId, setCatId] = useState("");

  const [brandId, setBrandId] = useState("");

  const [options, setOptions] = useState([]);

  const [selectedSubCat, setSelectedSubCat] = useState([]);

  const [showPicker, setShowPicker] = useState(false);

  const [colors, setColors] = useState([]);

  let navigate = useNavigate();

  const onImgsChange = (imageList) => {
    // data for submit
    setImages(imageList);
  };

  let dispatch = useDispatch();
  useEffect(() => {
    scrollTo(0, 0);
    dispatch(getAllCategories());
    dispatch(getAllBrands());
    dispatch(getSpecificProduct(id));
  }, []);

  //Get Product
  let product = useSelector(specificProduct);

  //Get Categories
  let categories = useSelector(allCategories);

  //Get Brands
  let brands = useSelector(allBrands);

  //On Select Category
  let onSelectCategory = (e) => {
    setCatId(e.target.value);
  };

  //On Select Brand
  let onSelectBrand = (e) => {
    setBrandId(e.target.value);
  };

  // Handle Colors

  let handleChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowPicker(false);
  };

  let handleRemoveColor = (color) => {
    let newColors = colors.filter((cl) => cl !== color);
    setColors(newColors);
  };

  //On Multiselect Select
  let onMultiSelectSelect = (selecteList) => {
    setSelectedSubCat(selecteList);
  };

  //On Multiselect Remove
  let onMultiSelectRemove = (selecteList) => {
    setSelectedSubCat(selecteList);
  };

  //Get All Sub Categories
  useEffect(() => {
    if (catId) {
      dispatch(getAllSubCategories(catId));
      setSelectedSubCat([]);
    }
  }, [catId]);

  let subCategories = useSelector(allSubCategories);

  //Set Options Of Multiselect
  useEffect(() => {
    setOptions(subCategories?.data || []);
  }, [catId, subCategories]);

  //Set Values Of Inputs

  useEffect(() => {
    if (product) {
      product?.data?.images ? setImages(product?.data?.images) : "";
      setProductName(product?.data?.title);
      setProductDesc(product?.data?.description);
      setPriceBefore(product?.data?.price);
      setPriceAfter(product?.data?.priceAfterDiscount);
      setQty(product?.data?.quantity);
      setCatId(product?.data?.category);
      setBrandId(product?.data?.brand);
      product?.data?.availableColors
        ? setColors(product?.data?.availableColors)
        : "";
    }
  }, [product]);

  //convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  let handleProductSubmit = (e) => {
    e.preventDefault();

    if (
      catId.length <= 0 ||
      productName === "" ||
      productDesc === "" ||
      images.length <= 0 ||
      priceBefore === undefined ||
      priceAfter === undefined ||
      priceBefore <= 0 ||
      priceAfter <= 0 ||
      brandId.length <= 0
    ) {
      toast.error("من فضلك اكمل البيانات");
      return;
    } else if (priceBefore <= priceAfter || qty <= 0) {
      toast.error("من فضلك ادخل بيانات صحيحه");
      return;
    }

    let imgs = [];

    images.forEach((image) => {
      if (image.hasOwnProperty("file")) {
        imgs.push(image.file);
      } else {
        convertURLtoFile(image).then((val) => imgs.push(val));
      }
    });

    let formData = new FormData();

    formData.append("title", productName);
    formData.append("description", productDesc);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);
    priceAfter.length > 0
      ? formData.append("priceAfterDiscount", priceAfter)
      : "";
    formData.append("category", catId);
    formData.append("brand", brandId);

    colors.length > 0
      ? colors.map((color) => formData.append("availableColors", color))
      : "";
    selectedSubCat.length > 0
      ? selectedSubCat.map((subCat) =>
          formData.append("subcategory", subCat._id)
        )
      : "";

    setTimeout(() => {
      formData.append("imageCover", imgs[0]);
      imgs.map((img) => formData.append("images", img));

      //Dispatch After Convert imgs to Files
      dispatch(editProduct({ id, formData }));
    }, 1000);
  };

  let productStatus = useSelector(updatedProductStatus);

  let productError = useSelector(updatedProductError);

  useEffect(() => {
    if (productStatus === STATUS.SUCCEEDED) {
      toast.success("تم تعديل المنتج بنجاح");
      dispatch(reset());
      navigate("/admin/allProducts");
    } else if (productStatus === STATUS.FAILED) {
      toast.error(productError);
      dispatch(reset());
    }
  }, [productStatus]);

  return [
    images,
    productName,
    setProductName,
    productDesc,
    setProductDesc,
    priceBefore,
    setPriceBefore,
    priceAfter,
    setPriceAfter,
    qty,
    setQty,
    catId,
    brandId,
    options,
    selectedSubCat,
    showPicker,
    setShowPicker,
    colors,
    onImgsChange,
    categories,
    brands,
    onSelectCategory,
    onSelectBrand,
    handleChangeComplete,
    handleRemoveColor,
    onMultiSelectSelect,
    onMultiSelectRemove,
    handleProductSubmit,
    productStatus,
  ];
}

export default AdminEditProductLogic;
