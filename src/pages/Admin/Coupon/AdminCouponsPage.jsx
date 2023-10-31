import { Box } from "@mui/material";
import React from "react";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminCoupons from "../../../components/Admin/Coupon/AdminCoupons";

export default function AdminCouponsPage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <AdminSidebar />
      <AdminCoupons />
    </Box>
  );
}
