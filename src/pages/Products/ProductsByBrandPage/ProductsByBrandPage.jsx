import React from "react";
import { Box, Grid } from "@mui/material";
import Products from "../../../components/Products/Products/Products";
import PaginationComponent from "../../../components/Utility/PaginationComponent";
import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import ProductsByBrandPageLogic from "./ProductsByBrandPageLogic";

function ProductsByBrandPage() {
  let { id } = useParams();

  let [
    productsByBrand,
    productsByBrandStatus,
    productsByBrandError,
    page,
    getPage,
  ] = ProductsByBrandPageLogic(id);

  return (
    <Box sx={{ minHeight: "calc(100vh - 160px)", mb: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Products
              products={productsByBrand?.data}
              productsStatus={productsByBrandStatus}
              productsError={productsByBrandError}
              title={`هناك ${productsByBrand?.results || ""} منتجات`}
              lg={4}
              md={6}
              sm={12}
            />
          </Grid>
        </Grid>
      </Container>
      {productsByBrand?.paginationResult?.numberOfPages > 1 ? (
        <PaginationComponent
          pageCount={productsByBrand?.paginationResult?.numberOfPages}
          getPage={getPage}
          page={page}
        />
      ) : (
        ""
      )}
    </Box>
  );
}

export default ProductsByBrandPage;
