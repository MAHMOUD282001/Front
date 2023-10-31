import {
  Favorite,
  FavoriteBorderOutlined,
  ShoppingBagOutlined,
  Star,
} from "@mui/icons-material";
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
import ProductCardLogic from "./ProductCardLogic";

function ProductCard({ product, lg, md, sm, favProducts, getIsFav }) {
  let [theme, isFav, handleFavourite] = ProductCardLogic(
    favProducts,
    product,
    getIsFav
  );

  return (
    <Grid item lg={lg} md={md} sm={sm} xs={12}>
      <Card
        sx={{
          textAlign: "center",
          p: 2,
          height: 450,
          position: "relative",
          zIndex: "900!important",
        }}
        className="card"
      >
        <Link to={`/products/${product?._id}`}>
          <img
            src={product?.imageCover}
            style={{ height: 200, objectFit: "contain" }}
          />
        </Link>

        <CardContent>
          <Typography
            variant="body1"
            sx={{ fontSize: 20, color: "#333333", mb: 2 }}
          >
            {product?.title}
          </Typography>

          <Typography variant="body2" sx={{ color: "#666666" }}>
            {product?.description?.slice(
              0,
              product?.description?.length > 60
                ? 60
                : product?.description?.length
            )}
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
            {product?.priceAfterDiscount ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: { sm: "row", xs: "column" },
                  gap: 1,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "#F55157", fontWeight: "600", fontSize: 20 }}
                >
                  {product?.priceAfterDiscount} ج.م
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
                  {product?.price} ج.م
                </Typography>
              </Box>
            ) : (
              <Typography
                variant="body1"
                sx={{ color: "#F55157", fontWeight: "600", fontSize: 20 }}
              >
                {product?.price} ج.م
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
              {product?.ratingsAverage || 0} <Star />
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
          <Link
            to={`/products/${product?._id}`}
            style={{ width: "70%", py: "8px", height: "45px" }}
            className="add-to-cart"
          >
            اضف للسله <ShoppingBagOutlined />
          </Link>
          <Button
            sx={{
              width: "20%",
              color: theme.palette.primary.main,
              py: "8px",
              marginLeft: "0!important",
              height: "45px",
            }}
            onClick={() => handleFavourite(product?._id)}
          >
            {isFav === false ? <FavoriteBorderOutlined /> : <Favorite />}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProductCard;
