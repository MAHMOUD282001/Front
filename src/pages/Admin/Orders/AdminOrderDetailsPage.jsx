import React from "react";
import { Box } from "@mui/material";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminOrderDetails from "../../../components/Admin/Orders/AdminOrderDetails/AdminOrderDetails/AdminOrderDetails";

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
      <AdminOrderDetails />
    </Box>
  );
}

export default AdminOrderDetailsPage;
