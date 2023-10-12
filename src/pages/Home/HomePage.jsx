import Services from "../../components/Home/Services/Services";
import Reductions from "../../components/Home/Reductions/Reductions";
import Slider from "../../components/Home/Slider/Slider";
import Products from "../../components/Products/Products";
import HomeBrands from "../../components/Home/HomeBrands/HomeBrands";
import HomeProductsHook from "../../Logic/Home/HomeProductsHook";
import HomeCategories from "../../components/Home/HomeCategories/HomeCategories";

function HomePage() {
  let [products, productsStatus, productsError] = HomeProductsHook();


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
        products={products}
        productsStatus={productsStatus}
        productsError={productsError}
        lg={3}
        md={4}
        sm={6}
      />

      <Reductions />

      {/* <Products
        title="الاعلى تقييما"
        desc="اليك اعلى المنتجات تقييما"
        btnText="عرض الكل"
        path="/products"
        products={products}
        productsStatus={productsStatus}
        productsError={productsError}
        lg={3}
        md={4}
        sm={6}
      /> */}

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
