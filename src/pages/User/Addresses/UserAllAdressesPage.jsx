import React from "react";
import { Box } from "@mui/material";
import UserSidebar from "../../../components/User/UserSidebar";
import UserAllAddresses from "../../../components/User/Addresses/UserAllAddresses/UserAllAddresses";

function UserAllAdressesPage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <UserSidebar />
      <UserAllAddresses />
    </Box>
  );
}

export default UserAllAdressesPage;
