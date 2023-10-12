import React from "react";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import { Box } from "@mui/material";
import PaginationComponent from "../../../components/Utility/PaginationComponent";
import AdminAllBrandsHook from "../../../Logic/Admin/Brand/AdminAllBrandsHook";
import AdminAllBrands from "../../../components/Admin/Brands/AdminAllBrands";

function AdminAllBrandsPage() {
    let [brands, brandsStatus, brandsError, page, getPage] =
    AdminAllBrandsHook();
  
  return (
    <Box sx={{ marginBottom: 5 }}>
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
      }}
    >
      <AdminSidebar />
      <AdminAllBrands
        brands={brands}
        brandsStatus={brandsStatus}
        brandsError={brandsError}
      />
    </Box>

    {brands?.paginationResult?.numberOfPages > 1 ? (
      <PaginationComponent
        pageCount={brands?.paginationResult?.numberOfPages}
        getPage={getPage}
        page={page}
      />
    ) : (
      ""
    )}
  </Box>
  )
}

export default AdminAllBrandsPage