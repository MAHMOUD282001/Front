import React from "react";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminAllProducts from "../../../components/Admin/Products/AdminAllProducts";
import { Box } from "@mui/material";
import AdminAllProductsHook from "../../../Logic/Admin/Product/AdminAllProductsHook";
import PaginationComponent from "../../../components/Utility/PaginationComponent";

function AdminAllProductsPage() {
  let [products, productsStatus, productsError, page, getPage] =
    AdminAllProductsHook();

  return (
    <Box sx={{ marginBottom: 5 }}>
      <Box
        sx={{
          minHeight: "calc(100vh - 150px)",
          display: "flex",
        }}
      >
        <AdminSidebar />
        <AdminAllProducts
          products={products}
          productsStatus={productsStatus}
          productsError={productsError}
        />
      </Box>

      {products?.paginationResult?.numberOfPages > 1 ? (
        <PaginationComponent
          pageCount={products?.paginationResult?.numberOfPages}
          getPage={getPage}
          page={page}
        />
      ) : (
        ""
      )}
    </Box>
  );
}

export default AdminAllProductsPage;
