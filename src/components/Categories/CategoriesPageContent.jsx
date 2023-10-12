import { Box, Container, Grid, Typography } from "@mui/material";
import MainTitle from "../Utility/MainTitle";
import CategoryCard from "./CategoryCard";
import Loader from "../Utility/Loader";
import { STATUS } from "../../utils/status";

function CategoriesPageContent({ categories, categoriesStatus }) {
  return (
    <Box>
      <Container>
        <MainTitle
          title={"تسوق حسب الفئات"}
          desc={"تسوق احدث المنتجات المميزة المضافة جديد"}
        />
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
                حدثت مشكله اثناء تحميل التصنيفات
              </Typography>
            </Box>
          ) : categories.data?.length > 0 ? (
            categories.data.map((categoryItem) => (
              <Grid
                key={categoryItem._id}
                item
                lg={2}
                md={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CategoryCard
                  title={categoryItem.name}
                  img={categoryItem.image}
                />
              </Grid>
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
    </Box>
  );
}

export default CategoriesPageContent;
