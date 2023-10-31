import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import MainTitle from "../../Utility/MainTitle";
import CommonBtn from "../../Utility/CommonBtn";
import MainDashboardContent from "../../Utility/MainDashboardContent";
import { STATUS } from "../../../utils/status";
import { Container, TextField } from "@material-ui/core";

function AdminEditBrand({
  name,
  img,
  handleNameChange,
  handleImgChange,
  brandStatus,
  handleBrandSubmit,
}) {
  return (
    <MainDashboardContent>
      <Container maxWidth={"lg"}>
        <MainTitle title={"تعديل ماركه"} />

        <Typography
          variant="body1"
          sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
        >
          صور الماركه
        </Typography>

        <Box
          sx={{
            maxWidth: 200,
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            my: 3,
          }}
        >
          <label htmlFor="upload-img" style={{ width: "100%", height: "100%" }}>
            <img src={img} alt="Upload Img" style={{ cursor: "pointer" }} />
          </label>

          <input
            type="file"
            name="photo"
            id="upload-img"
            onChange={handleImgChange}
            style={{ display: "none" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "70%" } }}>
            <TextField
              margin="none"
              fullWidth
              variant="outlined"
              required
              InputLabelProps={{
                style: {
                  color: "#62D0B6",
                },
              }}
              label="اسم التصنيف"
              onChange={handleNameChange}
              value={name}
            />
          </Box>

          <Box
            sx={{ width: "150px", height: "56px" }}
            onClick={handleBrandSubmit}
          >
            <CommonBtn
              width={"100%"}
              height={"100%"}
              text={"اضافه"}
              loading={
                brandStatus === STATUS.SUCCEEDED ||
                brandStatus === STATUS.FAILED ||
                brandStatus === STATUS.IDLE
              }
            />
          </Box>
        </Box>
      </Container>
    </MainDashboardContent>
  );
}

export default AdminEditBrand;
