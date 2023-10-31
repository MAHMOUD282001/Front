import { Box, Grid, Typography } from "@mui/material";
import { Delete, Star } from "@mui/icons-material";
import CartItemLogic from "./CartItemLogic";

function CartItem({ cartItem }) {
  let [
    handleDeleteCartItem,
    cartItemCount,
    product,
    handleDecreaseCount,
    handleIncreaseCount,
  ] = CartItemLogic(cartItem);

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: "10px",
        padding: "20px",
        mb: 2,
      }}
    >
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid
          item
          lg={2}
          md={3}
          xs={12}
          sx={{ height: { xs: "200px", md: "100%" } }}
        >
          <img
            src={
              "http://127.0.0.1:8000/products/" + cartItem?.product?.imageCover
            }
            alt="Cart Img"
          />
        </Grid>
        <Grid item lg={10} md={9} xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography variant="body2" sx={{ color: "#666666" }}>
              {cartItem?.product?.category?.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
              onClick={() => handleDeleteCartItem(cartItem?._id)}
            >
              <Delete sx={{ fontSize: "16px" }} />
              <Typography variant="body2" sx={{ color: "#666666" }}>
                ازالة
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "space-between" },
              flexWrap: "wrap",
              gap: { xs: 3, sm: 0 },
            }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: { xs: "center", sm: "right" } }}
            >
              {cartItem?.product?.title}
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
              {cartItem?.product?.ratingsAverage || 0} <Star />
            </Typography>
          </Box>

          <Box sx={{ mt: 1, textAlign: { xs: "center", sm: "right" } }}>
            <Typography
              variant="body2"
              sx={{ color: "#666666", display: "inline" }}
            >
              الماركة:{" "}
            </Typography>
            <Typography variant="h5" sx={{ color: "#000", display: "inline" }}>
              {cartItem?.product?.brand?.name}
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: cartItem?.color,
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              mt: 1,
              mx: { xs: "auto", sm: "0" },
            }}
          ></Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "space-between" },
              flexWrap: { xs: "wrap", sm: "nowrap" },
              gap: { xs: 3, sm: 0 },
              mt: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body2" sx={{ color: "#666666" }}>
                الكميه:{" "}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid #62D0B6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all .5s",
                    userSelect: "none",
                    fontSize: "22px",

                    "&:hover": {
                      backgroundColor: "#62D0B6",
                      color: "#fff",
                    },
                  }}
                  onClick={handleIncreaseCount}
                >
                  +
                </Box>

                <Box
                  sx={{
                    width: "50px",
                    height: "40px",
                    border: "1px solid #62D0B6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    outline: "none",
                    fontSize: "16px",
                  }}
                >
                  {cartItemCount}
                </Box>

                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid #62D0B6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all .5s",
                    userSelect: "none",
                    fontSize: "22px",
                    "&:hover": {
                      backgroundColor: "#62D0B6",
                      color: "#fff",
                    },
                  }}
                  onClick={handleDecreaseCount}
                >
                  -
                </Box>
              </Box>
            </Box>

            <Typography variant="h6" sx={{ color: "#000" }}>
              {cartItem?.price} ج.م
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CartItem;
