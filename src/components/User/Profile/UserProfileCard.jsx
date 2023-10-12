import { Delete, Edit } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function UserProfileCard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundColor: "#fff",
            boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "10px",
            padding: "20px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "space-between" },
              flexWrap: { xs: "wrap", sm: "nowrap" },
              gap: { xs: 3, sm: 0 },
            }}
          >
            <Box sx={{ textAlign: { xs: "center", sm: "right" } }}>
              <Typography
                sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
              >
                الاسم:{" "}
              </Typography>
              <Typography
                sx={{ color: "#000", display: "inline", fontSize: "18px" }}
              >
                احمد محمد
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                }}
              >
                <Delete sx={{ fontSize: "16px" }} />
                <Typography variant="body2" sx={{ color: "#666666" }}>
                  ازالة
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 3, textAlign: { xs: "center", sm: "right" } }}>
            <Typography
              sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
            >
              الايميل:{" "}
            </Typography>
            <Typography
              sx={{ color: "#000", display: "inline", fontSize: "18px" }}
            >
              ex.ex.com
            </Typography>
          </Box>

          <Box sx={{ mt: 3, textAlign: { xs: "center", sm: "right" } }}>
            <Typography
              sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
            >
              رقم الهاتف:{" "}
            </Typography>
            <Typography
              sx={{ color: "#000", display: "inline", fontSize: "18px" }}
            >
              01068528416
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default UserProfileCard;
