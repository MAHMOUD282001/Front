import { Grid } from "@material-ui/core";
import { Star } from "@mui/icons-material";
import { Box, Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function UserAllOrdersCardProductInfo({ cartItem }) {
  return (
    <Box sx={{ mb: 7 }}>
      <Grid
        container
        spacing={3}
        style={{ height: "100%", alignItems: "center" }}
      >
        <Grid
          item
          lg={2}
          md={3}
          xs={12}
          style={{
            height: { xs: "200px", md: "100%" },
            alignItems: "center",
          }}
        >
          <Link to={`/products/${cartItem?.product?._id}`}>
            <img
              src={
                "http://127.0.0.1:8000/products/" +
                cartItem?.product?.imageCover
              }
              alt="Cart Img"
              style={{
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
          </Link>
        </Grid>
        <Grid item lg={10} md={9} xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              mt: { xs: 3, md: 0 },
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
              4.5 <Star />
            </Typography>
          </Box>

          {cartItem?.color ? (
            <Box
              sx={{
                backgroundColor: cartItem?.color,
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                mt: 2,
                mx: { xs: "auto", sm: "0" },
              }}
            ></Box>
          ) : (
            ""
          )}

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
              <TextField
                type="number"
                sx={{ width: "100px" }}
                inputProps={{ style: { padding: "10px 14px" } }}
                value={cartItem?.count}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserAllOrdersCardProductInfo;
