import { Box, Grid, Typography } from "@mui/material";
import MainTitle from "../../../Utility/MainTitle";
import MainDashboardContent from "../../../Utility/MainDashboardContent";
import { STATUS } from "../../../../utils/status";
import Loader from "../../../Utility/Loader";
import UserFavoriteProductsLogic from "./UserFavoriteProductsLogic";
import { Container } from "@material-ui/core";
import UserFavoriteProductsCard from "../UserFavoriteProductsCard/UserFavoriteProductsCard";

function UserFavoriteProducts() {
  let [wishlistStatus, wishlistError, favProducts, getIsFav] =
    UserFavoriteProductsLogic();

  return (
    <MainDashboardContent>
      <Container maxWidth="lg">
        <MainTitle title={"المنتجات المفضله"} />

        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {wishlistStatus === STATUS.LOADING ? (
            <Loader />
          ) : wishlistStatus === STATUS.FAILED ? (
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
                {wishlistError?.errors
                  ? wishlistError?.errors?.map((err) => err.msg)
                  : wishlistError?.message
                  ? wishlistError?.message
                  : ""}
              </Typography>
            </Box>
          ) : favProducts?.length > 0 ? (
            favProducts?.map((favProduct) => (
              <UserFavoriteProductsCard
                key={favProduct._id}
                favProduct={favProduct}
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
    </MainDashboardContent>
  );
}

export default UserFavoriteProducts;
