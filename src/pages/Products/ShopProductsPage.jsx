import { Box, Container, Grid } from "@mui/material";
import React from "react";
import SideFilter from "../../components/Utility/SideFilter";
import Products from "../../components/Products/Products";
import FilterTitle from "../../components/Utility/FilterTitle";
import PaginationComponent from "../../components/Utility/PaginationComponent";
import ProductsPageHook from "../../Logic/Product/ProductsPageHook";
import { useEffect } from "react";

function ShopProductsPage() {
  let [products, productsStatus, productsError, page, getPage, getProducts] =
    ProductsPageHook();

  return (
    <Box sx={{ minHeight: "calc(100vh - 160px)", mb: 5 }}>
      <Container>
        <FilterTitle
          handleSort={getProducts}
          title={`هناك ${
            products?.results === undefined ? "" : products?.results
          } منتج`}
        />
        <Grid container spacing={2}>
          <Grid item lg={2} md={3} sm={4}>
            <SideFilter />
          </Grid>
          <Grid item lg={10} md={9} sm={8}>
            <Products
              isShopProductsPage={true}
              products={products?.data}
              productsStatus={productsStatus}
              productsError={productsError}
              lg={4}
              md={6}
              sm={12}
            />
          </Grid>
        </Grid>
      </Container>
      {products?.paginationResult?.numberOfPages > 1 ? (
        <PaginationComponent
          pageCount={products?.paginationResult?.numberOfPages}
          getPage={getPage}
          page={page}
        />
      ) : (
        ""
      )}
    </Box>
  );
}

export default ShopProductsPage;
