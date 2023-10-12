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
import AddToWishlistHook from "../../Logic/Wishlist/AddToWishlistHook";
import { useDispatch, useSelector } from "react-redux";
import { createWishlist } from "../../store/ThunkFunctions/WishlistFunctions";
import { useEffect } from "react";
import { STATUS } from "../../utils/status";
import { toast } from "react-toastify";
import {
  addedWishlistItemError,
  addedWishlistItemStatus,
} from "../../store/WishlistSlice";

function ProductCard({ product, lg, md, sm }) {
  let [theme, isFav, handleFavourite] = AddToWishlistHook();

  return (
    <Grid item lg={lg} md={md} sm={sm} xs={12}>
      <Card
        sx={{
          textAlign: "center",
          p: 2,
          height: 450,
          position: "relative",
        }}
        className="card"
      >
        <Link to={`/products/${product?._id}`}>
          <img
            src={product?.imageCover}
            style={{ height: 150, objectFit: "cover" }}
          />
        </Link>

        <CardContent>
          <Typography variant="body1" sx={{ color: "#333333", mb: 2 }}>
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
            <Typography
              variant="body1"
              sx={{ color: "#F55157", fontWeight: "600", fontSize: 16 }}
            >
              {product?.price} ج.م
            </Typography>

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
          <Button sx={{ width: "70%", py: "8px" }} className="add-to-cart">
            اضف للسله <ShoppingBagOutlined />
          </Button>
          <Button
            sx={{ width: "20%", color: theme.palette.primary.main, py: "8px" }}
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
