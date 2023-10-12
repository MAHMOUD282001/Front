import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Delete, DeleteOutline, Edit } from "@mui/icons-material";

function UserAddressesCard() {
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
            <Typography variant="h6" sx={{ color: "#000", display: "inline" }}>
              المنزل
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
              
              onClick={()=> navigate("/user/editAddress")}
            >
              <Edit sx={{ fontSize: "16px" }} />
              <Typography variant="body2" sx={{ color: "#666666" }}>
                تعديل
              </Typography>
            </Box>

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

        <Box sx={{textAlign: { xs: "center", sm: "right" }}}>
          <Typography sx={{ color: "#666666", mt: 4 }}>القاهرة</Typography>
        </Box>

        <Box sx={{ mt: 2, textAlign: { xs: "center", sm: "right" } }}>
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
  );
}

export default UserAddressesCard;
