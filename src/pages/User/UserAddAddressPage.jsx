import React from "react";
import { Box } from "@mui/material";
import UserSidebar from "../../components/User/UserSidebar";
import UserAddAddress from "../../components/User/Addresses/UserAddAddress";

function UserAddAddressPage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <UserSidebar />
      <UserAddAddress />
    </Box>
  );
}

export default UserAddAddressPage;
