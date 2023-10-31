import React from "react";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import { Box } from "@mui/material";
import AdminAddProduct from "../../../components/Admin/Products/AdminAddProduct/AdminAddProduct";

function AdminAddProductPage() {

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <AdminSidebar />
      <AdminAddProduct />
    </Box>
  );
}

export default AdminAddProductPage;
