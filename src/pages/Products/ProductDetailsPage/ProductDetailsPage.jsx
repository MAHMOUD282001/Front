import { Box, Container } from "@mui/material";
import ProductDetails from "../../../components/Products/ProductDetails";
import RateContent from "../../../components/Rate/RateContent/RateContent";
import Products from "../../../components/Products/Products/Products";
import { useParams } from "react-router-dom";
import ProductDetailsPageLogic from "./ProductDetailsPageLogic";

function ProductDetailsPage() {
  let { id } = useParams();

  let [product, products, productsStatus, productsError] =
    ProductDetailsPageLogic(id);

  let actualProducts = products?.data?.filter(
    (prod) => prod?.id !== product?.data?.id
  );

  let ratingAvg = product?.data?.ratingsAverage;

  let ratingQty = product?.data?.ratingsQuantity;

  return (
    <Box sx={{ minHeight: "calc(100vh - 160px)" }}>
      <Container>
        <ProductDetails product={product} />
        <RateContent ratingAvg={ratingAvg} ratingQty={ratingQty} />
      </Container>

      <Products
        title="منتجات قد تعجبك"
        desc="اليك اكثر المنتجات تقييما من قبل عملائنا"
        products={actualProducts}
        productsStatus={productsStatus}
        productsError={productsError}
        lg={3}
        md={4}
        sm={6}
      />
    </Box>
  );
}

export default ProductDetailsPage;
