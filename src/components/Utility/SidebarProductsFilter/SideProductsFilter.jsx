import { Box, Typography } from "@mui/material";
import { STATUS } from "../../../utils/status";
import SidebarProductsFilterLogic from "./SidebarProductsFilterLogic";

function SideProductsFilter() {
  let [
    categories,
    categoriesStatus,
    brands,
    brandsStatus,
    handleCategoryChecked,
    handleBrandChecked,
    handlePriceFrom,
    handlePriceTo,
  ] = SidebarProductsFilterLogic();

  let priceFrom = localStorage.getItem("priceFrom");
  let priceTo = localStorage.getItem("priceTo");

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        <Box>الفئة</Box>

        {categoriesStatus === STATUS.LOADING ? (
          ""
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
          <>
            <Box sx={{ display: "flex", mt: 1 }}>
              <input
                type="checkbox"
                value="0"
                onChange={handleCategoryChecked}
              />
              <Box sx={{ mr: 1 }}>الكل</Box>
            </Box>

            {categories?.data?.map((category) => (
              <Box key={category?._id} sx={{ display: "flex", mt: 1 }}>
                <input
                  type="checkbox"
                  value={category?._id}
                  onChange={handleCategoryChecked}
                />
                <Box sx={{ mr: 1 }}>{category?.name}</Box>
              </Box>
            ))}
          </>
        ) : (
          ""
        )}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        <Box sx={{ mt: 1 }}>الماركة</Box>
        {brandsStatus === STATUS.LOADING ? (
          ""
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
              حدثت مشكله اثناء تحميل الماركات
            </Typography>
          </Box>
        ) : brands.data?.length > 0 ? (
          <>
            <Box sx={{ display: "flex", mt: 1 }}>
              <input type="checkbox" value="0" onChange={handleBrandChecked} />
              <Box sx={{ mr: 1 }}>الكل</Box>
            </Box>

            {brands?.data?.map((brand) => (
              <Box key={brand?._id} sx={{ display: "flex", mt: 1 }}>
                <input
                  type="checkbox"
                  value={brand?._id}
                  onChange={handleBrandChecked}
                />
                <Box sx={{ mr: 1 }}>{brand?.name}</Box>
              </Box>
            ))}
          </>
        ) : (
          ""
        )}
      </Box>
      <Box sx={{ mt: 2 }}>السعر</Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
        <Typography>من:</Typography>
        <input
          style={{ width: "50px", height: "25px" }}
          value={priceFrom}
          onChange={handlePriceFrom}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
        <Typography>الي:</Typography>
        <input
          type="number"
          style={{ width: "50px", height: "25px" }}
          value={priceTo}
          onChange={handlePriceTo}
        />
      </Box>
    </Box>
  );
}

export default SideProductsFilter;
