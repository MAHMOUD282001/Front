import React from "react";
import AdminSidebar from "../../../../components/Admin/AdminSidebar";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import AdminEditCategoryPageLogic from "./AdminEditCategoryPageLogic";
import AdminEditCategory from "../../../../components/Admin/Categories/AdminEditCategory";

function AdminEditCategoryPage() {
  let { id } = useParams();

  let [
    img,
    name,
    categoryStatus,
    handleNameChange,
    handleImgChange,
    handleCategorySubmit,
  ] = AdminEditCategoryPageLogic(id);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <AdminSidebar />
      <AdminEditCategory
        name={name}
        img={img}
        handleNameChange={handleNameChange}
        handleImgChange={handleImgChange}
        categoryStatus={categoryStatus}
        handleCategorySubmit={handleCategorySubmit}
      />
    </Box>
  );
}

export default AdminEditCategoryPage;
