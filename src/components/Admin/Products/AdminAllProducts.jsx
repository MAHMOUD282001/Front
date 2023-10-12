import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import MainTitle from "../../Utility/MainTitle";
import MainDashboardContent from "../../Utility/MainDashboardContent";
import { STATUS } from "../../../utils/status";
import Loader from "../../Utility/Loader";
import AdminProductCard from "./AdminProductCard";

function AdminAllProducts({products, productsStatus, productsError}) {

  return (
    <MainDashboardContent>
      <Container>
        <MainTitle title={"ادارة جميع المنتجات"} />

        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {productsStatus === STATUS.LOADING ? (
            <Loader />
          ) : productsStatus === STATUS.FAILED ? (
            <Box
              sx={{
                width: "100%",
                padding: "2rem",
                background: "#F8F8F8",
                textAlign: "center",
                borderRadius: "4px",
              }}
            >
              <Typography variant="h5">{productsError}</Typography>
            </Box>
          ) : products?.data?.length > 0 ? (
            products?.data?.map((product) => (
              <AdminProductCard key={product._id} product={{ ...product }} />
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

export default AdminAllProducts;
