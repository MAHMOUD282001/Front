import React from "react";
import AdminSidebar from "../../../../components/Admin/AdminSidebar";
import { Box } from "@mui/material";
import AdminAddBrand from "../../../../components/Admin/Brands/AdminAddBrand/AdminAddBrand";

function AdminAddBrandPage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <AdminSidebar />
      <AdminAddBrand />
    </Box>
  );
}

export default AdminAddBrandPage;
