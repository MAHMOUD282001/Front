import React, { useState } from "react";
import { Box, Container, TextField } from "@mui/material";
import MainTitle from "../../Utility/MainTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CommonBtn from "../../Utility/CommonBtn";
import MainDashboardContent from "../../Utility/MainDashboardContent";
import { STATUS } from "../../../utils/status";
import AddSubCategoryHook from "../../../Logic/SubCategory/AddSubCategoryHook";

function AdminAddSubCategory() {
  let [
    catName,
    subCatName,
    categories,
    handleCatChange,
    handleSubCatChange,
    handleSubCategorySubmit,
    subCategoryStatus,
  ] = AddSubCategoryHook();

  return (
    <MainDashboardContent>
      <Container>
        <MainTitle title={"اضف تصنيف فرعى جديد"} />

        <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 5 }}>
          <TextField
            fullWidth
            required
            value={subCatName}
            onChange={handleSubCatChange}
            InputLabelProps={{
              style: {
                color: "#62D0B6"
              },
            }}
            label="اسم الماركة"
          />
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 5 }} className="select-input">
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              sx={{color: "#62D0B6"}}
            >
              التصنيف الرئيسى
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={catName}
              label="التصنيف الرئيسى"
              onChange={handleCatChange}
            >
              {categories?.data?.length > 0
                ? categories?.data?.map((category) => (
                    <MenuItem key={category._id} value={category._id}>
                      {category.name}
                    </MenuItem>
                  ))
                : ""}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "70%", display: "flex", justifyContent: "flex-end" } }}>
          <Box
            sx={{ width: "150px", height: "56px"}}
            onClick={handleSubCategorySubmit}
          >
            <CommonBtn
              width={"100%"}
              height={"100%"}
              text={"اضافه"}
              loading={
                subCategoryStatus === STATUS.SUCCEEDED ||
                subCategoryStatus === STATUS.FAILED ||
                subCategoryStatus === STATUS.IDLE
              }
            />
          </Box>
        </Box>
      </Container>
    </MainDashboardContent>
  );
}

export default AdminAddSubCategory;
