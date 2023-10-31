import React from "react";
import AdminSidebar from "../../../../components/Admin/AdminSidebar";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import AdminEditBrand from "../../../../components/Admin/Brands/AdminEditBrand";
import AdminEditBrandLogic from "./AdminEditBrandLogic";

function AdminEditBrandPage() {
  let { id } = useParams();

  let [
    img,
    name,
    brandStatus,
    handleNameChange,
    handleImgChange,
    handleBrandSubmit,
  ] = AdminEditBrandLogic(id);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <AdminSidebar />
      <AdminEditBrand
        name={name}
        img={img}
        handleNameChange={handleNameChange}
        handleImgChange={handleImgChange}
        brandStatus={brandStatus}
        handleBrandSubmit={handleBrandSubmit}
      />
    </Box>
  );
}

export default AdminEditBrandPage;
