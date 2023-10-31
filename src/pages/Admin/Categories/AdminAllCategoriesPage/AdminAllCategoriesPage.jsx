import React from "react";
import AdminSidebar from "../../../../components/Admin/AdminSidebar";
import { Box } from "@mui/material";
import PaginationComponent from "../../../../components/Utility/PaginationComponent";
import AdminAllCategoriesPageLogic from "./AdminAllCategoriesPageLogic";
import AdminAllCategories from "../../../../components/Admin/Categories/AdminAllCategories";

function AdminAllCategoriesPage() {
  let [categories, categoriesStatus, categoriesError, page, getPage] =
    AdminAllCategoriesPageLogic();

  return (
    <Box sx={{ marginBottom: 5 }}>
      <Box
        sx={{
          minHeight: "calc(100vh - 150px)",
          display: "flex",
        }}
      >
        <AdminSidebar />
        <AdminAllCategories
          categories={categories}
          categoriesStatus={categoriesStatus}
          categoriesError={categoriesError}
        />
      </Box>

      {categories?.paginationResult?.numberOfPages > 1 ? (
        <PaginationComponent
          pageCount={categories?.paginationResult?.numberOfPages}
          getPage={getPage}
          page={page}
        />
      ) : (
        ""
      )}
    </Box>
  );
}

export default AdminAllCategoriesPage;
