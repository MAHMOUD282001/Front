import React from "react";
import { Box } from "@mui/material";
import PaginationComponent from "../../components/Utility/PaginationComponent";
import AllCategoriesPageContent from "../../components/Categories/AllCategoriesPageContent";
import AllCategoryPageLogic from "./AllCategoryPageLogic";


function AllCategoriesPage() {
  
  let [categories, categoriesStatus, page, getPage] = AllCategoryPageLogic()
  
  
  return (
    <Box sx={{ minHeight: "calc(100vh - 160px)", my: 5 }}>
      <AllCategoriesPageContent
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
