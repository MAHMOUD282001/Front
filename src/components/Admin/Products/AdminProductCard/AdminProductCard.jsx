import { Star } from "@mui/icons-material";
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
import AdminProductCardLogic from "./AdminProductCardLogic";

function AdminProductCard({ product }) {
  const { open } = useContext(sidebarContext);

  let [handleRemoveProduct] = AdminProductCardLogic();

  return (
    <Grid item xs={12} sm={open ? 12 : 6} md={open ? 6 : 4} lg={open ? 4 : 3}>
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
            style={{ height: 200, width: "100%" }}
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
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
          <Button sx={{ width: "50%", color: "#62D0B6", py: "8px" }}>
            <Link
              style={{ color: "unset" }}
              to={`/admin/editProduct/${product?._id}`}
            >
              تعديل
            </Link>
          </Button>
          <Button
            sx={{ width: "50%", color: "#62D0B6", py: "8px" }}
            onClick={() => handleRemoveProduct(product?._id)}
          >
            حذف
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default AdminProductCard;
