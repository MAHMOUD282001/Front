import Services from "../../components/Home/Services/Services";
import Reductions from "../../components/Home/Reductions/Reductions";
import Slider from "../../components/Home/Slider/Slider";
import Products from "../../components/Products/Products/Products";
import HomeBrands from "../../components/Home/HomeBrands/HomeBrands";
import TopRatingsProductsLogic from "./TopRatingsProductsLogic";
import HomeCategories from "../../components/Home/HomeCategories/HomeCategories";
import TopSoldProductsLogic from "./TopSoldProductsLogic";
import { useEffect } from "react";
import { getCartItems } from "../../store/ThunkFunctions/CartFunctions";
import { useDispatch } from "react-redux";

function HomePage() {
  let [topSoldProducts, topSoldProductsStatus, topSoldProductsError] =
    TopSoldProductsLogic();

  let [topRatingsProducts, topRatingsProductsStatus, topRatingsProductsError] =
    TopRatingsProductsLogic();

  let dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <div>
      <Slider />

      <Services />

      <HomeCategories />

      <Products
        title="الاكثر مبيعا"
        desc="اليك اكثر المنتجات مبيعا"
        btnText="عرض الكل"
        path="/products"
        products={topSoldProducts?.data}
        productsStatus={topSoldProductsStatus}
        productsError={topSoldProductsError}
        lg={3}
        md={4}
        sm={6}
      />

      <Reductions />

      <Products
        title="الاعلى تقييما"
        desc="اليك اعلى المنتجات تقييما"
        btnText="عرض الكل"
        path="/products"
        products={topRatingsProducts?.data}
        productsStatus={topRatingsProductsStatus}
        productsError={topRatingsProductsError}
        lg={3}
        md={4}
        sm={6}
      />

      <HomeBrands
        title={"البراندات"}
        desc={"اليك بعض البراندات الخاصه بنا"}
        btnText={"المزيد"}
        path="/allBrands"
      />
    </div>
  );
}

export default HomePage;
