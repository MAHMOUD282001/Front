import React from "react";
import { Box} from "@mui/material";
import AdminAllOrders from "../../../components/Admin/Orders/AdminAllOrders";
import AdminSidebar from "../../../components/Admin/AdminSidebar";

function AdminAllOrdersPage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <AdminSidebar />
      <AdminAllOrders />
    </Box>
  );
}

export default AdminAllOrdersPage;
