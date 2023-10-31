import { Box, Grid } from "@mui/material";
import Products from "../../../components/Products/Products/Products";
import PaginationComponent from "../../../components/Utility/PaginationComponent";
import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import ProductsByCategoryPageLogic from "./ProductsByCategoryPageLogic";

function ProductsByCategoryPage() {
  let { id } = useParams();

  let [
    productsByCategory,
    productsByCategoryStatus,
    productsByCategoryError,
    page,
    getPage,
  ] = ProductsByCategoryPageLogic(id);
  
  return (
    <Box sx={{ minHeight: "calc(100vh - 160px)", mb: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Products
              products={productsByCategory?.data}
              productsStatus={productsByCategoryStatus}
              productsError={productsByCategoryError}
              title={`هناك ${productsByCategory?.results || ""} منتجات`}
              lg={4}
              md={6}
              sm={12}
            />
          </Grid>
        </Grid>
      </Container>
      {productsByCategory?.paginationResult?.numberOfPages > 1 ? (
        <PaginationComponent
          pageCount={productsByCategory?.paginationResult?.numberOfPages}
          getPage={getPage}
          page={page}
        />
      ) : (
        ""
      )}
    </Box>
  );
}

export default ProductsByCategoryPage;
