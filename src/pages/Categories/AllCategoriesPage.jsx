import React from "react";
import { Box } from "@mui/material";
import PaginationComponent from "../../components/Utility/PaginationComponent";
import CategoriesPageContent from "../../components/Categories/CategoriesPageContent";
import AllCategoryPageHook from "../../Logic/category/AllCategoryPageHook";


function AllCategoriesPage() {
  
  let [categories, categoriesStatus, page, getPage] = AllCategoryPageHook()
  
  
  return (
    <Box sx={{ minHeight: "calc(100vh - 160px)", my: 5 }}>
      <CategoriesPageContent
        categories={categories}
        categoriesStatus={categoriesStatus}
      />

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

export default AllCategoriesPage;
