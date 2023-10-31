import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../store/thunkFunctions/categoriesFunctions";
import { getAllBrands } from "../../../store/thunkFunctions/brandsFunctions";
import { allBrands, allBrandsStatus } from "../../../store/BrandsSlice";
import {
  allCategories,
  allCategoriesStatus,
} from "../../../store/CategoriesSlice";
import ProductsPageHook from "../../../pages/Products/ProductsPage/ProductsPageLogic";

function SidebarProductsFilterLogic() {
  let [catChecked, setCatChecked] = useState([]);
  let [brandChecked, setBrandChecked] = useState([]);
  let [priceFrom, setPriceFrom] = useState(0);
  let [priceTo, setPriceTo] = useState(0);
  let [, , , , , getProducts] = ProductsPageHook();

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllBrands());
  }, []);

  let categories = useSelector(allCategories);
  let categoriesStatus = useSelector(allCategoriesStatus);

  let brands = useSelector(allBrands);
  let brandsStatus = useSelector(allBrandsStatus);

  let handleCategoryChecked = (e) => {
    let value = e.target.value;
    let checked = e.target.checked;

    if (value === "0" && checked) {
      setCatChecked([]);
    } else {
      if (checked) {
        setCatChecked([...catChecked, value]);
      } else {
        let newCatChecked = catChecked.filter((cat) => cat != value);
        setCatChecked(newCatChecked);
      }
    }
  };

  //Get Products onChange Categories in Sidebar
  useEffect(() => {
    let queryCatString = catChecked
      .map((cat) => "category[in][]=" + cat)
      .join("&");

    localStorage.setItem("catChecked", queryCatString);
    getProducts();
  }, [catChecked]);

  let handleBrandChecked = (e) => {
    let value = e.target.value;
    let checked = e.target.checked;

    if (value === "0" && checked) {
      setBrandChecked([]);
    } else {
      if (checked) {
        setBrandChecked([...brandChecked, value]);
      } else {
        let newBrandChecked = brandChecked.filter((brand) => brand != value);
        setBrandChecked(newBrandChecked);
      }
    }
  };

  //Get Products onChange Brands in Sidebar
  useEffect(() => {
    let queryBrandString = brandChecked
      .map((brand) => "brand[in][]=" + brand)
      .join("&");

    localStorage.setItem("brandChecked", queryBrandString);
    getProducts();
  }, [brandChecked]);

  let handlePriceFrom = (e) => {
    setPriceFrom(e.target.value);
    localStorage.setItem("priceFrom", e.target.value);
  };

  let handlePriceTo = (e) => {
    setPriceTo(e.target.value);
    localStorage.setItem("priceTo", e.target.value);
  };

  //onChange Price
  useEffect(() => {
    getProducts();
  }, [priceTo, priceFrom]);

  return [
    categories,
    categoriesStatus,
    brands,
    brandsStatus,
    handleCategoryChecked,
    handleBrandChecked,
    handlePriceFrom,
    handlePriceTo,
  ];
}

export default SidebarProductsFilterLogic;
