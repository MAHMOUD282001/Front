import React from "react";
import { Box } from "@mui/material";
import UserSidebar from "../../components/User/UserSidebar";
import UserEditAddress from "../../components/User/Addresses/UserEditAddress";

function UserEditAddressPage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <UserSidebar />
      <UserEditAddress />
    </Box>
  );
}

export default UserEditAddressPage;
