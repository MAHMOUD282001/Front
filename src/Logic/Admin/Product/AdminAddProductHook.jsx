import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllCategories } from "../../../store/ThunkFunctions/CategoriesFunctions";
import { getAllBrands } from "../../../store/thunkFunctions/brandsFunctions";
import { allCategories } from "../../../store/CategoriesSlice";
import { allBrands } from "../../../store/BrandsSlice";
import { getAllSubCategories } from "../../../store/ThunkFunctions/SubCategoriesFunctions";
import { allSubCategories } from "../../../store/SubCategoriesSlice";
import { createProduct } from "../../../store/ThunkFunctions/ProductsFunctions";
import {
  addedProductError,
  addedProductStatus,
  reset,
  specificProductError,
  specificProductStatus,
} from "../../../store/ProductsSlice";
import { STATUS } from "../../../utils/status";

function AdminAddProductHook() {
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

  const onImgsChange = (imageList) => {
    // data for submit
    setImages(imageList);
  };

  let dispatch = useDispatch();
  useEffect(() => {
    scrollTo(0, 0);
    dispatch(getAllCategories());
    dispatch(getAllBrands());
  }, []);

  let categories = useSelector(allCategories);

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
    dispatch(getAllSubCategories(catId));
    setSelectedSubCat([]);
  }, [catId]);

  let subCategories = useSelector(allSubCategories);

  //Set Options Of Multiselect
  useEffect(() => {
    setOptions(subCategories?.data || []);
  }, [catId, subCategories]);

  let handleProductSubmit = (e) => {
    e.preventDefault();

    if (
      catId.length <= 0 ||
      productName === "" ||
      productDesc === "" ||
      images.length <= "" ||
      priceBefore <= 0
    ) {
      toast.error("من فضلك اكمل البيانات");
      return;
    } else if (priceBefore <= priceAfter) {
      toast.error("من فضلك ادخل بيانات صحيحه");
    }

    let imgs = images.map((image) => image.file);

    let formData = new FormData();

    formData.append("title", productName);
    formData.append("description", productDesc);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);
    formData.append("imageCover", images[0].file);
    formData.append("category", catId);
    brandId.length > 0 ? formData.append("brand", brandId) : "";
    imgs.map((img) => formData.append("images", img));
    colors.length > 0
      ? colors.map((color) => formData.append("availableColors", color))
      : "";
    selectedSubCat.length > 0
      ? selectedSubCat.map((subCat) =>
          formData.append("subcategory", subCat._id)
        )
      : "";

    dispatch(createProduct(formData));
  };

  let productStatus = useSelector(addedProductStatus);

  let productError = useSelector(addedProductError);

  useEffect(() => {
    if (productStatus === STATUS.SUCCEEDED) {
      toast.success("تم اضافه المنتج بنجاح");
      setProductName("");
      setProductDesc("");
      setPriceAfter("");
      setPriceBefore("");
      setQty("");
      setImages([]);
      setCatId("");
      onMultiSelectRemove([]);
      setBrandId("");
      setColors([]);
      
      dispatch(reset());
    } else if (productStatus === STATUS.FAILED) {
      toast.error(productError.message);
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

export default AdminAddProductHook;
