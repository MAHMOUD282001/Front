import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import MainTitle from "../../Utility/MainTitle";
import MainDashboardContent from "../../Utility/MainDashboardContent";
import { STATUS } from "../../../utils/status";
import Loader from "../../Utility/Loader";
import AdminCategoryCard from "./AdminCategoryCard/AdminCategoryCard";
function AdminAllCategories({ categories, categoriesStatus, categoriesError }) {
  return (
    <MainDashboardContent>
      <Container>
        <MainTitle title={"ادارة جميع التصنيفات الرئيسيه"} />

        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {categoriesStatus === STATUS.LOADING ? (
            <Loader />
          ) : categoriesStatus === STATUS.FAILED ? (
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
                {categoriesError?.errors
                  ? categoriesError?.errors?.map((err) => err.msg)
                  : categoriesError?.message
                  ? categoriesError?.message
                  : ""}
              </Typography>
            </Box>
          ) : categories?.data?.length > 0 ? (
            categories?.data?.map((category) => (
              <AdminCategoryCard key={category._id} category={category} />
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
              <Typography variant="h5">لا يوجد تصنيفات</Typography>
            </Box>
          )}
        </Grid>
      </Container>
    </MainDashboardContent>
  );
}

export default AdminAllCategories;
