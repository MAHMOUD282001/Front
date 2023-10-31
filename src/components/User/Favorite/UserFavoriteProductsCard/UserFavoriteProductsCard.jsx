import { Favorite, FavoriteBorderOutlined, Star } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { sidebarContext } from "../../../../context/SidebarContext";
import UserFavoriteProductsCardLogic from "./UserFavoriteProductsCardLogic";

function UserFavoriteProductsCard({ favProduct, favProducts, getIsFav }) {
  const { open } = useContext(sidebarContext);
  let [theme, isFav, handleFavourite] = UserFavoriteProductsCardLogic(
    favProducts.map((product) => product._id),
    favProduct,
    getIsFav
  );

  return (
    <Grid item xs={12} sm={open ? 12 : 6} md={open ? 6 : 4} lg={open ? 4 : 3}>
      <Card
        sx={{
          textAlign: "center",
          p: 2,
          height: 400,
          position: "relative",
          zIndex: "900!important",
        }}
        className="card"
      >
        <Link to={`/products/${favProduct?._id}`}>
          <img
            src={"http://127.0.0.1:8000/products/" + favProduct?.imageCover}
            style={{ height: 200 }}
          />
        </Link>

        <CardContent>
          <Typography variant="body1" sx={{ color: "#333333", mb: 2 }}>
            {favProduct?.title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
              position: "absolute",
              bottom: "80px",
              right: "0",
              width: "100%",
              padding: "0 32px",
            }}
          >
            {favProduct?.priceAfterDiscount ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#F55157", fontWeight: "600", fontSize: 20 }}
                >
                  {favProduct?.priceAfterDiscount} ج.م
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#62d0b6",
                    fontWeight: "600",
                    fontSize: 16,
                    position: "relative",
                    "&::before": {
                      content: "''",
                      display: "block",
                      position: "absolute",
                      width: "1px",
                      height: "70px",
                      background: "#62d0b6",
                      transform: "rotate(85deg)",
                      top: "-20px",
                      right: "27px",
                    },
                  }}
                  className="price"
                >
                  {favProduct?.price} ج.م
                </Typography>
              </Box>
            ) : (
              <Typography
                variant="body1"
                sx={{ color: "#F55157", fontWeight: "600", fontSize: 20 }}
              >
                {favProduct?.price} ج.م
              </Typography>
            )}

            <Typography
              variant="body2"
              sx={{
                color: "#ffdf00",
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
              className="stars"
            >
              {favProduct?.ratingsAverage || 0} <Star />
            </Typography>
          </Box>
        </CardContent>
        <CardActions
          sx={{
            position: "absolute",
            bottom: "8px",
            left: 0,
            right: 0,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{ width: "100%", color: theme.palette.primary.main, py: "8px" }}
            onClick={() => handleFavourite(favProduct?._id)}
          >
            {isFav === false ? <FavoriteBorderOutlined /> : <Favorite />}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default UserFavoriteProductsCard;
