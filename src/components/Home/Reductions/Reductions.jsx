import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import lapImg from "../../../assets/lap.png";
import CommonBtn from "../../Utility/CommonBtn";

function Reductions() {
  return (
    <Box sx={{ background: "#000", py: 10 }}>
      <Container
        maxWidth={"lg"}
        sx={{
          height: "100%",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ height: "100%", display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ color: "#fff" }}>
              <Typography
                variant="h2"
                sx={{ fontWeight: "600", fontSize: { xs: 20, sm: 30 } }}
              >
                أفضل التخفيضات 2023
              </Typography>
              <Typography variant="body2" sx={{ my: 3 }}>
                متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي
                بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل
                بالتخفيضات على المنتجات{" "}
              </Typography>
              <CommonBtn
                width={"200px"}
                height={"56px"}
                text={"اكتشف المزيد"}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: "100%" }}>
              <img src={lapImg} style={{ width: "100%", height: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Reductions;
