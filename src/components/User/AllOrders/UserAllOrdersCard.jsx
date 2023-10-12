import React from "react";
import UserAllOrdersCardCommonItem from "./UserAllOrdersCardCommonItem";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UserAllOrdersCard({ heading }) {
  let navigate = useNavigate();

  return (
    <Grid item xs={12}>
      <Box
        sx={{
          backgroundColor: "#fff",
          boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "10px",
          padding: "20px",
          cursor: "pointer",
        }}
        onClick={() => navigate("")}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          {heading}
        </Typography>
        <UserAllOrdersCardCommonItem />
        <UserAllOrdersCardCommonItem />
        <UserAllOrdersCardCommonItem />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "space-between" },
            flexWrap: { xs: "wrap", sm: "nowrap" },
            gap: { xs: 3, sm: 0 },
            mt: 3,
          }}
        >
          <Box sx={{ textAlign: { xs: "center", sm: "right" } }}>
            <Typography
              variant="h6"
              sx={{ color: "#000", display: "inline" }}
            >
              الحاله:{" "}
            </Typography>
            <Typography variant="h6" sx={{ color: "#666666", display: "inline" }}>
              قيد التنفيذ
            </Typography>
          </Box>

          <Typography variant="h6" sx={{ color: "#000" }}>
            3000 جنيه
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default UserAllOrdersCard;
