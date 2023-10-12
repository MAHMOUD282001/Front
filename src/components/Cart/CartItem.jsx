import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import cartImg from "../../assets/mobile.png";
import { Delete, DeleteOutline, Star } from "@mui/icons-material";

function CartItem() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: "10px",
        padding: "20px",
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
          <img src={cartImg} alt="Cart Img" />
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
              الالكترونيات
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
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
              ايفون XS
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

          <Box sx={{ mt: 1, textAlign: { xs: "center", sm: "right" } }}>
            <Typography
              variant="body2"
              sx={{ color: "#666666", display: "inline" }}
            >
              الماركة:{" "}
            </Typography>
            <Typography variant="h5" sx={{ color: "#000", display: "inline" }}>
              ابل
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#f00",
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
              <TextField
                type="number"
                sx={{ width: "100px" }}
                inputProps={{ style: { padding: "10px 14px" } }}
              />
            </Box>

            <Typography variant="h6" sx={{ color: "#000" }}>
              3000 جنيه
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CartItem;
