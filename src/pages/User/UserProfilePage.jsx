import React from "react";
import { Box } from "@mui/material";
import UserSidebar from "../../components/User/UserSidebar";
import UserProfile from "../../components/User/Profile/UserProfile";

function UserProfilePage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <UserSidebar />
      <UserProfile />
    </Box>
  );
}

export default UserProfilePage;
