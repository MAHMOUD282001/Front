import React from "react";
import { Box, Grid, Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Delete, Edit } from "@mui/icons-material";
import AdminDeleteCouponLogic from "./AdminDeleteCouponLogic";
import CommonBtn from "../../../Utility/CommonBtn";
import AdminEditCouponLogic from "./AdminEditCouponLogic";
import { TextField } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: 500, xs: 300 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

function AdminCouponCard({ coupon }) {
  let navigate = useNavigate();

  let [handleDeleteCoupon] = AdminDeleteCouponLogic();

  let [
    open,
    dateRef,
    couponName,
    couponDate,
    couponPercentage,
    couponStatus,
    handleClose,
    handleOpen,
    handleFocus,
    handleBlur,
    handleCouponNameChange,
    handleCouponDateChange,
    handleCouponPercentageChange,
    handleSubmit,
  ] = AdminEditCouponLogic(coupon);

  let date = new Date(coupon?.expire).toLocaleDateString();

  return (
    <Grid item xs={12} sx={{ mb: 3 }}>
      <Box
        sx={{
          backgroundColor: "#fff",
          boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "10px",
          padding: "20px",
        }}
        onClick={() => navigate("")}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "space-between" },
            flexWrap: { xs: "wrap", sm: "nowrap" },
            gap: { xs: 3, sm: 0 },
            mb: 3,
          }}
        >
          <Box sx={{ textAlign: { xs: "center", sm: "right" } }}>
            <Typography variant="h6" sx={{ color: "#000", display: "inline" }}>
              اسم الكوبون: {coupon?.name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
              onClick={handleOpen}
            >
              <Edit sx={{ fontSize: "16px" }} />
              <Typography variant="body2" sx={{ color: "#666666" }}>
                تعديل
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
              onClick={() => handleDeleteCoupon(coupon?._id)}
            >
              <Delete sx={{ fontSize: "16px" }} />
              <Typography variant="body2" sx={{ color: "#666666" }}>
                ازالة
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 2, textAlign: { xs: "center", sm: "right" } }}>
          <Typography
            sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
          >
            تاريخ الانتهاء:{" "}
          </Typography>
          <Typography
            sx={{ color: "#000", display: "inline", fontSize: "18px" }}
          >
            {date}
          </Typography>
        </Box>

        <Box sx={{ mt: 2, textAlign: { xs: "center", sm: "right" } }}>
          <Typography
            sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
          >
            نسبة الخصم:{" "}
          </Typography>
          <Typography
            sx={{ color: "#000", display: "inline", fontSize: "18px" }}
          >
            {coupon?.discount} %
          </Typography>
        </Box>
      </Box>

      {/* Modal To Update Coupon */}

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            تعديل كوبون
          </Typography>
          <Box sx={{ mb: 3 }}>
            <TextField
              margin="none"
              variant="outlined"
              fullWidth
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
          <Box sx={{ mb: 3 }}>
            <TextField
              ref={dateRef}
              variant="outlined"
              margin="none"
              fullWidth
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

          <Box sx={{ mb: 3 }}>
            <TextField
              margin="none"
              variant="outlined"
              fullWidth
              required
              type="number"
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
            sx={{ display: "flex", justifyContent: "center", mt: 3 }}
            onClick={handleSubmit}
          >
            <CommonBtn
              width={"200px"}
              height={"60px"}
              text={"تاكيد"}
              loading={true}
              // type={"submit"}
            />
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
}

export default AdminCouponCard;
