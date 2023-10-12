import React from "react";
import { Box } from "@mui/material";
import BrandsPageContent from "../../components/Brands/BrandsPageContent";
import PaginationComponent from "../../components/Utility/PaginationComponent";
import AllBrandsPageHook from "../../Logic/brand/AllBrandsPageHook";

function AllBrandsPage() {
  let [brands, brandsStatus, page, getPage] = AllBrandsPageHook();

  return (
    <Box sx={{ minHeight: "calc(100vh - 160px)", my: 5 }}>
      <BrandsPageContent brands={brands} brandsStatus={brandsStatus} />
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
