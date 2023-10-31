import React from "react";
import { Box} from "@mui/material";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminAllOrders from "../../../components/Admin/Orders/AdminAllOrders/AdminAllOrders/AdminAllOrders";

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
