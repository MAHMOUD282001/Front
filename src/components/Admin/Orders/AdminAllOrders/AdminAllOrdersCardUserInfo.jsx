import { Star } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

function AdminAllOrdersCardUserInfo({ user }) {
  return (
    <Box sx={{ mb: 7 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "space-between" },
          flexWrap: { xs: "wrap", sm: "nowrap" },
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 3, sm: 0 },
          mt: 3,
        }}
      >
        <Box>
          <Box sx={{ textAlign: { xs: "center", sm: "right" } }}>
            <Typography variant="h6" sx={{ color: "#000", display: "inline" }}>
              اسم العميل:{" "}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#666666", display: "inline" }}
            >
              {user?.name}
            </Typography>
          </Box>

          <Box sx={{ textAlign: { xs: "center", sm: "right" }, mt: 2 }}>
            <Typography variant="h6" sx={{ color: "#000", display: "inline" }}>
              الايميل:{" "}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#666666", display: "inline" }}
            >
              {user?.email}
            </Typography>
          </Box>

          <Box sx={{ textAlign: { xs: "center", sm: "right" }, mt: 2 }}>
            <Typography variant="h6" sx={{ color: "#000", display: "inline" }}>
              رقم التليفون:{" "}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#666666", display: "inline" }}
            >
              {user?.phone}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminAllOrdersCardUserInfo;
