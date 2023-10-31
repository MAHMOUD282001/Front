import React from "react";
import CommonBtn from "../../../Utility/CommonBtn";
import AdminAddCouponLogic from "./AdminAddCouponLogic";
import { STATUS } from "../../../../utils/status";
import { TextField } from "@material-ui/core";
import { Box } from "@mui/material";

function AdminAddCoupon() {
  let [
    dateRef,
    couponName,
    couponDate,
    couponPercentage,
    couponStatus,
    handleFocus,
    handleBlur,
    handleCouponNameChange,
    handleCouponDateChange,
    handleCouponPercentageChange,
    handleCouponSubmit,
  ] = AdminAddCouponLogic();

  return (
    <>
      <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
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
          label="اسم الكوبون"
          onChange={handleCouponNameChange}
          value={couponName}
        />
      </Box>

      <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
        <TextField
          ref={dateRef}
          margin="none"
          fullWidth
          variant="outlined"
          required
          type="text"
          InputLabelProps={{
            style: {
              color: "#62D0B6",
            },
          }}
          label="تاريخ انتهاء الكوبون"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleCouponDateChange}
          value={couponDate}
        />
      </Box>

      <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
        <TextField
          margin="none"
          fullWidth
          required
          type="number"
          variant="outlined"
          InputLabelProps={{
            style: {
              color: "#62D0B6",
            },
          }}
          label="نسبة خصم الكوبون"
          onChange={handleCouponPercentageChange}
          value={couponPercentage}
        />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "70%" },
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CommonBtn
          width={"150px"}
          height={"56px"}
          text={"اضافه"}
          handleOnClick={handleCouponSubmit}
          loading={
            couponStatus === STATUS.SUCCEEDED ||
            couponStatus === STATUS.FAILED ||
            couponStatus === STATUS.IDLE
          }
        />
      </Box>
    </>
  );
}

export default AdminAddCoupon;
