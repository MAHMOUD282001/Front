import React from "react";
import { Box } from "@mui/material";
import AllBrandsPageContent from "../../components/Brands/AllBrandsPageContent";
import PaginationComponent from "../../components/Utility/PaginationComponent";
import AllBrandsPageLogic from "./AllBrandsPageLogic";

function AllBrandsPage() {
  let [brands, brandsStatus, page, getPage] = AllBrandsPageLogic();

  return (
    <Box sx={{ minHeight: "calc(100vh - 160px)", my: 5 }}>
      <AllBrandsPageContent brands={brands} brandsStatus={brandsStatus} />
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
  );
}

export default AllBrandsPage;
