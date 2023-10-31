import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { specificCategory } from "../../../store/CategoriesSlice";
import { specificBrand } from "../../../store/BrandsSlice";
import { getSpecificBrand } from "../../../store/ThunkFunctions/BrandsFunctions";
import { getSpecificCategory } from "../../../store/ThunkFunctions/CategoriesFunctions";
import { AddToCart } from "../../../store/ThunkFunctions/CartFunctions";
import {
  addedItem,
  addedItemError,
  addedItemStatus,
  resetCart,
} from "../../../store/CartSlice";
import { STATUS } from "../../../utils/status";
import { toast } from "react-toastify";

function ProductInfoLogic(productId, categoryId, brandId, product) {
  let dispatch = useDispatch();

  useEffect(() => {
    categoryId ? dispatch(getSpecificCategory(categoryId)) : "";
    brandId ? dispatch(getSpecificBrand(brandId)) : "";
  }, [categoryId, brandId]);

  let category = useSelector(specificCategory);
  let brand = useSelector(specificBrand);

  let [colorIndex, setColorIndex] = useState("");

  let [colorCode, setColorCode] = useState("");

  let handleColorClick = (index, color) => {
    setColorIndex(index);
    setColorCode(color);
  };

  let handleAddToCart = () => {
    if (product?.data?.availableColors?.length > 0) {
      if (colorCode === "") {
        toast.error("يجب اختيار اللون");
        return;
      }
    } else {
      setColorCode("");
    }

    if (product?.data?.quantity < 1) {
      toast.error("لا يمكن اضافه هذا المنتج للسله لعدم توافره");
      return;
    }

    let data = {
      productId: productId,
      color: colorCode,
    };
    dispatch(AddToCart(data));
  };

  let addedItemToCart = useSelector(addedItem);
  let addedItemToCartStatus = useSelector(addedItemStatus);
  let addedItemToCartError = useSelector(addedItemError);

  useEffect(() => {
    if (addedItemToCartStatus === STATUS.SUCCEEDED) {
      toast.success("تم اضافه المنتج الى السله بنجاح");
      dispatch(resetCart());
    } else if (addedItemToCartStatus === STATUS.FAILED) {
      if (addedItemToCartError?.errors) {
        addedItemToCartError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (addedItemToCartError?.message) {
        toast.error(addedItemToCartError?.message);
      }
      dispatch(resetCart());
    }
  }, [addedItemToCartStatus]);

  return [
    category,
    brand,
    colorIndex,
    addedItemToCartStatus,
    handleColorClick,
    handleAddToCart,
  ];
}

export default ProductInfoLogic;
