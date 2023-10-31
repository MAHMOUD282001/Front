import { Box, Grid, Typography } from "@mui/material";
import MainTitle from "../../Utility/MainTitle";
import ProductCard from "../ProductCard/ProductCard";
import { STATUS } from "../../../utils/status";
import Loader from "../../Utility/Loader";
import ProductsLogic from "./ProductsLogic";
import { Container } from "@material-ui/core";

function Products({
  title,
  desc,
  btnText,
  path,
  isShopProductsPage,
  products,
  productsStatus,
  productsError,
  lg,
  md,
  sm,
}) {
  let [favProducts, getIsFav] = ProductsLogic();

  return (
    <Box className="products" sx={{ mb: 5 }}>
      <Container maxWidth={"lg"}>
        {isShopProductsPage ? (
          ""
        ) : (
          <MainTitle title={title} desc={desc} btnText={btnText} path={path} />
        )}

        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {productsStatus === STATUS.LOADING ? (
            <Loader />
          ) : productsStatus === STATUS.FAILED ? (
            <Box
              sx={{
                width: "100%",
                padding: "2rem",
                background: "#F8F8F8",
                textAlign: "center",
                borderRadius: "4px",
              }}
            >
              <Typography variant="h5">
                {productsError?.errors
                  ? productsError?.errors?.map((err) => err.msg)
                  : productsError?.message
                  ? productsError?.message
                  : ""}
              </Typography>
            </Box>
          ) : products?.length > 0 ? (
            products?.map((product) => (
              <ProductCard
                key={product._id}
                product={{ ...product }}
                lg={lg}
                md={md}
                sm={sm}
                favProducts={favProducts}
                getIsFav={getIsFav}
              />
            ))
          ) : (
            <Box
              sx={{
                width: "100%",
                padding: "2rem",
                background: "#F8F8F8",
                textAlign: "center",
                borderRadius: "4px",
              }}
            >
              <Typography variant="h5">لا يوجد منتجات</Typography>
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default Products;
