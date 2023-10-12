import React from "react";
import { Box } from "@mui/material";
import UserSidebar from "../../components/User/UserSidebar";
import UserAddresses from "../../components/User/Addresses/UserAddresses";

function UserAddressesPage() {

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <UserSidebar />
      <UserAddresses />
    </Box>
  );
}

export default UserAddressesPage;
