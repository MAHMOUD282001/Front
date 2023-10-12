import React from "react";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import { Box } from "@mui/material";
import UserSidebar from "../../components/User/UserSidebar";
import UserAllOrders from "../../components/User/AllOrders/UserAllOrders";

function UserAllOrdersPage() {

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <UserSidebar />
      <UserAllOrders />
    </Box>
  );
}

export default UserAllOrdersPage;
