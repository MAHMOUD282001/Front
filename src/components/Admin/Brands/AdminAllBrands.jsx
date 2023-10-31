import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import MainTitle from "../../Utility/MainTitle";
import MainDashboardContent from "../../Utility/MainDashboardContent";
import { STATUS } from "../../../utils/status";
import Loader from "../../Utility/Loader";
import AdminBrandCard from "./AdminBrandCard/AdminBrandCard";
function AdminAllBrands({ brands, brandsStatus, brandsError }) {
  return (
    <MainDashboardContent>
      <Container>
        <MainTitle title={"ادارة جميع الماركات"} />

        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {brandsStatus === STATUS.LOADING ? (
            <Loader />
          ) : brandsStatus === STATUS.FAILED ? (
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
                {brandsError?.errors
                  ? brandsError?.errors?.map((err) => err.msg)
                  : brandsError?.message
                  ? brandsError?.message
                  : ""}
              </Typography>
            </Box>
          ) : brands?.data?.length > 0 ? (
            brands?.data?.map((brand) => (
              <AdminBrandCard key={brand._id} brand={brand} />
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
              <Typography variant="h5">لا يوجد ماركات</Typography>
            </Box>
          )}
        </Grid>
      </Container>
    </MainDashboardContent>
  );
}

export default AdminAllBrands;
