import React from "react";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminEditCategory from "../../../components/Admin/Categories/AdminEditCategory";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import AdminEditCategoryHook from "../../../Logic/Admin/Category/AdminEditCategoryHook";

function AdminEditCategoryPage() {
  let { id } = useParams();

  let [
    img,
    name,
    categoryStatus,
    handleNameChange,
    handleImgChange,
    handleCategorySubmit,
  ] = AdminEditCategoryHook(id);

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
