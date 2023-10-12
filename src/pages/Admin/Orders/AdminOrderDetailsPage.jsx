import React from "react";
import { Box } from "@mui/material";
import OrderDetails from "../../../components/Admin/Orders/OrderDetails";
import AdminSidebar from "../../../components/Admin/AdminSidebar";

function AdminOrderDetailsPage() {

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <AdminSidebar />
      <OrderDetails />
    </Box>
  );
}

export default AdminOrderDetailsPage;
