import { Box, Grid } from "@mui/material";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

function ProductDetails({ product }) {
  return (
    <Box sx={{ my: 5 }}>
      <Grid
        container
        spacing={{ md: 2, xs: 0 }}
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          item
          lg={4}
          md={6}
          xs={12}
          sx={{
            height: "500px",
            width: "100%",
          }}
        >
          <ProductGallery images={product?.data?.images} />
        </Grid>

        <Grid
          item
          lg={8}
          md={6}
          xs={12}
          sx={{ height: "100%", width: "100%", mt: { md: 0, xs: 3 } }}
        >
          <ProductInfo product={product} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetails;
