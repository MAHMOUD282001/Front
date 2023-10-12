import { Box, Container, Grid, Typography } from "@mui/material";
import MainTitle from "../../Utility/MainTitle";
import CategoryCard from "../../Categories/CategoryCard";
import Loader from "../../Utility/Loader";
import { STATUS } from "../../../utils/status";
import HomeCategoriesHook from "../../../Logic/Home/HomeCategoriesHook";

function HomeCategories() {
  let [categories, categoriesStatus, categoriesError] = HomeCategoriesHook();
  
  
  return (
    <Box className="special-products" sx={{ my: 5 }}>
      <Container>
        <MainTitle
          title={"تسوق حسب الفئات"}
          desc={"تسوق احدث المنتجات المميزة المضافة جديد"}
          btnText={"عرض الكل"}
          path={"/allCategories"}
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
              <Typography variant="h5">{categoriesError}</Typography>
            </Box>
          ) : categories.data?.length > 0 ? (
            categories.data
              ?.slice(
                0,
                categories.data.length < 6 ? categories.data.length : 6
              )
              .map((categoryItem) => (
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

export default HomeCategories;
