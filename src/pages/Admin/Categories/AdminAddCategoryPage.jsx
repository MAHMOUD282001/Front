import React from "react";
import { Box } from "@mui/material";
import AdminAddCategory from "../../../components/Admin/Categories/AdminAddCategory";
import AdminSidebar from "../../../components/Admin/AdminSidebar";

function AdminAddCategoryPage() {

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <AdminSidebar />
      <AdminAddCategory />
    </Box>
  );
}

export default AdminAddCategoryPage;
