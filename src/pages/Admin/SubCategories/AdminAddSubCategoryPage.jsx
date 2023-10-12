import React from "react";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import { Box } from "@mui/material";
import AdminAddSubCategory from "../../../components/Admin/SubCategories/AdminAddSubCategory";

function AdminAddSubCategoryPage() {

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <AdminSidebar />
      <AdminAddSubCategory />
    </Box>
  );
}

export default AdminAddSubCategoryPage;
