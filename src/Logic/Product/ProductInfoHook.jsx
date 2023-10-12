import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificCategory } from "../../store/ThunkFunctions/CategoriesFunctions";
import { getSpecificProductsByCategory } from "../../store/ThunkFunctions/ProductsFunctions";
import { specificCategory } from "../../store/CategoriesSlice";
import { specificBrand } from "../../store/BrandsSlice";
import { getSpecificBrand } from "../../store/ThunkFunctions/BrandsFunctions";

function ProductInfoHook(categoryId, brandId) {
  let dispatch = useDispatch();

  useEffect(() => {
    categoryId ? dispatch(getSpecificCategory(categoryId)) : "";
    brandId ? dispatch(getSpecificBrand(brandId)) : "";
  }, [categoryId, brandId]);

  let category = useSelector(specificCategory);
  let brand = useSelector(specificBrand);

  return [category, brand];
}

export default ProductInfoHook;
