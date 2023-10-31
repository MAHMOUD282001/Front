import { Box, Grid } from "@mui/material";
import Products from "../../../components/Products/Products/Products";
import FilterTitle from "../../../components/Utility/FilterTitle";
import PaginationComponent from "../../../components/Utility/PaginationComponent";
import ProductsPageLogic from "./ProductsPageLogic";
import { Container } from "@material-ui/core";
import SideProductsFilter from "../../../components/Utility/SidebarProductsFilter/SideProductsFilter";

function ProductsPage() {
  let [products, productsStatus, productsError, page, getPage, getProducts] =
    ProductsPageLogic();

  return (
    <Box sx={{ minHeight: "calc(100vh - 160px)", mb: 5 }}>
      <Container maxWidth="lg">
        <FilterTitle
          handleSort={getProducts}
          title={`هناك ${
            products?.results === undefined ? "" : products?.results
          } منتج`}
        />
        <Grid container spacing={2}>
          <Grid item lg={2} md={3} sm={4}>
            <SideProductsFilter />
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

export default ProductsPage;
